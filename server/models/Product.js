const mongoose = require('../mongoose');

const Product = mongoose.model('Product', mongoose.Schema({ name: String, price: String }));

module.exports = Product;