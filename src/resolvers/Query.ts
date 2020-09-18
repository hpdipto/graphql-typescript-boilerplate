import { Book } from "../models/Book";

// 'books' resolvers
const books = () => {
	// return bookDB;
	return Book.find({});
};

// Query
const Query = {
	books,
};

export default Query;
