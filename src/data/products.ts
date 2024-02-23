import type { ProductsType } from "@/app/ui/organisms/ProductList.type";

export const getProductById = async (id: string) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const product = (await res.json()) as ProductsType;
	return product;
};

export const getProducts = async ({
	offset,
	productsPerPage,
}: {
	offset: number;
	productsPerPage: number;
}) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${productsPerPage}&offset=${offset}`,
	);
	const products = (await res.json()) as ProductsType[];
	return products;
};

