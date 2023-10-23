import type { Preview } from "@storybook/react";
import './index.css';
// import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Get Started',
          ['Introduction', 'Changelog'],
          'Example',
          [
            'Header',
            'Button',
          ],
        ],
      },
    },
  },
};

export default preview;
