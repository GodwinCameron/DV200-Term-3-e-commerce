const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    clientInfo: {
        clientName: {type:String, required:true}
    },
    productName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Orders', orderSchema);

