import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default [
  // 1. Sử dụng cấu hình mặc định của JavaScript
  js.configs.recommended,

  {
    // 2. Chặn các thư mục rác VÀ bộ Catalyst để tránh 55 cảnh báo thừa
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "out/**",
      "public/**",
      "app/ui/catalyst/**",
    ],
  },

  {
    // 3. Cấu hình quy tắc cho file dự án (.js, .jsx, .ts, .tsx)
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Quy tắc React & Hooks (Tự động nhận diện React 19)
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,

      // Quy tắc cốt lõi của Next.js (SEO & Performance)
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      "react/react-in-jsx-scope": "off", // Next.js không cần import React
      "react/prop-types": "off",

      // Quy tắc cá nhân giúp code sạch
      "no-unused-vars": "warn", // Cảnh báo biến thừa
      "no-console": "warn", // Cảnh báo console.log
      "@next/next/no-img-element": "warn", // Nhắc nhở dùng thẻ <Image />
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // 4. PHẢI ĐỂ CUỐI CÙNG: Tắt các quy tắc xung đột với Prettier
  prettierConfig,
];
