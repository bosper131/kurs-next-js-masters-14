import Pagination from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { executeGraphql } from "@/data/products";
import {
	ProductsGetListDocument,
	type ProductsGetListQuery,
} from "@/gql/graphql";

const PRODUCTS_PER_PAGE = 3;

export default async function ProductsPage({
	params: { pageNumber = 1 },
}) {
	const data: ProductsGetListQuery = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take: PRODUCTS_PER_PAGE,
			skip: pageNumber * PRODUCTS_PER_PAGE,
		},
	});

	return (
		<>
			<ProductList products={data.products.data} />
			<div className="mt-5 flex w-full justify-center">
				<Pagination
					totalPages={data.products.data.length}
					url={"products/"}
				/>
			</div>
		</>
	);
}
