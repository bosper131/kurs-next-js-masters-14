"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Route } from "next";

export const ActiveLink = ({
	href,
	children,
	activeClassName = "underline",
	className = "text-blue-400 hover:text-blue-600",
	exact,
}: {
	activeClassName?: string;
	href: Route;
	className?: string;
	children: ReactNode;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	const isActive = exact
		? pathname.startsWith(href)
		: pathname.startsWith(href) &&
			(pathname[href.length] === "/" ||
				pathname.length === href.length);
	return (
		<Link
			className={clsx(isActive && activeClassName, className)}
			href={href}
			aria-current={isActive || undefined}
		>
			{children}
		</Link>
	);
};
