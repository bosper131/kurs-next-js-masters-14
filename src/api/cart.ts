"use server";
import { cookies } from "next/headers";
import {
	type CartFragment,
	CartGetByIdDocument,
	type CartItem,
	type CartGetByIdQuery,
	CartRemoveItemDocument,
	CartAddItemDocument,
	CartFindOrCreateDocument,
	CartChangeItemQuantityDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/data/products";
import { getProductById } from "@/api/products";
import { CART_COOKIE_NAME } from "@/data/consts";

export const getCartById = async (
	id: string,
): Promise<CartGetByIdQuery["cart"]> => {
	const { cart } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: { id },
		next: {
			tags: ["cart"],
		},
	});

	return cart;
};

export async function removeItem(
	id: CartFragment["id"],
	productId: CartItem["product"]["id"],
) {
	const product = await getProductById(productId);

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			id,
			productId,
		},
		next: {
			tags: ["cart"],
		},
	});
}

export async function addProductToCart(
	id: CartFragment["id"],
	productId: CartItem["product"]["id"],
	quantity: CartItem["quantity"] = 1,
) {
	const product = await getProductById(productId);

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	const cart = await getCartById(id);
	const productInCart = cart?.items.find(
		(item) => item.product.id === productId,
	);

	if (productInCart) {
		await changeProductQuantityInCart(
			id,
			productInCart.product.id,
			productInCart.quantity + quantity,
		);
		return;
	}

	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			id,
			productId,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});
}

export async function getOrCreateCart(): Promise<CartFragment> {
	const cartId = cookies().get(CART_COOKIE_NAME)?.value;

	const { cartFindOrCreate: cart } = await executeGraphql({
		query: CartFindOrCreateDocument,
		variables: { id: cartId },
		next: {
			tags: ["cart"],
		},
	});

	if (!cart) {
		throw new Error("Failed to create cart!");
	}

	if (!cartId) {
		cookies().set(CART_COOKIE_NAME, cart.id);
	}

	return cart;
}

export async function changeProductQuantityInCart(
	id: CartFragment["id"],
	productId: CartItem["product"]["id"],
	quantity: CartItem["quantity"],
) {
	const product = await getProductById(productId);

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			id,
			productId,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});
}

export const getCartFromCookies = async (): Promise<
	CartFragment | null | undefined
> => {
	const cartId = cookies().get(CART_COOKIE_NAME)?.value;

	return cartId ? getCartById(cartId) : null;
};
