import fs from "fs";
import path from "path";
import express, { Application, Request, Response, NextFunction } from "express";
import { ApolloServer } from "apollo-server-express";
import { GraphQLScalarType } from "graphql";

// loading schema file, typeDefs and resolvers
const schemaFile = path.join(__dirname, "./schemas/schema.gql");
const typeDefs = fs.readFileSync(schemaFile, "utf-8");
import resolvers from "./resolvers/resolvers";

// graphQL server setup
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// express app setup
const app: Application = express();

// graphQL server middleware
server.applyMiddleware({ app, path: "/graphql" });

// home route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.send("Hello TS");
});

// PORT setup
const PORT: number = 5000;

// server started
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
