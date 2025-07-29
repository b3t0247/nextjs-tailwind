import path from "path";

const buildLintCommand = (files) => {
  const filtered = files.filter(
    (f) =>
      !f.endsWith("eslint.config.mjs") &&
      !f.endsWith("prettier.config.mjs") &&
      !f.endsWith(".lintstagedrc.mjs"),
  );

  if (filtered.length === 0) return [];

  const quoted = filtered
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(" ");

  return [
    `pnpm exec next lint --fix --file ${quoted}`,
    `pnpm exec prettier --write ${quoted}`,
    `git add ${quoted}`,
  ];
};

const buildFormatCommand = (files) => {
  const quoted = files
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(" ");
  return [`pnpm exec prettier --write ${quoted}`, `git add ${quoted}`];
};

export default {
  "*.{js,jsx,ts,tsx,mjs,cjs}": buildLintCommand,
  "*.{css,json,md,yml,yaml}": buildFormatCommand,
};
