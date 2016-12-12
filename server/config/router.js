const express = require('express');
const router = express.Router();
const api = express.Router();

module.exports = (app) => {
  require('../controllers/app.controller')(router);
  require('../controllers/api.controller')(api);

  app.use('/api', api);
  app.use('/', router);
};
