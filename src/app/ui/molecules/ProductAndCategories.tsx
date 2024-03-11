import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import type { ProductsType } from "@/app/ui/organisms/ProductList.type";
import { formatMoney } from "@/app/utils/formatMoney";

export const ProductAndCategories = ({
	description,
	images,
	name,
	price,
	categories,
}: ProductsType) => {
	return (
		<article>
			{images[0] && (
				<ProductCoverImage src={images[0].url} alt={description} />
			)}
			<h1>{name}</h1>
			{categories[0] && <p>{categories[0].name}</p>}
			<p>{formatMoney(price)}</p>
			<p>{description}</p>
		</article>
	);
};
