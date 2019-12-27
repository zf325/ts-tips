module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    // "plugin:@typescript-eslint/recommended",
    // "plugin:import/typescript",
  ],
//   plugin: ["@typescript-eslint"]
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
      "import/resolver": {
        node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
    }
  }
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
      indent: ["error", 4],
  },
};
