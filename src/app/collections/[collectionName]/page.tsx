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

export default async function ProductsPage({
	params: { collectionName = "Summer Vibes" },
}) {
	const data: CollectionsByNameQuery = await executeGraphql(
		CollectionsByNameDocument,
		{},
	);

	const products: ProductsType[] =
		data.collections.data.filter(
			(collection) =>
				collection.name.toLowerCase().replace(/ /g, "") ===
				collectionName.toLowerCase(),
		)[0]?.products || [];
	return (
		<>
			<h1>Collections</h1>
			<ProductList products={products} />
		</>
	);
}
