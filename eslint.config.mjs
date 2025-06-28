import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next",
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"],
      // '@typescript-eslint/explicit-function-return-type': ['warn'],
      "prettier/prettier": [
        "error",
        {
          trailingComma: "all",
          semi: true,
          tabWidth: 2,
          singleQuote: false,
          printWidth: 80,
          endOfLine: "auto",
          arrowParens: "always",
          plugins: ["prettier-plugin-tailwindcss"],
        },
        { usePrettierrc: false },
      ],
    },
  }),
];

export default eslintConfig;
