import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Page/MainPage',
  component: MainPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    background: 'color',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Page: Story = {
  args: {
  },
} satisfies Meta<typeof MainPage>;
Page.decorators = [ThemeDecorator(Theme.LIGHT)]




export const DarkPage: Story = {
    args: {
    },
  } satisfies Meta<typeof MainPage>;
  DarkPage.decorators = [ThemeDecorator(Theme.DARK)]
