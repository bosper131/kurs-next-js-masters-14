import { redirect } from "next/navigation";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { executeGraphql } from "@/data/products";
import {
	SearchProductsByNameDocument,
	type SearchProductsByNameQuery,
} from "@/gql/graphql";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	if (!searchParams.query) {
		redirect("/");
	}
	const { query = "Snapback" } = searchParams;
	const data: SearchProductsByNameQuery = await executeGraphql(
		SearchProductsByNameDocument,
		{ name: query },
	);

	return (
		<>
			{data.products.data.length > 0 ? (
				<ProductList products={data.products.data} />
			) : (
				<div>No products found</div>
			)}
		</>
	);
}
