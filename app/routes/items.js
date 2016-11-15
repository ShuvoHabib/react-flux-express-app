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
    name: "iPads"
  }];


  router.get('/items',(req, res)=>{
    res.json(items);
  });

  router.post('/items',(req,res)=>{
    req.json(items);
    var item = req.body;
    items.push(item);
  });


  module.exports = router;
