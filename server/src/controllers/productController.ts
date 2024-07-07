import { Product } from "../models/productModel.js";
import mongoose from "mongoose";

export const getAllProducts = async () => {
    const products = await Product.find();
    return products;
};

export const getProductById = async (
    parent: any,
    arg: { id: string | mongoose.Types.ObjectId },
) => {
    const product = await Product.findById(arg.id);
    return product;
};
