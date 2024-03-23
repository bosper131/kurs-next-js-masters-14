import { ImageResponse } from "next/og";
import NextImage from "next/image";
import { getProductById } from "@/api/products";

export const runtime = "edge";

export const alt = "next14 masters sklep";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	if (!product) {
		return null;
	}
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl"
				style={{
					background: `
				    linear-gradient(
				      90deg,
				      rgb(6,172,214) 0%,
				      rgb(0,0,0) 20%,
				      rgb(0,0,0) 80%,
				      rgb(6,71,255) 100%
				    )`,
				}}
			>
				<p tw="font-sans uppercase m-0 p-0 text-[101px] leading-4">
					{product.name}
				</p>
				<p tw="font-serif m-0 p-0 font-black">
					{product.description}
				</p>
				<p tw="m-0 mt-2">{product?.categories[0]?.name}</p>
				<NextImage
					src={product.images[0]?.url || ""}
					alt={product.name}
					style={{
						width: size.width / 2,
						height: size.width / 2,
					}}
				/>
			</div>
		),
	);
}
