import type { Preview } from "@storybook/react";
import StyleDecorator from "../../src/shared/config/styleDecorator/StyleDecorator"
import ThemeDecorator from "../../src/shared/config/ThemeDecorator/ThemeDecorator"
import { Theme } from "../../src/app/providers/ThemeProvider/lib/ThemeContext";
import RouteDecorator from "../../src/shared/config/RouteDecorator/RouteDecorator"



const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    StyleDecorator,
    RouteDecorator,
  ]

};


export default preview;

