// plopfile.js
export default function (plop) {
	// Component generator
	plop.setGenerator("component", {
		description: "Create a new React component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Component name?",
			},
			{
				type: "confirm",
				name: "withStory",
				message: "Generate Storybook story?",
				default: true,
			},
		],
		actions: (data) => {
			const actions = [
				{
					type: "add",
					path: "src/components/{{name}}/{{pascalCase name}}.tsx",
					templateFile: "plop-templates/component.tsx.hbs",
				},
			];

			if (data.withStory) {
				actions.push({
					type: "add",
					path: "src/components/{{name}}/{{pascalCase name}}.stories.ts",
					templateFile: "plop-templates/component.stories.ts.hbs",
				});
			}

			return actions;
		},
	});

	// Page generator
	plop.setGenerator("page", {
		description: "Create a new Next.js page",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Page name (path)?",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/app/{{name}}/page.tsx",
				templateFile: "plop-templates/page.tsx.hbs",
			},
		],
	});
}
