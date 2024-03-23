import {
	ReviewsGetByProductIdDocument,
	ReviewCreateDocument,
	type ReviewFragment,
} from "@/gql/graphql";
import { getProductById } from "@/api/products";
import { executeGraphql } from "@/data/products";

export const getReviewsByProductId = async (
	productId: string,
): Promise<ReviewFragment[] | undefined> => {
	const graphqlResponse = await executeGraphql({
		query: ReviewsGetByProductIdDocument,
		variables: { productId },
		next: {
			tags: ["reviews"],
		},
	});
	return graphqlResponse.product?.reviews.map((review) => ({
		...review,
		createdAt: new Date(review.createdAt as string),
		updatedAt: new Date(review.updatedAt as string),
	}));
};

export async function addReview(data: {
	productId: string;
	rating: ReviewFragment["rating"];
	title: ReviewFragment["title"];
	description: ReviewFragment["description"];
	author: ReviewFragment["author"];
	email: ReviewFragment["email"];
}) {
	const { productId } = data;
	const product = await getProductById(productId);

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: ReviewCreateDocument,
		variables: data,
		next: {
			tags: ["reviews"],
		},
	});
}
