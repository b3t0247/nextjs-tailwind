import js from "@eslint/js";
import * as tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierOptions from "./prettier.config.mjs";

export default [
  // Global ignore to prevent type-aware rules from touching this file
  {
    ignores: [".release-it.ts", ".lintstagedrc.mjs"],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules (type-aware)
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },

  // Fallback for .release-it.ts (non-type-aware)
  {
    files: [".release-it.ts"],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },

  // Prettier integration
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": ["error", prettierOptions, { usePrettierrc: false }],
    },
  },
];
