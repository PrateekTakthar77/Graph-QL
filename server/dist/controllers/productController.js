import { Product } from "../models/productModel.js";
export const getAllProducts = async () => {
    const products = await Product.find();
    return products;
};
export const getProductById = async (id) => {
    console.log(id);
    const product = await Product.findById(id);
    console.log(id);
    return product;
};
