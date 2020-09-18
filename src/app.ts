import fs from "fs";
import path from "path";
import express, { Application, Request, Response, NextFunction } from "express";
import { ApolloServer } from "apollo-server-express";
import { GraphQLScalarType } from "graphql";

// hard coded variables
let bookDB = [
	{
		title: "Young Muslim Guide to Modern World",
		author: "Sayyed Hussain Nassr",
		publisher: "Kazi Publications",
		publishDate: "January 1, 1994",
		price: 21.16,
	},
	{
		title: "How to Read a Book",
		author: "Mortimer J. Adler",
		publisher: "Touchstone",
		publishDate: "August 15, 1972",
		price: 10.81,
	},
];

// loading schema file, typeDefs and resolvers
const schemaFile = path.join(__dirname, "./schemas/schema.gql");
const typeDefs = fs.readFileSync(schemaFile, "utf-8");

// graphQL resolvers
const resolvers = {
	Query: {},

	Mutation: {},
};

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
