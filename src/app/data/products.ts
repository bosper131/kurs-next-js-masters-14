import { type ProductsType } from "@/app/ui/organisms/ProductList.type";

export const products: ProductsType[] = [
	{
		id: 1,
		name: "Koszulka",
		price: 100,
		src: "/tshirt.jpg",
		category:'Clothes',
		alt: "Tshirt-1",
	},
	{
		id: 2,
		name: "Plecak",
		price: 200,
		category:'Bags',
		src: "/plecak.jpg",
		alt: "Plecak",
	},
	{
		id: 3,
		name: "Koszulka piwo",
		price: 300,
		category:'Clothes',
		src: "/tshirt-2.jpg",
		alt: "Tshirt-2",
	},
	{
		id: 4,
		name: "Koszulka zielona",
		price: 400,
		category:'Clothes',
		src: "/tshirt-3.jpg",
		alt: "Tshirt-3",
	},
];
