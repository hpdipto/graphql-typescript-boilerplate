import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import * as types from "../types";

// hard coded variables
let bookDB: types.Book[] = [
	{
		title: "Young Muslim Guide to Modern World",
		author: { name: "Sayyed Hussain Nassr", age: 90 },
		publisher: "Kazi Publications",
		publishDate: new Date("January 1, 1994"),
		price: 21.16,
	},
	{
		title: "How to Read a Book",
		author: { name: "Mortimer J. Adler", age: 95 },
		publisher: "Touchstone",
		publishDate: new Date("August 15, 1972"),
		price: 10.81,
	},
];

// GraphQLDate - a custom scaler type for Date object
// For in depth understanding: https://stackoverflow.com/a/41513681/9481106
const GraphQLDate = new GraphQLScalarType({
	name: "GraphQLDate",
	description: "A custom scaler type for Date object",
	serialize(value) {
		return value.toDateString();
	},
	parseValue(value) {
		return new Date(value);
	},
	parseLiteral(ast) {
		return ast.kind == Kind.STRING ? new Date(ast.value) : undefined;
	},
});

// Query resolvers
const books = () => {
	return bookDB;
};

// Mutation resolvers
const addBook = (
	parent: any,
	{ title, author, publisher, publishDate, price }: types.Book
) => {
	let book = {
		title,
		author,
		publisher,
		publishDate,
		price,
	};

	bookDB.push(book);
	return book;
};

// graphQL resolvers
const resolvers = {
	Query: {
		books,
	},

	Mutation: {
		addBook,
	},
	GraphQLDate,
};

export default resolvers;
