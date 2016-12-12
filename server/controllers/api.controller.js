const apiService = require('../services/api.service.js');
const resultTransformer = require('../transformers/result.transformer');
const detailTransformer = require('../transformers/detail.transformer');

const apiController = (router) => {

  router.get('/items', (req, res) => {
    apiService.getItems(req).then(
      (response) => {
        const data = resultTransformer(response.body);
        res.send(data);
      }, (error) => {
      console.log('Error: ', error);
    });
  });

  router.get('/items/:id', (req, res) => {
    apiService.getItem(req).then(
      (item) => {
        req.idItem = JSON.parse(item.body).id;
        apiService.getItemDescription(req).then(
          (description) => {
            const data = detailTransformer(item.body, description.body);
            res.send(data);
          }, (err) => {
          console.log('Error: ', err);
        });
      }, (error) => {
      console.log('Error: ', error);
    });
  });

};

module.exports = apiController;