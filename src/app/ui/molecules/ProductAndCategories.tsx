import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import type { ProductsType } from "@/app/ui/organisms/ProductList.type";
import { formatMoney } from "@/app/utils/formatMoney";

export const ProductAndCategories = ({ alt, src, name, price, category }: ProductsType) => {
	return (
		<article>
			<ProductCoverImage src={src} alt={alt} />
			<h2>{name}</h2>
			<p>{category}</p>
			<p>{formatMoney(price)}</p>
		</article>
	);
};
