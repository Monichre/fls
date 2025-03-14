import type { Meta, StoryObj } from "@storybook/react";
// Not using the actual ProductCollection to avoid dependency issues
// import { ProductCollection } from './ProductCollection';

// Create a mock version of the component for Storybook
const MockProductCollection = () => {
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
						<a
							href="https://example.com"
							className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors"
						>
							View More
						</a>
					</div>
				</div>

				{/* Mock of the ProductGallery */}
				<div className="p-6 bg-gray-800 text-white text-center">
					Product Gallery Component (Mocked for Storybook)
				</div>
			</div>
		</section>
	);
};

const meta: Meta<typeof MockProductCollection> = {
	title: "Home/ProductCollection",
	component: MockProductCollection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MockProductCollection>;

export const Default: Story = {};

// Story with a lighter background to showcase contrast
export const LightBackground: Story = {
	decorators: [
		(Story) => (
			<div className="bg-gray-800">
				<Story />
			</div>
		),
	],
};
