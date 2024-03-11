import { ProductList } from "@/app/ui/organisms/ProductList";
import { type ProductsType } from "@/app/ui/organisms/ProductList.type";

export default async function SuggestedProducts({
	products,
}: {
	products: ProductsType[];
}) {
	return (
		<div data-testid="related-products">
			<h1>Suggested Products</h1>
			<ProductList products={products} />
		</div>
	);
}
