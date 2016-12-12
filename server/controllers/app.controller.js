const appController = (router) => {
  router.get('/', (req, res) => {
    res.render('index', req);
  });

  router.get('/items', (req, res) => {
    res.render('results', req);
  });

  router.get('/items/:id', (req, res) => {
    res.render('detail', req);
  });
};

module.exports = appController;