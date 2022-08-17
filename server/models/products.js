const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    variations: {
        type: Object,
        required: true,
        size: {
            small: {
                inStock: {
                    type: Number
                },
                title: {
                    type: String,
                }
            },
            medium: {
                inStock: {
                    type: Number
                },
                title: {
                    type: String,
                }
            },
            large: {
                inStock: {
                    type: Number
                },
                title: {
                    type: String,
                }
            },
        },
        colour: {
            white:{
                inStock:{type:Number},
                title:{type:String}
            },
            black:{
                inStock:{type:Number},
                title:{type:String}
            },
            blue:{
                inStock:{type:Number},
                title:{type:String}
            }
        }

    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('products', productSchema);

