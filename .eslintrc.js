module.exports = {
  parser: '@typescript-eslint/parser', //Specifies that the code is in typescript so need this parser to add this
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', //This is done to automatically detect the react version
    },
  },
  extends: [
    'plugin:react/recommended', //Plugin for react rules
    'plugin:react-hooks/recommended', //Plugin for rules of react-hooks
    'plugin:@typescript-eslint/recommended', //For recommended typescript rules
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended', //Accessibility standards rules
    'plugin:eslint-comments/recommended',
    'prettier/@typescript-eslint', //To run prettier as plugin for eslint
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off', // To make sure react is not imported and it does not give error
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
