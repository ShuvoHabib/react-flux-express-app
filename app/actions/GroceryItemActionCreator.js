import dispatcher from './../dispatcher';

export default {
  add(item){
    dispatcher.dispatch({
      payload: item,
      type: "grocery-item:add"
    })
  }
}