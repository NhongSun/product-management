import { PackageX } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="p-12 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <PackageX className="h-6 w-6" />
      </div>
      <h4 className="font-semibold text-slate-700">ไม่พบรายการสินค้า</h4>
      <p className="mt-1 text-sm text-slate-500">
        ลองเปลี่ยนหมวดหมู่ตัวกรอง หรือค้นหาด้วยคำอื่น
      </p>
    </div>
  )
}
