import React from 'react';
import action from './../actions/GroceryItemActionCreator';

class GroceryItem extends React.Component {
  togglePurchased=(e) => {
    e.preventDefault();
    this.props.item.purchased ? action.unbuy(this.props.item): action.buy(this.props.item);
  };
  delete= (e)=>{
    e.preventDefault();
    action.delete(this.props.item);
  };
  render() {
    return (
      <div className="pull-left  col-md-12">
        <div className="pull-left  col-md-4">
          <h4 className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>
        </div>
        <form className="col-md-4"  onSubmit={this.togglePurchased}>
          <button className={this.props.item.purchased ? "btn-danger " : "btn-info" }>
            {this.props.item.purchased ? " Unbuy" : "Buy" }
          </button>
        </form>
        <form className="" onSubmit={this.delete}>
          <button className="btn-info" > &times; </button>
        </form>
        <hr />
      </div>
    );
  }
}

export default GroceryItem;
