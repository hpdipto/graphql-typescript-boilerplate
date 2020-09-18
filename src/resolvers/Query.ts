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

// 'books' resolvers
const books = () => {
	return bookDB;
};

// Query
const Query = {
	books,
};

export default Query;
