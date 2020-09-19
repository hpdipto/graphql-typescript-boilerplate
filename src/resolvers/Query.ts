import { Book } from "../models/Book";

// 'books' resolver
const books = () => {
	// return bookDB;
	return Book.find({});
};

// Query
const Query = {
	books,
};

export default Query;
