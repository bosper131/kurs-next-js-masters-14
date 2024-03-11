import type { ProductGetByIdQuery } from "@/gql/graphql";

export type ProductsType = NonNullable<
	ProductGetByIdQuery["product"]
>;
