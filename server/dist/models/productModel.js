import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    mrp: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: [String],
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    brand: String,
    material: String,
    size: String,
    weight: String,
    purity: String,
    color: String,
    reviews: [String],
    gemstones: [String],
    mcharges: {
        type: Number,
        default: 0,
    },
});
export const Product = mongoose.model("Product", productSchema);
