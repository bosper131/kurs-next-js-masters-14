import type { Metadata } from "next";
import { executeGraphql } from "@/data/products";
import { ProductAndCategories } from "@/app/ui/molecules/ProductAndCategories";
import {
	ProductGetByIdDocument,
	type ProductGetByIdQuery,
	SuggestedProductsByPriceDocument,
	type SuggestedProductsByPriceQuery,
} from "@/gql/graphql";
import SuggestedProducts from "@/app/ui/organisms/SuggestedProducts";
import { AddToCartButton } from "@/app/ui/atoms/ActiveCartButton";
import { addItemToCartAction } from "@/actions/cart";
import { ReviewsList } from "@/app/ui/organisms/ReviewsList";

const numberOfSuggestedProducts = 4;

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const data: ProductGetByIdQuery = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { slug: params.productId },
	});

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
	const data: ProductGetByIdQuery = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { slug: params.productId },
	});

	const suggestedProducts: SuggestedProductsByPriceQuery =
		await executeGraphql({
			query: SuggestedProductsByPriceDocument,
			variables: { take: numberOfSuggestedProducts },
		});

	const productAndCategories = data.product && (
		<ProductAndCategories {...data.product} />
	);
	return (
		<>
			{productAndCategories}
			<SuggestedProducts products={suggestedProducts.products.data} />
			<form action={addItemToCartAction}>
				<AddToCartButton productId={params.productId} />
			</form>
			<ReviewsList productId={data.product?.id as string} />
		</>
	);
}
