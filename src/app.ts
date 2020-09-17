import fs from "fs";
import path from "path";
import express, { Application, Request, Response, NextFunction } from "express";
import { ApolloServer } from "apollo-server-express";
import { GraphQLScalarType } from "graphql";

const GraphQLDate = new GraphQLScalarType({
	name: "GraphQLDate",
	description: "A Date() type is GraphQL as a scaler",
	serialize(value) {
		return value.toISOString();
	},
});

// hard coded variables
let aboutMessage: string = "Issue Tracker API v1.0";
const issueDB = [
	{
		id: 1,
		status: "New",
		owner: "Ravan",
		effort: 5,
		created: new Date("2019-01-15"),
		due: undefined,
		title: "Error in console wehn clicking Add",
	},
	{
		id: 2,
		status: "Assigned",
		owner: "Eddie",
		effort: 14,
		created: new Date("2019-01-16"),
		due: new Date("2019-02-01"),
		title: "Missing bottom border on panel",
	},
];

const setAboutMessages = (parent: any, { message }: { message: string }) => {
	return (aboutMessage = message);
};

const issueList = () => {
	return issueDB;
};

// loading schema file, typeDefs and resolvers
const schemaFile = path.join(__dirname, "./schemas/schema.gql");
const typeDefs = fs.readFileSync(schemaFile, "utf-8");

// graphQL resolvers
const resolvers = {
	Query: {
		about: () => aboutMessage,
		issueList,
	},

	Mutation: {
		setAboutMessages,
	},
	GraphQLDate,
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
