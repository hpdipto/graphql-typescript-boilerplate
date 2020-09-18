// hard coded variables
let bookDB = [
	{
		title: "Young Muslim Guide to Modern World",
		author: { name: "Sayyed Hussain Nassr", age: 90 },
		publisher: "Kazi Publications",
		publishDate: "January 1, 1994",
		price: 21.16,
	},
	{
		title: "How to Read a Book",
		author: { name: "Mortimer J. Adler", age: 95 },
		publisher: "Touchstone",
		publishDate: "August 15, 1972",
		price: 10.81,
	},
];

// Query resolvers
const books = () => {
	return bookDB;
};

// Mutation resolvers
const addBook = (
	parent: any,
	{
		title,
		author,
		publisher,
		publishDate,
		price,
	}: {
		title: string;
		author: string;
		publisher: string;
		publishDate: string;
		price: number;
	}
) => {
	let book = {
		title,
		author: {
			name: author,
			age: 0,
		},
		publisher,
		publishDate,
		price,
	};

	bookDB.push(book);
	return "success";
};

// graphQL resolvers
const resolvers = {
	Query: {
		books,
	},

	Mutation: {
		addBook,
	},
};

export default resolvers;
