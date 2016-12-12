module.exports = (itemData, description) => {
  const response = {};

  itemData = JSON.parse(itemData);
  description = JSON.parse(description);

  const item = {
    'id' : itemData.id,
    'title' : itemData.title,
    'price' : {
      'currency' : itemData.currency_id,
      'amount' : itemData.price,
      'decimals' : 0
    },
    'picture' : itemData.pictures[0].url,
    'condition' : itemData.condition,
    'free_shipping' : itemData.shipping.free_shipping,
    'sold_quantity' : itemData.sold_quantity,
    'description': description.text
  };

  response.author = {
    'name' : 'Jonathan',
    'lastname' : 'Mastropasqua'
  };

  response.item = item;

  return response;
};
