import type { ProductsType } from "@/app/ui/organisms/ProductList.type";
import { graphql } from "@/gql";
import { TypedDocumentString } from "@/gql/graphql";

export const getProductById = async (id: string) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const product = (await res.json()) as ProductsType;
	return product;
};

export const getProducts = async ({
	offset,
	productsPerPage,
}: {
	offset: number;
	productsPerPage: number;
}) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${productsPerPage}&offset=${offset}`,
	);
	const products = (await res.json()) as ProductsType[];
	return products;
};

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
// export const getProducts = async ({
// 	offset,
// 	productsPerPage,
// }: {
// 	offset: number;
// 	productsPerPage: number;
// }) => {
// 	const res = await fetch("",{
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			query: /* GraphQL */ `
// 				query GetProductsList {
// 				products (first:10){
// 					id
// 					name
// 					description
// 					price
// 					images{
// 						url
// 					}
// 					description
// 				}
// 			}`,
// 			headers:{
// 				"Content-Type": "application/json"
// 			}
// 		}),
// 	});
// 	const products = (await res.json()) as ProductsType[];
// 	return products;
// };
