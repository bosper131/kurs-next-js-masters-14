import { ProductList } from "@/app/ui/organisms/ProductList";
import SuggestedProducts from "@/app/ui/organisms/SuggestedProducts";
import { executeGraphql } from "@/data/products";
import {
	ProductsGetListDocument,
	SuggestedProductsByPriceDocument,
	type SuggestedProductsByPriceQuery,
	type ProductsGetListQuery,
} from "@/gql/graphql";

const numberOfSuggestedProducts = 4;

export default async function HomePage() {
	const dataProducts: ProductsGetListQuery = await executeGraphql(
		ProductsGetListDocument,
		{},
	);

	const suggestedProducts: SuggestedProductsByPriceQuery =
		await executeGraphql(SuggestedProductsByPriceDocument, {
			take: numberOfSuggestedProducts,
		});

	return (
		<>
			<ProductList products={dataProducts.products.data} />
			<SuggestedProducts products={suggestedProducts.products.data} />
		</>
	);
}
