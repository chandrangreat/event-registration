var express = require('express');
var router = express.Router();


router.get('/events', function(req, res, next) {
  res.status(200).json({msg: 'GetRequest Success'});
  next();
});

router.post('/events/:id', function(req, res, next) {
  res.status(200).json({msg: `Post Success with id ${id}`});
  next();
});

router.put('/events/:id', function(req, res, next) {
  res.status(200).json({msg: `PUT Success with id ${id}`});
  next();
});

router.delete('/events/:id', function(req, res, next) {
  res.status(200).json({msg: `DELETE Success with id ${id}`});
  next();
});




module.exports = router;
