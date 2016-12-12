module.exports = (data) => {
  const response = {};
  const items = [];

  data = JSON.parse(data);

  for (const key in data.results) {
    const item = {
      'id' : data.results[key].id,
      'title' : data.results[key].title,
      'price' : {
        'currency' : data.results[key].currency_id,
        'amount' : data.results[key].price,
        'decimals' : 0
      },
      'picture' : data.results[key].thumbnail,
      'condition' : data.results[key].condition,
      'free_shipping' : data.results[key].shipping.free_shipping,
      'state' : data.results[key].address.state_name
    };
    items.push(item);
  }

  for (const key in data.available_filters) {
    if (data.available_filters[key].id === 'category') {
      response.categories = data.available_filters[key].values.map((category) => {
        return category.name;
      });
    }
  }

  response.author = {
    'name' : 'Jonathan',
    'lastname' : 'Mastropasqua'
  };

  response.items = items;

  return response;
};