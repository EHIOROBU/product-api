const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },

    },
    {
        timestamps: true,
    }
)
const Product = mongoose.model("product", productSchema);
module.exports = Product;