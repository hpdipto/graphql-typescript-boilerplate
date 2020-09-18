import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
	age: {
		type: Number,
	},
});

const Author = mongoose.model("Author", AuthorSchema);

export { Author };
