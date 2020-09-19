export type Book {
	id?: string,
	title: string,
	author: Author,
	publisher: string,
	publishDate: Date,
	price: number
}

export type Author {
	name: string,
	age: number,
}