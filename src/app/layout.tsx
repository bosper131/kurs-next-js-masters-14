import type { Metadata, Route } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "@/app/ui/atoms/ActiveLink";
import { SearchInput } from "@/app/ui/molecules/SearchInput";
import { executeGraphql } from "@/data/products";
import {
	CollectionsByNameDocument,
	type CollectionsByNameQuery,
} from "@/gql/graphql";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const data: CollectionsByNameQuery = await executeGraphql(
		CollectionsByNameDocument,
		{},
	);

	return (
		<html lang="pl">
			<body className={inter.className}>
				<nav className="bg-gray-100 p-4">
					<ul className="mt-2 flex justify-center space-x-4">
						<li>
							{data.collections.data.map((collection) => {
								return (
									<span className="px-1" key={collection.name}>
										<ActiveLink
											href={
												`/collections/${collection.name.toLowerCase().replace(/ /g, "")}` as Route
											}
											exact
										>
											{collection.name}
										</ActiveLink>
									</span>
								);
							})}
						</li>
						<li>
							<ActiveLink href="/">Home</ActiveLink>
						</li>
						<li>
							<ActiveLink href={"/products" as Route} exact>
								All
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href={"/categories/" as Route} exact>
								Categories
							</ActiveLink>
						</li>
						<li>
							<SearchInput />
						</li>
					</ul>
				</nav>
				<section className="p12 md:max-w-4x mx-auto max-w-md sm:max-w-2xl sm:py-16 lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-sm text-gray-500">@ 2024</p>
				</footer>
			</body>
		</html>
	);
}
