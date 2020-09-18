import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
		},
	},
	publisher: {
		type: String,
	},
	publishDate: {
		type: Date,
	},
	price: {
		type: Number,
		required: true,
	},
});

const Book = mongoose.model("Book", BookSchema);

export { Book };
