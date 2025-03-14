import Link from "next/link";
import { ProductGallery } from "./ProductGallery";

export const ProductCollection = () => {
	return (
		<section className="w-full bg-black text-white py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat text-white">
						FLS Lighters Collection
					</h2>
					<p className="text-lg max-w-3xl mx-auto">
						FLS brings you a vibrant range of lighters that blend comfort and
						style effortlessly. Each one is crafted to fit perfectly in your
						hand for a comfy grip every time. With sleek designs and fun
						patterns, FLS Lighters not only work great but also add a splash of
						sophistication to any moment.
					</p>
					<div className="mt-8">
						<Link
							href="https://www.flslighter.com.au/products"
							className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors"
						>
							View More
						</Link>
					</div>
				</div>

				<ProductGallery />
			</div>
		</section>
	);
};
