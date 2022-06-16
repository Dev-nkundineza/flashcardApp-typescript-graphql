import express from "express";
import {ApolloServer} from "apollo-server-express";
import { schema } from "./schema";

const startApolloServer = async () =>{
    const server = new ApolloServer({schema});
    const app = express();
    await server.start();
    server.applyMiddleware({app});
    
    app.listen({port: 4000},()=> console.log(`Server is running at http://localhost:4000${server.graphqlPath} `))
}
startApolloServer();
