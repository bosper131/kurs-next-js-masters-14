import { type Metadata } from "next/types";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { type ProductsType } from "@/app/ui/organisms/ProductList.type";
import { executeGraphql } from "@/data/products";
import {
	CollectionsByNameDocument,
	type CollectionsByNameQuery,
} from "@/gql/graphql";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Collections",
	};
}

export type productsForCollection = {
	name: string;
	products: ProductsType[];
};

export default async function ProductsPage({
	params: { collectionName = "Summer Vibes" },
}) {
	const data: CollectionsByNameQuery = await executeGraphql(
		CollectionsByNameDocument,
		{},
	);

	const productsObj: productsForCollection | never[] =
		data.collections.data.filter(
			(collection) =>
				collection.name.toLowerCase().replace(/ /g, "") ===
				collectionName.toLowerCase(),
		)[0] || { name: "No products", products: [] };

	return (
		<>
			<h1>{productsObj.name}</h1>
			<ProductList products={productsObj.products} />
		</>
	);
}
