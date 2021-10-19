const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    name : String,
    model : String,
    price : Number,
    offer : String
});

module.exports = mongoose.model('products', ProductsSchema);