var express = require("express");
var router = express.Router()

  var items = [{
    name: "Computer"
  }, {
    name: "iMac"
  }, {
    name: "Football",
    purchased: "true"
  }, {
    name: "iPad"
  }];


    router.get('/items',(req,res)=>{
      res.json(items);
    });

    module.exports = router;
