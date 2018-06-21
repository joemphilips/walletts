module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
  rules: {
    'scope-enum': [
      2, 'always', [
        "meta",
        "core",
        "apollo-driver",
        "blockchain-driver",
        "app",
        "components",
        "release",
        "schema",
      ]
    ]
  }
};
