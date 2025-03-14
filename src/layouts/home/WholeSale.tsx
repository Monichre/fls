import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Divider } from "@/components/ui/divider";
import Image from "next/image";
import Link from "next/link";

export const WholeSale = () => {
	return (
		<section className="relative w-full bg-white overflow-hidden pt-12">
			<Divider
				backgroundImage="/bottom-decal.svg"
				color="#F7CB00"
				height={50}
				position="top"
				className="z-10"
			/>
			<div className="absolute top-0 left-0 z-0 w-full min-h-[1280px] h-full">
				<AspectRatio ratio={1 / 1}>
					<Image
						src="/factory.jpeg"
						alt="Lighter working in FLS lighters factory"
						priority
						width={1000}
						height={1000}
						style={{ objectFit: "cover", objectPosition: "center" }}
						className="w-full h-auto"
					/>
				</AspectRatio>
			</div>
			<div className="relative z-10 container mx-auto px-4 py-16">
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div>
						<h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins text-black">
							WHOLESALE OPPORTUNITIES
						</h2>
						<p className="text-lg mb-6 text-gray-700">
							Partner with FLS for premium quality lighters at competitive
							wholesale rates. Our wholesale program offers flexible ordering
							options, reliable fulfillment, and dedicated support to help your
							business thrive.
						</p>
						<ul className="mb-8 space-y-2">
							<li className="flex items-center">
								<span className="mr-2 text-yellow-500">✓</span>
								<span>Bulk discounts on all products</span>
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-yellow-500">✓</span>
								<span>Customization options available</span>
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-yellow-500">✓</span>
								<span>Reliable and fast shipping</span>
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-yellow-500">✓</span>
								<span>Dedicated account manager</span>
							</li>
						</ul>
						<Link
							href="/wholesale"
							className="inline-block bg-[#f7cb00] text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition-colors"
						>
							Become a Wholesaler
						</Link>
					</div>
					<div className="relative">
						<Image
							src="/wholesale-image.jpg"
							alt="FLS Wholesale Products"
							width={500}
							height={400}
							className="rounded-lg shadow-xl"
							style={{ objectFit: "cover" }}
						/>
						<div className="absolute -bottom-4 -right-4 bg-[#f7cb00] p-4 rounded-lg shadow-lg">
							<p className="text-2xl font-bold text-white">Up to 40% OFF</p>
							<p className="text-white">on bulk orders</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
