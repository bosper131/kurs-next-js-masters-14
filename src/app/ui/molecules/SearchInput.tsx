"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
	const router = useRouter();
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
	const inputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const target = e.target as HTMLInputElement;
		if (timer !== null) {
			clearTimeout(timer);
		}

		const newTimer = setTimeout(() => {
			router.push(`/search?query=${target.value}`);
		}, 500);
		setTimer(newTimer);
	};

	return (
		<input
			type="search"
			placeholder="Search"
			name="route"
			onChange={inputChanged}
			className="h-10 w-full rounded-lg border pl-3 pr-10 text-sm text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none focus:ring"
		/>
	);
};
