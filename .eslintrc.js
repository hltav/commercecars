module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin", 
    "standard"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended", 
    "plugin:prettier/recommended", 
    "standard"
  ],
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'standard/no-callback-literal': 'off',
    'standard/object-curly-even-spacing': 'off',
    'standard/array-bracket-even-spacing': 'off',
  },
}
