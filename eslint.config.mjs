import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const checkFileConfig = {
  plugins: {
    'check-file': checkFile
  },
  rules: {
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{ts,tsx}': 'KEBAB_CASE'
      },
      {
        ignoreMiddleExtensions: true
      }
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/!(__tests__)': 'KEBAB_CASE'
      }
    ]
  }
}

const eslintConfig = [
  ...checkFileConfig,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
