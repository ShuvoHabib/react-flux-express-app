import React from 'react';
import action from './../actions/GroceryItemActionCreator';

class GroceryListAddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ""};
  }
  handleInputName = (e) => {
    console.log(this.state.input);
    this.setState({
      input: e.target.value
    });
  }
  addItem(e){
    e.preventDefault();
    action.add({
      name: this.state.input
    });
    this.setState({
      input:''
    })
  }
  render() {
    return (
      <div className="grocery-addItem col-md-12">
        <form onSubmit={this.addItem.bind(this)}>
          <input value={this.state.input} onChange={this.handleInputName}/>
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default GroceryListAddItem;
