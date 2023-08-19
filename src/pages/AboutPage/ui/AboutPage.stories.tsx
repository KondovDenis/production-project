import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Page/AboutPage',
  component: AboutPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    background: 'color',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Page: Story = {
  args: {
  },
} satisfies Meta<typeof AboutPage>;
Page.decorators = [ThemeDecorator(Theme.LIGHT)]




export const DarkPage: Story = {
    args: {
    },
  } satisfies Meta<typeof AboutPage>;
  DarkPage.decorators = [ThemeDecorator(Theme.DARK)]