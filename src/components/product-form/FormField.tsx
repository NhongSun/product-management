import type { ReactNode } from 'react'
import { FieldError } from './FieldError'

interface FormFieldProps {
  htmlFor: string
  label: string
  hint?: string
  error?: string
  children: ReactNode
}

export function FormField({ htmlFor, label, hint, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1 block text-xs font-semibold text-slate-700">
        {label}
        {hint && <span className="text-red-500"> {hint}</span>}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  )
}
