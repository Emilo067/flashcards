import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Label } from '@/components/ui/label/Label'
import * as TabsRadix from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabs.module.scss'

type TabType = {
  disabled?: boolean
  title: string
  value: string
}

type Props = {
  children?: ReactNode
  label?: string
  onValueChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof TabsRadix.Root>
export const Tabs = ({
  children,
  className,
  label,
  onValueChange,
  orientation = 'vertical',
  tabs,
  ...rest
}: Props) => {
  const classNames = {
    label: s.label,
    list: s.tabsList,
    root: clsx(s.root, orientation === 'vertical' && s.horizontal),
    trigger: s.tabTrigger,
  }

  return (
    <div>
      {label && <Label className={classNames.label}>{label}</Label>}
      <TabsRadix.Root
        className={classNames.root}
        defaultValue={'tab1'}
        onValueChange={onValueChange}
        orientation={orientation}
        {...rest}
      >
        <TabsRadix.List aria-label={'tabs example'} className={s.list}>
          {tabs.map(tab => {
            return (
              <TabsRadix.Trigger
                className={classNames.trigger}
                disabled={tab.disabled}
                key={tab.value}
                value={tab.value}
              >
                {tab.title}
              </TabsRadix.Trigger>
            )
          })}
        </TabsRadix.List>
      </TabsRadix.Root>
    </div>
  )
}
