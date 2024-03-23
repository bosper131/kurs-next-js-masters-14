
import { getReviewsByProductId } from '@/api/reviews';
import { Reviews } from '@/app/ui/organisms/Reviews';

export async function ReviewsList({ productId }: { productId: string}) {
	const reviews = ((await getReviewsByProductId(productId)) || []).reverse();

	return <Reviews productId={productId} reviews={reviews} />;
}
