const app = require('express').Router();
const path = require('path');
const {enableAuth} = require('../config');

const router = require('./routes');

app.use(require('body-parser').json());

app.use('/auth/v1', require('./auth'));

if(enableAuth) {
  const authorize = require('./auth/authorize');
  app.get('/api/v1/events(|/*)', authorize(['events:all', 'events:read']));
  // app.get('/api/v1/notes(|/*)');
  app.post('/api/v1/events(|*)', authorize(['events:all', 'events:read']));
  app.put('/api/v1/events(|*)', authorize(['events:all', 'events:edit']));
  app.delete('/api/v1/events(|*)', authorize(['events:all', 'events:edit']));
  // app.patch('/api/v1/notes(|*)', authorize(['notes:all', 'notes:write']));
}

app.use('/api/v1', router);

app.use((err, req, res, next) => {
  if(err) { next(); }
  console.log('err:', err);
});

module.exports = app;
