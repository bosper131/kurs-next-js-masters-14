import { notFound } from "next/navigation";
import Pagination from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { ProductsSort } from "@/app/ui/organisms/ProductsSort";
import { isProductsSortKey, sortProducts } from "@/data/consts";
import { executeGraphql } from "@/data/products";
import {
	ProductsGetListDocument,
	type ProductsGetListQuery,
} from "@/gql/graphql";

const PRODUCTS_PER_PAGE = 3;

export default async function ProductsPage({
	params: { pageNumber = 1 },
	searchParams,
}: {
	params: { pageNumber: number };
	searchParams?: {
		sort?: "price_asc" | "price_desc";
	};
}) {
	const data: ProductsGetListQuery = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take: PRODUCTS_PER_PAGE,
			skip: pageNumber * PRODUCTS_PER_PAGE,
		},
	});

	const sort = searchParams?.sort || "";
	const sortKey = sort.split("_")[0];
	const sortOrder = sort.split("_")[1];

	const sortedProducts =
		!sort || !isProductsSortKey(sortKey)
			? data.products.data
			: sortProducts(data.products.data, {
					key: sortKey,
					type: sortOrder,
				});

	const productsOnPage = sortedProducts.slice(
		(pageNumber - 1) * PRODUCTS_PER_PAGE,
		pageNumber * PRODUCTS_PER_PAGE,
	) as ProductsGetListQuery["products"]["data"];

	if (!productsOnPage.length) {
		return notFound();
	}

	return (
		<>
			<ProductsSort />
			<ProductList products={productsOnPage} />
			<div className="mt-5 flex w-full justify-center">
				<Pagination
					totalPages={data.products.data.length}
					url={"products/"}
				/>
			</div>
		</>
	);
}
