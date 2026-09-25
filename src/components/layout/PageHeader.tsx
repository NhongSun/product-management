import { AlertTriangle, PackageCheck } from 'lucide-react'
import { formatNumber } from '../../utils/format'
import { StatCard } from './StatCard'

interface PageHeaderProps {
  totalItems: number
  totalStock: number
  lowStockCount: number
}

export function PageHeader({ totalItems, totalStock, lowStockCount }: PageHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-4 pb-6 md:flex-row md:items-center">
      <div>
        <div className="mb-1 flex items-center space-x-2 text-xs text-slate-500">
          <span>คลังสินค้า</span>
          <span>/</span>
          <span className="font-medium text-emerald-700">รายการสินค้าทั้งหมด</span>
        </div>
        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900">
          <span>จัดการรายการสินค้า</span>
          <span className="rounded-full bg-slate-200 px-2.5 py-1 font-sans text-xs font-medium text-slate-700">
            {totalItems} รายการ
          </span>
        </h1>
        <p className="mt-0.5 text-sm text-slate-500">
          ระบบควบคุมคลังสินค้า ตรวจสอบสต็อก ตัดยอดขาย และลงทะเบียนสินค้าใหม่
        </p>
      </div>

      <div className="flex items-center gap-3">
        <StatCard
          icon={PackageCheck}
          label="สต็อกคงเหลือรวม"
          value={`${formatNumber(totalStock)} ชิ้น`}
        />
        <StatCard
          icon={AlertTriangle}
          label="สินค้าใกล้หมด/หมด"
          value={`${lowStockCount} รายการ`}
          tone="amber"
        />
      </div>
    </div>
  )
}
