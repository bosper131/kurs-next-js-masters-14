import { ProductList } from "@/app/ui/organisms/ProductList";
import { products } from "@/app/data/products";

export default function Home() {
	return (
		<main>
			<ProductList products={products} />
		</main>
	);
}
