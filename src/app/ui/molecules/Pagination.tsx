import type { Route } from "next";
import { ActiveLink } from "@/app/ui/atoms/ActiveLink";

export default function Pagination({
	totalPages,
	url
}: {
	totalPages: number;
	url:string
}) {
	return (
		<nav
			className="flex justify-center space-x-2"
			aria-label="pagination"
		>
			{Array.from({ length: totalPages }).map((_, i) => (
				<ActiveLink key={i} href={`/${url}${i + 1}` as Route}>
					{i + 1}
				</ActiveLink>
			))}
		</nav>
	);
}
