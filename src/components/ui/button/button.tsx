import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import ArrowBack from '@/assets/icons/components/ArrowBack'
import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  icon?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    disabled = false,
    fullWidth,
    icon = false,
    variant = 'primary',
    ...rest
  } = props

  const clsxStyle = clsx(s[variant], icon && s.icon, fullWidth && s.fullWidth, className)

  return (
    <Component className={clsxStyle} disabled={disabled} {...rest}>
      {icon && <ArrowBack col={'#fff'} />} {children}
    </Component>
  )
}
