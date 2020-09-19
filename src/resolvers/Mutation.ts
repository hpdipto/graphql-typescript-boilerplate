import { Book } from "../models/Book";
import * as types from "../types";

// 'addBook' resolver
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

// 'updateBook' resolver
const updateBook = (parent: any, args: { book: types.Book }) => {
	return Book.findByIdAndUpdate(args.book.id, { ...args.book });
};

// Mutation
const Mutation = {
	addBook,
	updateBook,
};

export default Mutation;
