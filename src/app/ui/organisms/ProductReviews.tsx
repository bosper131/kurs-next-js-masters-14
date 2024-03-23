"use client";

import { useState } from "react";

import { type ReviewFragment } from "@/gql/graphql";
import { DEFAULT_VISIBLE_REVIEWS } from "@/data/consts";
import { Review, type ReviewProps } from "@/app/ui/molecules/Review";

export const ProductReviews = ({
	reviews = [],
}: {
	reviews: (ReviewFragment & { isSending?: boolean })[];
}) => {
	const [visibleReviewsCount, setVisibleReviewsCount] = useState(
		DEFAULT_VISIBLE_REVIEWS,
	);

	const visibleReviews = reviews.slice(0, visibleReviewsCount);

	return (
		<>
			<div className="my-4 border-b border-slate-300 py-4 first:mt-0 first:pt-0 last:mb-0 last:border-b-0 last:pb-0">
{visibleReviews.map((review) => (
    <div key={review.id}>
        <Review
            author={review.author}
            date={review.createdAt as Date}
            rating={review.rating as ReviewProps["rating"]}
            title={review.title}
            key={review.id}
            className={review.isSending ? "opacity-50" : ""}
        >
            {review.description}
        </Review>
    </div>
))}
			</div>
			<div className="mt-12">
				{visibleReviewsCount < reviews.length && (
					<button
						onClick={() =>
							setVisibleReviewsCount(
								(prevCount) => prevCount + DEFAULT_VISIBLE_REVIEWS,
							)
						}
					>
						Show more
					</button>
				)}
			</div>
		</>
	);
};
