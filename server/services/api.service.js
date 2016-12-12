const request = require('request');
const endpoints = require('../resources/endpoints.resource.js');

const apiService = {

  getItems : (req) => {
    return new Promise((resolve, reject) => {
      const url = endpoints.items.url.replace(':query', req.query.q);
      request[endpoints.items.method](url, (err, response, body) => {
        if (err) {
          reject(err);
        } else {
          resolve({response, body});
        }
      });
    });
  },

  getItem : (req) => {
    return new Promise((resolve, reject) => {
      const url = endpoints.item.url.replace(':id', req.params.id);
      request[endpoints.item.method](url, (err, response, body) => {
        if (err) {
          reject(err);
        } else {
          resolve({response, body});
        }
      });
    });
  },

  getItemDescription : (req) => {
    return new Promise((resolve, reject) => {
      const url = endpoints.description.url.replace(':id', req.idItem);
      request[endpoints.description.method](url, (err, response, body) => {
        if (err) {
          reject(err);
        } else {
          resolve({response, body});
        }
      });
    });
  }

};

module.exports = apiService;