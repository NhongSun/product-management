import { AlertCircle, CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { ToastMessage } from '../../hooks/useToast'

interface ToastProps {
  toast: ToastMessage
  onDismiss: (id: number) => void
}

export function Toast({ toast, onDismiss }: ToastProps) {
  const [visible, setVisible] = useState(false)
  const isSuccess = toast.type === 'success'
  const Icon = isSuccess ? CheckCircle : AlertCircle

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      role="status"
      onClick={() => onDismiss(toast.id)}
      className={`pointer-events-auto flex cursor-pointer items-center space-x-3 rounded-lg border px-4 py-3 text-sm shadow-lg transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      } ${
        isSuccess
          ? 'border-emerald-700 bg-emerald-900 text-white'
          : 'border-red-700 bg-red-800 text-white'
      }`}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <div className="text-xs font-medium sm:text-sm">{toast.message}</div>
    </div>
  )
}
