import dispatcher from './../dispatcher';
import helper from './../helpers/RestHelper';

function groceryItemStore() {
  var items = [];

  helper.get("api/v1/products")
    .then((response)=> {
      items = response.data;
      triggerListeners();
    });

  var listeners = [];

  function getItems() {
    return items;
  }

  function addGroceryItem(item) {
    items.push(item);
    triggerListeners();
    helper.post("api/v1/products", item);
  }

  function deleteGroceryItem(item) {
    var index = items.findIndex((_item)=> {
      return _item.name == item.name
    });

    var item = items.splice(index, 1).pop();

    triggerListeners();
    helper.delete(`api/v1/products/${item._id}`);
  }

  function setGroceryItemBought(item, isBought) {
    var _item = items.filter((a)=>a.name == item.name)[0];
    item.purchased = isBought || false;
    triggerListeners();
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function triggerListeners() {
    listeners.forEach((listener) => {
      listener(items);
    })
  }

  dispatcher.register((event) => {
    var split = event.type.split(':');
    if (split[0] === 'grocery-item') {
      switch (split[1]) {
        case "add":
          addGroceryItem(event.payload);
          break;
        case "delete":
          deleteGroceryItem(event.payload);
          break;
        case "buy":
          setGroceryItemBought(event.payload, true);
          break;
        case "unbuy":
          setGroceryItemBought(event.payload, false);
          break;
      }
    }
  });
  return {
    getItems: getItems,
    onChange: onChange
  }
}

export default new groceryItemStore();
