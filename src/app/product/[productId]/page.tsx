import type { Metadata } from "next";
import { getProductById } from "@/data/products";
import { ProductAndCategories } from "@/app/ui/molecules/ProductAndCategories";

export async function generateStaticParams() {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const products = (await res.json()) as { id: string; title: string }[];

	return products.map((product) => ({ productId: product.id }));
}

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product.title,
		description: product.description,
	};
}

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return <ProductAndCategories {...product} />;
}
