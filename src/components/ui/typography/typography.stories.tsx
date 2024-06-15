import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography/typography'

const meta = {
  component: Typography,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'H1 Typography',
    color: 'light',
    option: 'h1',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'H3 Typography',
    color: 'light',
    disabled: true,
    option: 'h3',
  },
}

export const Body1: Story = {
  args: {
    as: 'p',
    children: 'Body1 Typography',
    color: 'light',
    option: 'body1',
  },
}

export const Subtitle1: Story = {
  args: {
    as: 'p',
    children: 'Subtitle1 Typography',
    color: 'light',
    disabled: true,
    option: 'subtitle1',
  },
}

export const Caption: Story = {
  args: {
    as: 'span',
    children: 'Subtitle1 Typography',
    color: 'light',
    option: 'caption',
  },
}

export const Link1: Story = {
  args: {
    as: 'a',
    children: 'Link1 Typography',
    color: 'light',
    option: 'link1',
  },
}

export const Link2: Story = {
  args: {
    as: 'a',
    children: 'Link2 Typography',
    color: 'light',
    option: 'link2',
  },
}

export const Error: Story = {
  args: {
    as: 'a',
    children: 'Error Typography',
    color: 'light',
    option: 'error',
  },
}
