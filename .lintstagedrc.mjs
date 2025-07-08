export default {
  "*.{js,jsx,ts,tsx,mjs,cjs}": (files) => {
    const filtered = files.filter(
      (f) => !f.endsWith("eslint.config.mjs") && !f.endsWith("prettier.config.mjs")
    );
    if (filtered.length === 0) return [];
    const quoted = filtered.map((f) => `"${f}"`).join(" ");
    return [`pnpm exec eslint --fix ${quoted}`, `git add ${quoted}`];
  },
  "*.{css,md,json,yml,yaml}": (files) => {
    const quoted = files.map((f) => `"${f}"`).join(" ");
    return [`pnpm exec prettier --write ${quoted}`, `git add ${quoted}`];
  },
};
