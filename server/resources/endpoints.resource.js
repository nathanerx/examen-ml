const endpoints = {
  items: {
    method: 'get',
    url: 'https://api.mercadolibre.com/sites/MLA/search?q=:query'
  },
  item: {
    method: 'get',
    url: 'https://api.mercadolibre.com/items/:id'
  },
  description: {
    method: 'get',
    url: 'https://api.mercadolibre.com/items/:id/description'
  },
  currency: {
    method: 'get',
    url: 'https://api.mercadolibre.com/currencies/:currency'
  }
};

module.exports = endpoints;