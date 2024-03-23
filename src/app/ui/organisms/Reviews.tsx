"use client";
import { useOptimistic, useRef } from "react";
import { type ReviewFragment } from "@/gql/graphql";
import { addReviewAction } from "@/actions/reviews";
import { ProductReviews } from "@/app/ui/organisms/ProductReviews";

export async function Reviews({
	productId,
	reviews,
}: {
	productId: string;
	reviews: ReviewFragment[];
}) {
	const formRef = useRef<HTMLFormElement>(null);

	const [optimisticReviews, addOptimisticReview] = useOptimistic(
		reviews,
		(state, newReview: ReviewFragment) => [
			{
				...newReview,
				isSending: true,
			},
			...state,
		],
	);

	const handleFormAction = async (formData: FormData) => {
		addOptimisticReview({
			id: "-1",
			author: formData.get("name") as string,
			email: formData.get("email") as string,
			description: formData.get("content") as string,
			rating: parseInt(formData.get("rating") as string),
			title: formData.get("headline") as string,
			createdAt: new Date(),
			updatedAt: new Date(),
		});

		formRef.current?.reset();

		await addReviewAction(formData);
	};
	return (
		<div className="align-center grid grid-flow-row-dense grid-cols-3 gap-4">
			<div className="col-span-3 lg:sticky lg:top-[90px] lg:col-span-1 lg:self-start">
				<div className="mb-4">
					<h2>Reviews</h2>
				</div>
				<form
					action={handleFormAction}
					ref={formRef}
					data-testid="add-review-form"
				>
					<input type="hidden" name="productId" value={productId} />
					<div className="mb-4">
						<input
							type="number"
							name="rating"
							placeholder="Your rating:"
						/>
					</div>
					<div className="mb-2">
						<input
							name="headline"
							type="text"
							placeholder="Review title"
						/>
					</div>
					<div className="mb-2">
						<input
							name="content"
							type="textarea"
							placeholder="Content"
						/>
					</div>
					<div className="mb-2">
						<input name="name" type="text" placeholder="Your name" />
					</div>
					<div className="mb-2">
						<input name="email" type="email" placeholder="Email" />
					</div>
					<button type="submit" className="mt-4">
						Add your review
					</button>
				</form>
			</div>
			<div className="col-span-3 lg:col-span-2 lg:p-4">
				{reviews.length > 0 ? (
					<ProductReviews reviews={optimisticReviews} />
				) : (
					<p>No reviews yet...</p>
				)}
			</div>
		</div>
	);
}
