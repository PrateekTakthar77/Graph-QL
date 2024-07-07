import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { scema } from "./graphQl/scema.js";
import { connectDataBase } from "./database/database.js";
import { getAllUsers } from "./controllers/userController.js";
import {
    getAllProducts,
    getProductById,
} from "./controllers/productController.js";
import { getCartById } from "./controllers/cartController.js";
dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
const mongouri = process.env.MONGO_URI!;

connectDataBase(mongouri);

const server = new ApolloServer({
    typeDefs: scema,
    resolvers: {
        Query: {
            users: getAllUsers,
            getProducts: getAllProducts,
            getProduct: getProductById,
            getCart: getCartById,
        },
    },
});

startStandaloneServer(server, { listen: { port } })
    .then(() => {
        console.log(
            "Server is working on Port:" + port + " in " + envMode + " Mode.",
        );
    })
    .catch((error) => {
        console.log(error);
    });
