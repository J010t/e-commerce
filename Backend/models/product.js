import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required:  true
    }
})

const Product = mongoose.model("user", UserSchema);

export default Product;
