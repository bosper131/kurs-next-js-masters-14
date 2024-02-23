import Pagination from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";
import type { ProductsType } from "@/app/ui/organisms/ProductList.type";
import { getProducts } from "@/data/products";

const PRODUCTS_PER_PAGE = 5;

export default async function ProductsPage({
	params: { pageNumber = 1 },
}) {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products`,
	);
	const allProducts = (await res.json()) as ProductsType[];
	const products = await getProducts({
		offset: pageNumber + 4,
		productsPerPage: PRODUCTS_PER_PAGE,
	});

	return (
		<>
			<ProductList products={products} />
			<div className="mt-5 flex w-full justify-center">
				<Pagination
					totalPages={Math.ceil(
						allProducts.length / PRODUCTS_PER_PAGE,
					)}
				/>
			</div>
		</>
	);
}
