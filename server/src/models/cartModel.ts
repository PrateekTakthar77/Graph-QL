import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: { type: [mongoose.Schema.Types.Mixed], default: [] },
    total: { type: Number, default: 0, required: true },
    __v: { type: Number, select: false }
});


export const Cart = mongoose.model('Cart', cartSchema);