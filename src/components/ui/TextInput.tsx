import type { InputHTMLAttributes } from 'react'
import { inputClassName } from './inputStyles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export function TextInput({ hasError, className = '', ...props }: TextInputProps) {
  return <input className={inputClassName(hasError, className)} {...props} />
}
