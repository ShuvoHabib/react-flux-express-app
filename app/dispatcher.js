import guid from 'guid';
const listeners = {};

export default {
  register(cb){
    var id = guid.raw();
    listeners[id] = cb;
    return id;
  },
  dispatch(payload){
    console.info("Dispatching", payload);
    for(var id in listeners){
      var listener = listeners[id];
      listener(payload);
    }
  }
}