module.exports = {
    extends: ['@commitlint/config-conventional'],
    value: [
    'build',
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test',
    'update'
    ],
    rules: {
      'subject-case': [2, 'never', ['start-case', 'pascal-case']],
    },
  };