import { Cart } from "../models/cartModel.js";
export const getCartById = async (parent, arg) => {
    const cart = await Cart.findById(arg.id).populate("user");
    ;
    return cart;
};
