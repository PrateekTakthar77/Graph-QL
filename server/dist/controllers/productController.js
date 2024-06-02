import { Product } from "../models/productModel.js";
export const getAllProducts = async () => {
    const products = await Product.find();
    return products;
};
export const getProductById = async (parent, arg) => {
    const product = await Product.findById(arg.id);
    return product;
};
