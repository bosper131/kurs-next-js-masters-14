"use server";
import { revalidateTag } from "next/cache";
import {
	addProductToCart,
	changeProductQuantityInCart,
	getOrCreateCart,
} from "@/api/cart";

export async function addItemToCartAction(formData: FormData) {
	console.log("formData: ", formData);
	const productId = formData.get("productId") as string;
	console.log("productId: ", productId);
	const cart = await getOrCreateCart();
	console.log("cart.id: ", cart.id);
	await addProductToCart(cart.id, productId);

	revalidateTag("cart");
}

export async function changeItemQuantityAction(formData: FormData) {
	const productId = formData.get("productId") as string;
	const quantity = parseInt(formData.get("quantity") as string);

	const cart = await getOrCreateCart();
	await changeProductQuantityInCart(cart.id, productId, quantity);

	revalidateTag("cart");
}
