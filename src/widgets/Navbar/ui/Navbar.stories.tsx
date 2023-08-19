import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    background: 'color',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightSide: Story = {
  args: {
  },
} satisfies Meta<typeof Navbar>;
LightSide.decorators = [ThemeDecorator(Theme.DARK)]


export const DarkSide: Story = {
  args: {
  },
} satisfies Meta<typeof Navbar>;

DarkSide.decorators = [ThemeDecorator(Theme.LIGHT)]
