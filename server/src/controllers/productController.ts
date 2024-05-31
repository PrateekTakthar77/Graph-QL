import { Product } from "../models/productModel.js";
import mongoose from "mongoose";

export const getAllProducts = async () => {
    const products = await Product.find();
    return products
}

export const getProductById = async (id: string | mongoose.Types.ObjectId) => {
    const product = await Product.findById(id);
    return product
}