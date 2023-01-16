const mongoose = require('mongoose');

const productDetails = new mongoose.Schema({
    Name: { type: String },
    Price: { type: Number },
    Quantity: { type: Number },
});

module.exports = mongoose.model('Product', productDetails);
