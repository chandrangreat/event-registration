const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config');

function generateToken({email, scopes}, done) {
  jwt.sign({scopes},jwtSecret,{subject: email}, done);
}

module.exports = generateToken;
