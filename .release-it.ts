import type { Config } from "release-it";
import { Bumper } from "conventional-recommended-bump";
import type { BumperRecommendationResult } from "conventional-recommended-bump";
import chalk from "chalk";

const DEBUG = process.env.RELEASE_IT_DEBUG === "true";
let hasLogged = false;

if (DEBUG) {
  console.log(
    chalk.bold.green("✅ Loaded release-it config (debug mode enabled)\n"),
  );
}

const config: Config = {
  plugins: {
    "@release-it/conventional-changelog": {
      preset: "conventionalcommits",
      skipEmptyRelease: true,
      async whatBump() {
        const bumper = new Bumper();
        bumper.loadPreset("conventionalcommits");

        const result: BumperRecommendationResult = await bumper.bump(
          (commits) => {
            if (DEBUG && !hasLogged) {
              console.log(chalk.bold.green("\n🔍 Parsed commits:"));
              for (const commit of commits) {
                console.log(chalk.bold.green(`- ${commit.header}`));
              }
              hasLogged = true;
            }

            const versionWorthy = commits.some(
              (commit) =>
                typeof commit.header === "string" &&
                /^(feat|fix|perf|BREAKING CHANGE)/.test(commit.header),
            );

            return versionWorthy ? undefined : null;
          },
        );

        if ("releaseType" in result && result.releaseType) {
          return result;
        }

        return null;
      },
    },
  },
  git: {
    commitMessage: "chore(release): v${version}",
    tagName: "v${version}",
    requireCleanWorkingDir: true,
    requireBranch: false,
  },
  github: {
    release: false,
  },
  npm: {
    publish: false,
  },
};

export default config;
