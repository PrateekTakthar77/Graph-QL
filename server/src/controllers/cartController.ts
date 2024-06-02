import { Cart } from "../models/cartModel.js";
import mongoose from "mongoose";

export const getCartById = async (parent:any,arg:{ id: string | mongoose.Types.ObjectId})=>{
    const cart = await Cart.findById(arg.id).populate("user");;
    return cart
}
