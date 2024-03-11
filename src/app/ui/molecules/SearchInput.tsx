"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
	const router = useRouter();
	const [route, setRoute] = useState<string>();
	const [timer, setTimer] = useState(null);
	const inputChanged = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setRoute(e.target.value);
		clearTimeout(timer);

		const newTimer = setTimeout(() => {
			router.push(`/search?query=${route}`);
			setRoute("");
		}, 500);
		setTimer(newTimer);
	};

	return (
		<input
			type="text"
			placeholder="Search"
			name="route"
			onChange={inputChanged}
			value={route}
			className="h-10 w-full rounded-lg border pl-3 pr-10 text-sm text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none focus:ring"
		/>
	);
};
