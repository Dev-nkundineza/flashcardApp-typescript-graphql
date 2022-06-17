import express from "express";
import {ApolloServer} from "apollo-server-express";
import { schema } from "./schema";

const startApolloServer = async () =>{
    const server = new ApolloServer({schema});
    const app = express();
    await server.start();
    server.applyMiddleware({app});
    const port = process.env.PORT || '4000'
    app.listen({port: port},()=> console.log(`Server is running at http://localhost:4000${server.graphqlPath} `))
}
startApolloServer();
