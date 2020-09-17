import fs from "fs";
import path from "path";
import express, { Application, Request, Response, NextFunction } from "express";
import { ApolloServer } from "apollo-server-express";

// hard coded variables
let aboutMessage: string = "Issue Tracker API v1.0";

const setAboutMessages = (parent: any, { message }: { message: string }) => {
	return (aboutMessage = message);
};

const schemaFile = path.join(__dirname, "../schemas/schema.graphql");
const typeDefs = fs.readFileSync(schemaFile, "utf-8");

// graphQL resolvers
const resolvers = {
	Query: {
		about: () => aboutMessage,
	},

	Mutation: {
		setAboutMessages,
	},
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
