import { Plus } from 'lucide-react'

export function FormHeader() {
  return (
    <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
          <Plus className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-base font-bold text-slate-900">เพิ่มสินค้าใหม่</h2>
          <p className="text-xs text-slate-500">ลงทะเบียนสินค้าเข้าสู่ระบบ</p>
        </div>
      </div>
      <span className="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600">
        Form Validation
      </span>
    </div>
  )
}
