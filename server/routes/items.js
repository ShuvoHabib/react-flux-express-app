const express = require("express");
const Product = require('../models/Product');

const router = express.Router();

router.get('/', (req, res)=> {
  Product.find(function(err, products) {
    if (err) {
      res.send({
        success: false
      });
    } else {
      res.send({
        success: true,
        data: products
      });
    }
  });
});

router.post('/', (req, res) => {
  const product = new Product({ name: req.body.name });

  product.save(function (err) {
    if (err) {
      res.send({
        success: false
      });
    } else {
      res.send({
        success: true,
        data: product
      });
    }
  });
});

router.delete('/:id', (req, res) => {
  Product.remove({_id: req.params.id}, function (err) {
    if (err) {
      res.send({
        success: false
      });
    } else {
      res.send({
        success: true,
        data: req.params.id
      });
    }
  });
});

module.exports = router;
