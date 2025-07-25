import type { Config } from "release-it";
import { execSync } from "child_process";
import chalk from "chalk";

function getRepoSlug(): string {
  try {
    const url = execSync("git remote get-url origin").toString().trim();
    const match = url.match(/github\.com[/:]([^/]+\/[^/.]+)(?:\.git)?/);
    return match?.[1] ?? "unknown/repo";
  } catch {
    return "unknown/repo";
  }
}

type ConventionalCommit = {
  header?: string;
  body?: string;
};

const DEBUG = process.env.RELEASE_IT_DEBUG === "true";
let hasLogged = false;

async function whatBump(commits: ConventionalCommit[]) {
  if (DEBUG && !hasLogged) {
    console.log(chalk.bold.green("\n🔍 Parsed commits:"));
    for (const commit of commits) {
      console.log(chalk.bold.green(`- ${commit.header}`));
    }
    hasLogged = true;
  }

  const hasBreaking = commits.some(
    (commit) =>
      (commit.header && /^feat!/.test(commit.header)) ||
      (commit.body && /BREAKING CHANGE/.test(commit.body)),
  );
  if (hasBreaking) {
    const level = 0;
    const reason = "Contains breaking changes";
    if (DEBUG) console.log(chalk.cyan(`📦 Bump level: ${level} — ${reason}`));
    return { level, reason };
  }

  const hasFeature = commits.some(
    (commit) => commit.header && /^feat/.test(commit.header),
  );
  if (hasFeature) {
    const level = 1;
    const reason = "Contains new features";
    if (DEBUG) console.log(chalk.cyan(`📦 Bump level: ${level} — ${reason}`));
    return { level, reason };
  }

  const hasFix = commits.some(
    (commit) => commit.header && /^fix/.test(commit.header),
  );
  if (hasFix) {
    const level = 2;
    const reason = "Contains bug fixes";
    if (DEBUG) console.log(chalk.cyan(`📦 Bump level: ${level} — ${reason}`));
    return { level, reason };
  }

  return null;
}

const config: Config = {
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      whatBump,
      preset: {
        name: "conventionalcommits",
        types: [
          { type: "feat", section: "✨ Features" },
          { type: "fix", section: "🐛 Fixes" },
          { type: "perf", section: "⚡ Performance" },
          { type: "chore", hidden: true },
          { type: "docs", hidden: true },
          { type: "style", hidden: true },
          { type: "refactor", hidden: true },
          { type: "test", hidden: true },
        ],
      },
      writerOpts: {
        finalizeContext(context: unknown) {
          const ctx = context as Record<string, unknown>;
          ctx.formatDate = (date: Date | string) =>
            new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(date));
          const repoSlug = getRepoSlug();
          const commitGroups = ctx.commitGroups as any[];

          for (const group of commitGroups) {
            for (const commit of group.commits) {
              commit.shortHash = commit.hash.slice(0, 7);
              commit.commitUrl = `https://github.com/${repoSlug}/commit/${commit.hash}`;
            }
          }
          return ctx;
        },
        mainTemplate: `## {{version}} ({{formatDate date}})

{{#each commitGroups}}
### {{title}}

{{#each commits}}
* {{header}} ([{{shortHash}}]({{commitUrl}}))
{{/each}}

{{/each}}`,
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
    release: true,
  },
  npm: {
    publish: false,
  },
};

export default config;
