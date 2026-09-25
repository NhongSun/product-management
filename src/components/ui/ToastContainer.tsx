import type { ToastMessage } from '../../hooks/useToast'
import { Toast } from './Toast'

interface ToastContainerProps {
  toasts: ToastMessage[]
  onDismiss: (id: number) => void
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className="pointer-events-none fixed top-20 right-6 z-50 flex flex-col space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  )
}
