import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components'
import { Typography } from '@/components/ui/typography'

const meta = {
  component: Button,
  parameters: {
    layout: ['centered'],
  },
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: <Typography option={'subtitle2'}>Primary button</Typography>,
    // children: 'Primary button',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryDisabled: Story = {
  args: {
    children: <Typography option={'subtitle2'}>Primary button</Typography>,
    // children: 'Primary button',
    disabled: true,
    variant: 'primary',
  },
}

export const PrimaryIcon: Story = {
  args: {
    children: <Typography option={'subtitle2'}>Primary button</Typography>,
    // children: 'Primary button',
    icon: true,
    variant: 'primary',
  },
}

export const PrimaryIconDisabled: Story = {
  args: {
    children: <Typography option={'subtitle2'}>Primary button</Typography>,
    disabled: true,
    // children: 'Primary button',
    icon: true,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: <Typography option={'subtitle2'}>Secondary button</Typography>,
    variant: 'secondary',
  },
}

export const SecondaryDisable: Story = {
  args: {
    children: <Typography option={'subtitle2'}>Secondary button</Typography>,
    disabled: true,
    variant: 'secondary',
  },
}

export const SecondaryIcon: Story = {
  args: {
    children: <Typography option={'subtitle2'}>Secondary button</Typography>,
    icon: true,
    variant: 'secondary',
  },
}

export const SecondaryIconDisable: Story = {
  args: {
    children: <Typography option={'subtitle2'}>Secondary button</Typography>,
    disabled: true,
    icon: true,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    target: '_blank',
    variant: 'primary',
  },
}
