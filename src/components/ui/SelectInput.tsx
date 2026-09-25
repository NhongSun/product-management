import { ChevronDown } from 'lucide-react'
import type { SelectHTMLAttributes } from 'react'

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  wrapperClassName?: string
}

export function SelectInput({
  wrapperClassName = '',
  className = '',
  children,
  ...props
}: SelectInputProps) {
  return (
    <div className={`relative ${wrapperClassName}`}>
      <select
        className={`w-full cursor-pointer appearance-none text-sm outline-none transition ${className}`}
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  )
}
