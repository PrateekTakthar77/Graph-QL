import { error } from "console";
import mongoose from "mongoose";

export const connectDataBase = (uri: string) =>
    mongoose
        .connect(uri, { dbName: "jewell-bliss" })
        .then((db) => {
            console.log(`connected succesfully ${db.connection.name}`);
        })
        .catch((e) => console.log(error));
