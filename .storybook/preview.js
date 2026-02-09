import './preview.css';

export const parameters = {
  viewport: {
    viewports: {
      kiosk: {
        name: 'Kiosk',
        styles: {
          width: '1080px',
          height: '1920px',
        },
      },
    },
    defaultViewport: 'kiosk',
  },
  layout: 'fullscreen',
};





/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;