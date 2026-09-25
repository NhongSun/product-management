import { Info } from 'lucide-react'

export function SmeTip() {
  return (
    <div className="mt-6 flex items-start space-x-2 rounded-lg border border-emerald-100 bg-emerald-50/60 p-3.5 text-xs text-slate-600">
      <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
      <div>
        <span className="font-bold text-emerald-900">เกร็ดสำหรับ SME:</span>{' '}
        การอัพเดทราคาและรหัส SKU ที่เป็นมาตรฐาน จะช่วยให้ FlowAccount
        ออกใบเสร็จและตัดรอบบัญชีภาษีได้อย่างแม่นยำ
      </div>
    </div>
  )
}
