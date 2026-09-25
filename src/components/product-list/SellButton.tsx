import { ShoppingCart } from 'lucide-react'

interface SellButtonProps {
  disabled: boolean
  onClick: () => void
}

export function SellButton({ disabled, onClick }: SellButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-semibold shadow-sm transition ${
        disabled
          ? 'cursor-not-allowed bg-slate-200 text-slate-400 shadow-none'
          : 'cursor-pointer bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
      }`}
    >
      <ShoppingCart className="h-3.5 w-3.5" />
      <span>ขาย</span>
    </button>
  )
}
