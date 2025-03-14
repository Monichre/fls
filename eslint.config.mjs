import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			// Downgrade errors to warnings
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": "warn",
			"react/no-unescaped-entities": "warn",
			"react-hooks/exhaustive-deps": "warn",
			// Disable some strict rules
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"no-console": "off",
			"prefer-const": "warn",
			// Make imports less strict
			"import/no-anonymous-default-export": "off",
			"import/no-unresolved": "warn",
			// Accessibility - downgrade to warnings
			"jsx-a11y/alt-text": "warn",
			"jsx-a11y/aria-props": "warn",
		},
		ignorePatterns: ["node_modules/", ".next/", "out/", "public/"],
	},
];

export default eslintConfig;
