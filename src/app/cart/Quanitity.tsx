"use client";

import {
	type ChangeEvent,
	type FocusEvent,
	startTransition,
	useEffect,
	useOptimistic,
	useRef,
	useState,
} from "react";

import { type CartItemFragment } from "@/gql/graphql";
import { changeItemQuantityAction } from "@/actions/cart";
import { InputQuantity } from "@/app/ui/atoms/InputQuantity";

export const CART_MIN_ITEMS = 1;
export const CART_MAX_ITEMS = 100;

export function Quantity({
	quantity,
	productId,
}: {
	quantity: CartItemFragment["quantity"];
	productId: string;
}) {
	const formRef = useRef<HTMLFormElement>(null);

	const [stateQuantity, setStateQuantity] = useState<number | null>(
		quantity,
	);
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	useEffect(() => {
		setStateQuantity(optimisticQuantity);
	}, [optimisticQuantity]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newQuantity = parseInt(e.target.value);

		setStateQuantity(isNaN(newQuantity) ? null : newQuantity);
	};

	const handleBlur = async (e: FocusEvent<HTMLInputElement>) => {
		const newQuantity = parseInt(e.target.value);

		if (isNaN(newQuantity)) {
			await changeQuantity(CART_MIN_ITEMS);
		}

		const fixedNewQuantity = Math.max(
			Math.min(newQuantity, CART_MAX_ITEMS),
			CART_MIN_ITEMS,
		);
		await changeQuantity(fixedNewQuantity);
	};

	const changeQuantity = async (newQuantity: number) => {
		if (!formRef.current || isNaN(newQuantity)) return;

		const formData = new FormData(formRef.current);
		formData.set("quantity", `${newQuantity}`);

		setStateQuantity(newQuantity);
		startTransition(() => {
			setOptimisticQuantity(newQuantity);
		});

		await changeItemQuantityAction(formData);
	};

	return (
		<form action={changeItemQuantityAction} ref={formRef}>
			<input type="hidden" name="productId" value={productId} />
			<InputQuantity
				quantity={stateQuantity}
				minQuantity={CART_MIN_ITEMS}
				maxQuantity={CART_MAX_ITEMS}
				onChange={handleChange}
				onBlur={handleBlur}
				onDecrementClick={() =>
					changeQuantity(optimisticQuantity - 1)
				}
				onIncrementClick={() =>
					changeQuantity(optimisticQuantity + 1)
				}
			/>
		</form>
	);
}
