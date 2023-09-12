module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'airbnb',
      "plugin:prettier/recommended",
      "prettier"
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
      'import/no-unresolved': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "generator-star-spacing": "off",
      "prettier/prettier": [
        "error",
        {
          "tabWidth": 2,
          "printWidth": 80,
          "useTabs": false,
          "semi": true,
          "singleQuote": true,
          "trailingComma": "all",
          "arrowParens": "avoid",
          "endOfLine": "lf"
        }
      ],
    },
  }