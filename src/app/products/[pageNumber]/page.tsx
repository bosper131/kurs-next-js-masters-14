import Pagination from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { getProducts } from "@/data/products";

const PRODUCTS_PER_PAGE = 5;

export default async function ProductsPage({
	params: { pageNumber = 1 },
}) {
	const products = await getProducts({
		offset: pageNumber * PRODUCTS_PER_PAGE,
		productsPerPage: PRODUCTS_PER_PAGE,
	});

	return (
		<>
			<ProductList products={products} />
			<div className="mt-5 flex w-full justify-center">
				<Pagination totalPages={products.length} />
			</div>
		</>
	);
}
