"use client";

import { useFormStatus } from "react-dom";

export function AddToCartButton({ productId }: { productId: string }) {
	const status = useFormStatus();

	return (
		<>
			<input type="hidden" name="productId" value={productId} />
			<button
				type="submit"
				disabled={status.pending}
				className="w-full rounded-md border bg-slate-700 px-8 py-3 text-white disabled:cursor-wait disabled:bg-slate-400"
				data-testid="add-to-cart-button"
			>
				Add to cart
			</button>
		</>
	);
}
