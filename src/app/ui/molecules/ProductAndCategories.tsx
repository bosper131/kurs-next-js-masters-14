import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import type { ProductsType } from "@/app/ui/organisms/ProductList.type";
import { formatMoney } from "@/app/utils/formatMoney";

export const ProductAndCategories = ({
	description,
	image,
	title,
	price,
	category,
}: ProductsType) => {
	return (
		<article>
			<ProductCoverImage src={image} alt={description} />
			<h1>{title}</h1>
			<p>{category}</p>
			<p>{formatMoney(price)}</p>
		</article>
	);
};
