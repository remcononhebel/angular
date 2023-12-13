const {
  utils: { getProjects },
} = require('@commitlint/config-nx-scopes');

module.exports = {
  helpUrl: 'README.md',
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-regex-match'],
  rules: {
    'scope-enum': async (ctx) => [
      2,
      'always',
      [...(await getProjects(ctx, ({ tags }) => !tags.includes('stage:end-of-life'))), 'all', 'git', 'pipelines'],
    ],
    'body-match': [2, 'always', '[a-z]+\\([0-9a-z-]+\\): .*'],
  },
};
