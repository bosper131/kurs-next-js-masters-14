"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "@/api/cart";

export function RemoveButton({
	productId,
	id,
}: {
	id: string;
	productId: string;
}) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(id, productId);
					router.refresh();
				})
			}
			className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:cursor-wait disabled:text-slate-400"
		>
			Remove
		</button>
	);
}
