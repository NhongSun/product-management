import { PlusCircle } from 'lucide-react'

export function SubmitButton({ disabled }: { disabled: boolean }) {
  return (
    <div className="pt-3">
      <button
        type="submit"
        disabled={disabled}
        className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none disabled:active:scale-100"
      >
        <PlusCircle className="h-4 w-4" />
        <span>เพิ่มสินค้า (Add Product)</span>
      </button>
      <p className="mt-2 text-center text-[11px] text-slate-400">
        * ปุ่มจะสามารถกดได้เมื่อกรอกข้อมูลถูกต้องครบทุกช่อง
      </p>
    </div>
  )
}
