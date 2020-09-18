import { Book } from "../models/Book";
import * as types from "../types";

// 'addBook' resolvers
const addBook = (
	parent: any,
	{ title, author, publisher, publishDate, price }: types.Book
) => {
	let book = new Book({
		title,
		author,
		publisher,
		publishDate,
		price,
	});

	return book.save();
};

// Mutation
const Mutation = {
	addBook,
};

export default Mutation;
