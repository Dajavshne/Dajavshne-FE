/** @type {import("prettier").Config} */
const config = {
  bracketSameLine: true,
  tabWidth: 2,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'es5',
};

module.exports = config;
