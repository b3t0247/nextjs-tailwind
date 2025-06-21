export default {
  "*.{js,jsx,ts,tsx}": (files) => {
    const quoted = files.map((f) => `"${f}"`).join(" ");
    return [
      `pnpm exec eslint --fix ${quoted}`,
      `git add ${quoted}`
    ];
  },
  "*.{css,md,json}": (files) => {
    const quoted = files.map((f) => `"${f}"`).join(" ");
    return [
      `pnpm exec prettier --write ${quoted}`,
      `git add ${quoted}`
    ];
  }
};