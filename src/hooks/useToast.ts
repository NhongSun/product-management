import { useCallback, useState } from 'react'

export type ToastType = 'success' | 'error'

export interface ToastMessage {
  id: number
  message: string
  type: ToastType
}

const TOAST_DURATION_MS = 1500

let nextToastId = 0

export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback(
    (message: string, type: ToastType = 'success') => {
      const id = nextToastId++
      setToasts((prev) => [...prev, { id, message, type }])
      setTimeout(() => dismissToast(id), TOAST_DURATION_MS)
    },
    [dismissToast],
  )

  return { toasts, showToast, dismissToast }
}
