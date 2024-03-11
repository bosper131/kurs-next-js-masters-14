"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchInput = () => {
	const router = useRouter();
	const [route, setRoute] = useState<string>();
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		router.push(`/search?query=${route}`);
		setRoute("");
	};

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			router.push(`/search?query=${route}`);
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [route]);

	return (
		<form onSubmit={handleSubmit} className="relative">
			<input
				type="text"
				placeholder="Search"
				name="route"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setRoute(e.target.value);
				}}
				value={route}
				className="h-10 w-full rounded-lg border pl-3 pr-10 text-sm text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none focus:ring"
			/>
		</form>
	);
};
