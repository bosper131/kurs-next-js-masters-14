/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { RemoveButton } from "@/app/ui/atoms/RemoveButton";
import { getCartById } from "@/api/cart";
import { formatMoney } from "@/app/utils/formatMoney";
import { Quantity } from "@/app/cart/Quanitity";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	// async function handleStripePaymentAction() {
	// 	"user server";
	// 	if (!process.env.STRIPE_SECRET_KEY) {
	// 		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	// 	}

	// 	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	// 		apiVersion: "2023-10-16",
	// 		typescript: true,
	// 	});

	// 	const cart = await getCart();
	// 	if (!cart) {
	// 		return;
	// 	}

	// 	const session = await stripe.checkout.sessions.create({
	// 		metadata: {
	// 			cartId: cart.id,
	// 		},
	// 		line_items: cart.orderItems
	// 			.map((item: { product: { name: unknown; description: unknown; images: unknown[]; price: unknown; }; quantity: unknown; }) =>
	// 				item.product
	// 					? {
	// 							price_data: {
	// 								currency: "usd",
	// 								product_data: {
	// 									name: item.product.name,
	// 									description: item.product.description,
	// 									images: item.product.images.map((i: { url: unknown; }) => i.url),
	// 								},
	// 								unit_amount: item.product.price,
	// 							},
	// 							quantity: item.quantity,
	// 						}
	// 					: null,
	// 			)
	// 			.filter(Boolean),
	// 		mode: "payment",
	// 		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
	// 		cancel_url: `http://localhost:3000/cart/canceled`,
	// 	});
	// 	if (session.url) {
	// 		cookies().set("cartId", "");
	// 		redirect(session.url);
	// 	}
	// }

	const cart = await getCartById(cartId);

	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>
									<Quantity
										quantity={item.quantity}
										productId={item.product.id}
									/>
								</td>
								<td>{formatMoney(item.product.price)}</td>
								<td className="px-4 py-2">
									<RemoveButton
										id={cart.id}
										productId={item.product.id}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* <form action={handleStripePaymentAction} className="ml-auto">
				<button
					type="submit"
					className="rounded-sm border bg-slate-100 px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
				>
					Pay
				</button>
			</form> */}
		</div>
	);
}
