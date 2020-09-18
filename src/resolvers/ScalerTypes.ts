import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

// GraphQLDate - a custom scaler type for Date object
// For in depth understanding: https://stackoverflow.com/a/41513681/9481106
const GraphQLDate = new GraphQLScalarType({
	name: "GraphQLDate",
	description: "A custom scaler type for Date object",
	serialize(value) {
		return value.toDateString();
	},
	parseValue(value) {
		return new Date(value);
	},
	parseLiteral(ast) {
		return ast.kind == Kind.STRING ? new Date(ast.value) : undefined;
	},
});

export { GraphQLDate };
