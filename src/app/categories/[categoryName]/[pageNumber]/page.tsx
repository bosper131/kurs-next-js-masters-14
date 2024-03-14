import { type Metadata } from "next/types";
import Pagination from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { type ProductsType } from "@/app/ui/organisms/ProductList.type";
import { executeGraphql } from "@/data/products";
import {
	CategoriesByNameDocument,
	type CategoriesByNameQuery,
} from "@/gql/graphql";

const PRODUCTS_PER_PAGE = 1;

export async function generateMetadata({
	params: { categoryName = "Hoodies" },
}: {
	params: { categoryName: "Hoodies" };
}): Promise<Metadata> {
	return {
		title: categoryName,
	};
}

export default async function CategoriesPage({
	params: { categoryName = "Hoodies", pageNumber = 1 },
}) {
	const data: CategoriesByNameQuery = await executeGraphql(
		CategoriesByNameDocument,
		{},
	);
	const products: ProductsType[] =
		data.categories.data.filter(
			(category) =>
				category.name.toLowerCase() === categoryName.toLowerCase(),
		)[0]?.products || [];

	return (
		<>
			<h1>Categories</h1>
			<ProductList
				products={products.slice(
					pageNumber - 1,
					pageNumber * PRODUCTS_PER_PAGE,
				)}
			/>
			<div className="mt-5 flex w-full justify-center">
				<Pagination
					totalPages={Math.ceil(products.length / PRODUCTS_PER_PAGE)}
					url={`categories/${categoryName}/`}
				/>
			</div>
		</>
	);
}
