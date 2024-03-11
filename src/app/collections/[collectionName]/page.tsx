import { ProductList } from "@/app/ui/organisms/ProductList";
import { type ProductsType } from "@/app/ui/organisms/ProductList.type";
import { executeGraphql } from "@/data/products";
import {
	CollectionsByNameDocument,
	type CollectionsByNameQuery,
} from "@/gql/graphql";

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
			<ProductList products={products} />
		</>
	);
}
