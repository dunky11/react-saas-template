const path = require("path");

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ["airbnb", "plugin:react/recommended"],
  plugins: ["babel", "import", "jsx-a11y", "react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }], // airbnb is using .jsx
    "react/require-default-props": "off", // airbnb use error
    "react/forbid-prop-types": "off", // airbnb use error
    "react/jsx-indent": "off",
    indent: "off",
    "react/jsx-wrap-multilines": "off",
    "comma-dangle": "off",
    "arrow-parens": "off",
    quotes: ["error", "double"],
    "operator-linebreak": "off",
    "consistent-return": "off",
    "react/jsx-one-expression-per-line": "off",
    "object-curly-newline": "off",
    "react/no-array-index-key": "off", // enable later
    "no-bitwise": "off",
    "implicit-arrow-linebreak": "off",
    "no-unneeded-ternary": "off",
    "object-shorthand": "off", // wtf is this rule
    "react/no-danger": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/media-has-caption": "off", // Must specify subtitles for <video> and <audio>
    "space-before-function-paren": "off",
    "linebreak-style": "off"
  }
};
