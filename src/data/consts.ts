import {
	type ProductGetByIdQuery,
	type ProductsGetListQuery,
} from "@/gql/graphql";
export const CART_COOKIE_NAME = "cartId";
export const DEFAULT_VISIBLE_REVIEWS = 4;

export const SortProductsKey = ["price", "rating"] as const;
export type SortProductsKeyType = (typeof SortProductsKey)[number];

export const isProductsSortKey = (
	x?: string,
): x is SortProductsKeyType =>
	SortProductsKey.includes(x as SortProductsKeyType);

export const sortProducts = (
	array: ProductsGetListQuery["products"]["data"],
	{ key, type }: { key: SortProductsKeyType; type?: string },
): ProductGetByIdQuery["product"][] => {
	const sortedArray = array.sort((a, b) => {
		return (a[key] || 0) < (b[key] || 0) ? -1 : 1;
	});
	return type === "desc" ? sortedArray.reverse() : sortedArray;
};
