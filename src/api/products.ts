import {
	ProductGetByIdDocument,
	type ProductGetByIdQuery,
} from "@/gql/graphql";
import { executeGraphql } from "@/data/products";

export const getProductById = async (
	id: string,
): Promise<ProductGetByIdQuery["product"]> => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { slug: id },
	});
	return graphqlResponse.product;
};
