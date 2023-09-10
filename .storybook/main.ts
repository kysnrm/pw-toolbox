import type { StorybookConfig } from "@storybook/nextjs";
const paths = require("path");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (!config.resolve) return config;
    config.resolve.alias = {
      ...config.resolve?.alias,
      "@": paths.resolve(__dirname, "../"),
    };
    return config;
  },
};
export default config;
