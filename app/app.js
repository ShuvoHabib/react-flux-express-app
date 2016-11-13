import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppContainer
} from 'react-hot-loader';
import {render} from 'react-dom';
import GroceryItemList from './components/GroceryItemList';
import groceryItemStore from './stores/GroceryItemStore';
var initial = groceryItemStore.getItems();

class App extends React.Component {
  render() {
    return (
      <div>
        <GroceryItemList items={initial}/>
      </div>
    );
  }
}

function renderF(){
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
}
groceryItemStore.onChange((items)=>{
  initial = items;
  renderF()
});
renderF();

