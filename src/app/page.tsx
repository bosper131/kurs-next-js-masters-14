import { ProductList } from "@/app/ui/organisms/ProductList";
import { executeGraphql } from "@/data/products";
import {
	ProductsGetListDocument,
	type ProductsGetListQuery,
} from "@/gql/graphql";


export default async function HomePage() {
	const dataProducts: ProductsGetListQuery = await executeGraphql(
		ProductsGetListDocument,
		{},
	);
	return <ProductList products={dataProducts.products.data} />;
}
