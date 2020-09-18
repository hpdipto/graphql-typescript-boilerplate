export type Book {
	title: string,
	author: Author,
	publisher: string,
	publishDate: string,
	price: number
}

export type Author {
	name: string,
	age: number,
}