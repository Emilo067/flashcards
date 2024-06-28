import { ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  position?: 'default' | 'left'
}
export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, className, disabled, errorMessage, id, label, onChange, position }, ref) => {
    const classNames = {
      buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
      container: clsx(s.container, className),
      error: s.error,
      indicator: s.indicator,
      label: clsx(s.label, disabled && s.disabled),
      root: s.root,
    }

    return (
      <div className={classNames.container}>
        <Typography as={'label'} className={classNames.label} htmlFor={id} option={'body2'}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              checked={checked}
              className={classNames.root}
              id={id}
              onCheckedChange={onChange}
              ref={ref}
            >
              <CheckboxRadix.Indicator className={classNames.indicator}>
                <CheckIcon color={'#000'} />
              </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
        {errorMessage && (
          <Typography className={classNames.error} option={'error'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
