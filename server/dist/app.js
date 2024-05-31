import dotenv from 'dotenv';
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { scema } from './graphQl/scema.js';
import { connectDataBase } from './database/database.js';
import { getAllUsets } from './controllers/userController.js';
import { getAllProducts, getProductById } from './controllers/productController.js';
dotenv.config({ path: './.env', });
export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = Number(process.env.PORT) || 3000;
const mongouri = process.env.MONGO_URI;
connectDataBase(mongouri);
const server = new ApolloServer({
    typeDefs: scema,
    resolvers: {
        Query: {
            request1: () => "hello world",
            request2: () => "hello world 2",
            users: getAllUsets,
            getProducts: getAllProducts,
            getProduct: (_, { id }) => getProductById(id)
        },
    }
});
startStandaloneServer(server, { listen: { port } }).then(() => {
    console.log('Server is working on Port:' + port + ' in ' + envMode + ' Mode.');
}).catch((error) => {
    console.log(error);
});
