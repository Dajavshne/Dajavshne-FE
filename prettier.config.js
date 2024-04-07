/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  allowParens: 'always',
  bracketSpacing: true,
};

module.exports = config;
