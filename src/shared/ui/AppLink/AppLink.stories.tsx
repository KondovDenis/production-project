import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import ThemeDecorator from '../../config/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/AppLink',
  component: AppLink,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    background: 'color',
  },
  args:{
    to: '/'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',
  },
} satisfies Meta<typeof AppLink>;


export const DarkPrimary: Story = {
    args: {
      theme: AppLinkTheme.PRIMARY,
      children: 'Text',
    },
  } satisfies Meta<typeof AppLink>;
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)]


export const Secondary: Story = {
    args: {
      theme: AppLinkTheme.SECONDARY,
      children:'Text',
    },
  } satisfies Meta<typeof AppLink>;


  export const DarkSecondary: Story = {
    args: {
      children: 'Text',
      theme: AppLinkTheme.SECONDARY,
    },
  } satisfies Meta<typeof AppLink>;
DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)]