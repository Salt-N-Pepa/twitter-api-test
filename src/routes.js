const express = require('express');

const routes = express.Router();

//Controllers
const SearchController = require('./controllers/SearchController');

//Routes
routes
  .post('/search', SearchController.search)

module.exports = routes;

