import { ProductAndCategories } from "@/app/ui/molecules/ProductAndCategories";
import type { ProductsType } from "@/app/ui/organisms/ProductList.type";

export const ProductList = ({
	products,
}: {
	products: ProductsType[];
}) => {
	return (
		<ul
			className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<li key={product.id} >
					<ProductAndCategories {...product} />
				</li>
			))}
		</ul>
	);
};
