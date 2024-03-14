import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import type { ProductListWithSuggested } from "@/app/ui/organisms/ProductList.type";
import { formatMoney } from "@/app/utils/formatMoney";

export const ProductAndCategories = ({
	description,
	images,
	name,
	price,
	categories,
	isSuggested,
}: ProductListWithSuggested) => {
	const title = isSuggested ? <h2>{name}</h2> : <h1>{name}</h1>;
	return (
		<article>
			{images[0] && (
				<ProductCoverImage src={images[0].url} alt={description} />
			)}
			{title}
			{categories[0] && <p>{categories[0].name}</p>}
			<p>{formatMoney(price)}</p>
			<p>{description}</p>
		</article>
	);
};
