import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";

const meta: Meta<typeof Hero> = {
	title: "Home/Hero",
	component: Hero,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};

// A version with a different background to showcase adaptability
export const DarkOverlay: Story = {
	decorators: [
		(Story) => (
			<div className="bg-black">
				<Story />
			</div>
		),
	],
};
