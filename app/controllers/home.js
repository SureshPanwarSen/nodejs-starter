const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Generator-Express MVC'
  });
});
