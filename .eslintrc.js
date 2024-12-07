module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended', // 基本推荐的 ESLint 规则
      'plugin:prettier/recommended', // 启用 prettier 插件
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // 在这里可以添加你自定义的 ESLint 规则
    },
  };
  