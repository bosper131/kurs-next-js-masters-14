import { type ProductGetByIdQuery } from "./../../../gql/graphql";

export type ProductsType = NonNullable<
	ProductGetByIdQuery["product"]
>;
export type ProductListWithSuggested = ProductsType & {
	isSuggested?: boolean;
	rating?: number;
};
