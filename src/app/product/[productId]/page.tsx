import type { Metadata } from "next";
import { executeGraphql } from "@/data/products";
import { ProductAndCategories } from "@/app/ui/molecules/ProductAndCategories";
import {
	ProductGetByIdDocument,
	type ProductGetByIdQuery,
} from "@/gql/graphql";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const data: ProductGetByIdQuery = await executeGraphql(
		ProductGetByIdDocument,
		{
			slug: params.productId,
		},
	);

	return {
		title: data.product?.name,
		description: data.product?.description,
	};
}

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const data: ProductGetByIdQuery = await executeGraphql(
		ProductGetByIdDocument,
		{
			slug: params.productId,
		},
	);

	const productAndCategories = data.product && (
		<ProductAndCategories {...data.product} />
	);
	return productAndCategories;
}
