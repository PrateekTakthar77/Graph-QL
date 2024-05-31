import { User } from "../models/userModel.js";


export const getAllUsets = async () => {
    const users = await User.find();
    return users
}
