import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginImport from 'eslint-plugin-import';
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "import": eslintPluginImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "arrow-body-style": ["error", "as-needed"],
      "semi": ["error", "always"],
      'jsx-a11y/anchor-is-valid': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react/iframe-missing-sandbox': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/jsx-newline': 'off',
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"]
        ],
        "pathGroups" : [
          {
            "pattern": "react**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@app/**/*",
            "group": "sibling",
            "position": "before"
          },
          {
            "pattern": "@pages/**/*",
            "group": "sibling",
            "position": "before"
          },
          {
            "pattern": "@widgets/**/*",
            "group": "sibling",
            "position": "before"
          },
          {
            "pattern": "@features/**/*",
            "group": "sibling",
            "position": "before"
          },
          {
            "pattern": "@entities/**/*",
            "group": "sibling",
            "position": "before"
          },
          {
            "pattern": "@shared/**/*",
            "group": "sibling",
            "position": "before"
          },
          {
            "pattern": "{..}+/**/*",
            "group": "sibling",
            "position": "before"
          },
          {
            "pattern": "./**/*.scss",
            "group": "index",
            "position": "after"
          }
        ],
        "alphabetize": {
          "order": "asc"
        },
        "pathGroupsExcludedImportTypes": ["builtin"],
        "distinctGroup": false
      }
    ],
    },
  },
);
