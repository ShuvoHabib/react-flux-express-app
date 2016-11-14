import React from 'react';
import GroceryItem from './SingleItem';
import GroceryListAddItem from './ListAddItem';

class GroceryItemList extends React.Component {
  render() {
    return (
      <div>
        <h1>All Items</h1>
        <div className="grocery-addItem ">
          {
            this.props.items.map((item, index)=>{
              return(
              <GroceryItem item={item} key={"item" + index}/>
              )
            })
          }
        </div>
        <GroceryListAddItem />
      </div>
    );
  }
}

export default GroceryItemList;
