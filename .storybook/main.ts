import type { StorybookConfig } from "@storybook/react-vite";
import path from 'path'

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/, 
      use: [
        'style-loader', 
        'css-loader', 
        {
          loader: 'postcss-loader', 
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'), 
                require('autoprefixer'), 
              ], 
            }, 
          }, 
        }, 
      ], 
      include: path.resolve(__dirname, '../'), 
    });

    return config;
  }, 
};
export default config;
