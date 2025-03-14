import type { Meta, StoryObj } from "@storybook/react";
import { ProductGallery } from "./ProductGallery";

const meta: Meta<typeof ProductGallery> = {
	title: "Home/ProductGallery",
	component: ProductGallery,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductGallery>;

export const Default: Story = {};

// Story with a different background to showcase the component in a different context
export const DarkBackground: Story = {
	decorators: [
		(Story) => (
			<div className="bg-gray-900 p-8 max-w-5xl">
				<Story />
			</div>
		),
	],
};

// Story with a constrained width to simulate mobile view
export const MobileView: Story = {
	decorators: [
		(Story) => (
			<div className="max-w-sm mx-auto">
				<Story />
			</div>
		),
	],
};
