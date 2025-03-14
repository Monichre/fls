import type { Meta, StoryObj } from "@storybook/react";
import { About } from "./About";

const meta: Meta<typeof About> = {
	title: "Home/About",
	component: About,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof About>;

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

// Story with a padding to showcase in constrained environments
export const WithPadding: Story = {
	decorators: [
		(Story) => (
			<div className="p-4">
				<Story />
			</div>
		),
	],
};
