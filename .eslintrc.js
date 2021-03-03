module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["babel", "simple-import-sort"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/display-name": 1,
    "template-curly-spacing": "off",
    "global-require": "off",
    "import/export": "off",
    "sort-import": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "jsx-a11y/accessible-emoji": "off",
    "react/destructuring-assignment": ["off", "always"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-unescaped-entities": "off",
    "react/jsx-no-undef": ["off", { allowGlobals: true }],
    "react/jsx-props-no-spreading": "warn",
    "react/prop-types": "off",
    "react/self-closing-comp": "off",
    "import/no-unresolved": "off",
    "object-shorthand": 1,
  },
};