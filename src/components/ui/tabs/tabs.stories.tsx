import { useState } from 'react'

import { Tabs } from '@/components/ui/tabs/tabs'
import { Meta } from '@storybook/react'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tab Switcher',
} satisfies Meta<typeof Tabs>

export default meta

const tabs = [
  { title: 'Switcher 1', value: 'Tab 1' },
  { title: 'Switcher 2', value: 'Tab 2' },
  { title: 'Switcher 3', value: 'Tab 3' },
  { disabled: true, title: 'Disabled', value: 'disabled' },
]

export const Default = {
  render: () => {
    const [value, setValue] = useState('Tab 2')

    return (
      <div>
        <Tabs
          label={'TabSwitcher'}
          onValueChange={(value: string) => setValue(value)}
          orientation={'horizontal'}
          tabs={tabs}
          value={value}
        />
        <p style={{ marginTop: '36px' }}>{value}</p>
      </div>
    )
  },
}
