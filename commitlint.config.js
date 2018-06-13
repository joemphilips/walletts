module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ["meta", "core", "blockchain-driver", "app", "components", "release"]]
  }
};
