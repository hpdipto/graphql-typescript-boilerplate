import express, { Application, Request, Response, NextFunction } from "express";
import { ApolloServer } from "apollo-server-express";

// hard coded variables
let aboutMessage: string = "Issue Tracker API v1.0";

const setAboutMessage = (parent: any, { message }: { message: string }) => {
	return (aboutMessage = message);
};

// graphQL typeDefs
const typeDefs: string = `
	type Query {
		about: String!
	}

	type Mutation {
		setAboutMessage(message: String!): String
	}
`;

// graphQL resolvers
const resolvers = {
	Query: {
		about: () => aboutMessage,
	},

	Mutation: {
		setAboutMessage,
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
