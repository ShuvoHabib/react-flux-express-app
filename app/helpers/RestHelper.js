var $ = require('jquery');

module.exports = {
  get(url){
    return new Promise((success,error)=> {
      $.ajax({
        url:url,
        dataType:"json",
        success:success,
        error:error
      })
    })
  },
  post(url, data){
    return new Promise((success, error)=> {
      $.ajax({
        url:url,
        data:data,
        type:"POST",
        success:success,
        error:error
      })
    })
  }
};