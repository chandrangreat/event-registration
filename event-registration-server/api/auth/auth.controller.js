const {users} = require('../../config');
const generateToken = require('./generateToken');
const verifyToken = require('./verifyToken');
require('../../models/index');
const mongoose = require('mongoose');
const User = mongoose.model('user');

function authenticate(req, res, next) {
  console.log('HERE');
  const username = req.body.email;
  const password = req.body.password;

  if(!users[username]) { res.status(403).json({message: 'Unauthorized'}); return; }
  if(users[username].password !== password) { res.status(403).json({message: 'Unauthorized'}); return; }

  const scopes = users[username].scopes;

  generateToken({username, scopes}, (err, token) => {
    if(err) { res.status(403).json({message: 'Unauthorized'}); return; }
    res.status(201).json({token});
  });
}

function register(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const scopes = ['events:all','events:read', 'events:edit'];
  const params = {
    email: email,
    password: password,
    scopes: scopes
  };
  console.log(req.body);

  User.create({email, password, scopes}, (err) => {
    if(err) {res.status(403).json({message: err});}
    else {
      generateToken({email, scopes}, (err, token) => {
        if(err) { res.status(403).json({message: `Unauthorized`}); return; }
        res.status(201).json({token});
      });
    }
  })
}

function isAuthenticated(req, res, next) {
  const authorizationHeader = req.get('Authorization');
  if(!authorizationHeader) { res.status(200).json({isAuthenticated: false}); return; }

  const token = authorizationHeader.replace('Bearer ', '');
  verifyToken(token, (err) => {
    if(err) { res.status(200).json({isAuthenticated: false}); return; }
    else res.status(200).json({isAuthenticated: true}); return;
  })
}

module.exports = {
  authenticate,
  register,
  isAuthenticated
}
