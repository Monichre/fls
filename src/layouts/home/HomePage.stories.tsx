import type { Meta, StoryObj } from "@storybook/react";
import { HomePage } from "./HomePage";

const meta: Meta<typeof HomePage> = {
	title: "Home/HomePage",
	component: HomePage,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};

// For HomePage, a single story is usually sufficient as it's a composition of other components
// If needed, different variations could be added with decorators or by passing props to child components
