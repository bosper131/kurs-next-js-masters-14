import NextLink from "next/link";
import { ShoppingBag } from "lucide-react";

import { getCartFromCookies } from "@/api/cart";

export async function NavigationCart() {
	const cart = await getCartFromCookies();
	const cartCounter =
		cart?.items.reduce((acc, item) => acc + item.quantity, 0) ?? 0;

	return (
		<NextLink
			href="/cart"
			title="Cart"
			className="relative z-10 inline-flex"
		>
			<ShoppingBag color="black" size={"40px"} />
			{cartCounter ? (
				<span className="absolute -right-1 -top-1 inline-flex h-6 min-w-6 items-start justify-center rounded-full border-2 border-white bg-red-400 p-1 text-xs font-bold text-white dark:border-gray-900 dark:text-black">
					{cartCounter}
				</span>
			) : null}
		</NextLink>
	);
}
