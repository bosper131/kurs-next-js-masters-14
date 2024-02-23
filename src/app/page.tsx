import { ProductList } from "@/app/ui/organisms/ProductList";
import type { ProductsType } from "@/app/ui/organisms/ProductList.type";

export default async function HomePage() {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products`,
	);
	const allProducts = (await res.json()) as ProductsType[];

	return (
		<>
			<ProductList products={allProducts} />
		</>
	);
}
