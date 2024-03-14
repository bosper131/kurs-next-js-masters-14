import { ProductList } from "@/app/ui/organisms/ProductList";
import { type ProductsType } from "@/app/ui/organisms/ProductList.type";

export default async function SuggestedProducts({
	products,
}: {
	products: ProductsType[];
}) {
	return (
		<div data-testid="related-products">
			<p>Suggested Products</p>
			<ProductList products={products} isSuggested />
		</div>
	);
}
