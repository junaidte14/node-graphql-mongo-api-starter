import { ApolloServer } from "apollo-server";
import env from "./environment";
import connectDB from "./config/db";
import typeDefs from "./graphql/types/";
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });
connectDB();

const PORT = env.getPort();
server.listen({ port: process.env.PORT || PORT }).then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
