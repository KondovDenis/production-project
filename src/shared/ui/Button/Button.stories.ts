import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import ThemeDecorator from '../../config/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';
import {ButtonSize} from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    background: 'color',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
} satisfies Meta<typeof Button>;


export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
} satisfies Meta<typeof Button>;



export const Dark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
} satisfies Meta<typeof Button>;

Dark.decorators = [ThemeDecorator(Theme.DARK)]


export const Light: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
} satisfies Meta<typeof Button>;

Light.decorators = [ThemeDecorator(Theme.LIGHT)]


export const DarkSizeM: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.M,
  },
} satisfies Meta<typeof Button>;

DarkSizeM.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkSizeL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
} satisfies Meta<typeof Button>;

DarkSizeL.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
} satisfies Meta<typeof Button>;

DarkSizeXL.decorators = [ThemeDecorator(Theme.DARK)]

export const LightSizeM: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.M,
  },
} satisfies Meta<typeof Button>;

LightSizeM.decorators = [ThemeDecorator(Theme.LIGHT)]

export const LightSizeL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
} satisfies Meta<typeof Button>;

LightSizeL.decorators = [ThemeDecorator(Theme.LIGHT)]

export const LightSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
} satisfies Meta<typeof Button>;

LightSizeXL.decorators = [ThemeDecorator(Theme.LIGHT)]


