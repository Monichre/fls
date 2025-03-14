import Image from "next/image";
import Link from "next/link";

export const About = () => {
	return (
		<section className="w-full bg-black text-white py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div>
						<Image
							src="/images/lighter-production.jpg"
							alt="Lighter production at FLS factory"
							width={600}
							height={400}
							className="rounded-lg shadow-lg object-cover w-full"
						/>
					</div>
					<div>
						<h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-white">
							About FLS Lighters
						</h2>
						<p className="text-lg mb-6 leading-relaxed">
							FLS lighters are designed with both style and functionality in
							mind. Our premium lighters are crafted to provide reliable
							performance while featuring elegant designs that stand out.
						</p>
						<p className="text-lg mb-8 leading-relaxed">
							We take pride in creating lighters that combine innovative
							technology with aesthetic appeal, making them perfect for everyday
							use or special occasions.
						</p>
						<Link
							href="https://www.flslighter.com.au/about"
							className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors"
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
