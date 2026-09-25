import { Calculator } from 'lucide-react'
import { formatBaht, formatNumber } from '../../utils/format'
import type { ProductSummary as Summary } from '../../utils/productStats'

export function ProductSummary({ summary }: { summary: Summary }) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-slate-50 p-5 sm:flex-row">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Calculator className="h-4 w-4 text-slate-400" />
        <span>สรุปตามเงื่อนไขตัวกรองปัจจุบัน (Real-time calculation)</span>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <SummaryItem label="จำนวนรายการที่แสดง" value={`${summary.count} รายการ`} />
        <SummaryItem
          label="จำนวนคงเหลือรวม"
          value={`${formatNumber(summary.totalStock)} ชิ้น`}
          divided
        />
        <div className="border-l border-slate-300 pl-6 text-right">
          <span className="block text-xs font-semibold text-emerald-800">
            มูลค่ารวม (Total Value)
          </span>
          <div className="flex items-baseline justify-end gap-1">
            <span className="font-display text-xl font-bold text-emerald-700">
              {formatBaht(summary.totalValue)}
            </span>
            <span className="text-xs font-medium text-slate-600">บาท</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SummaryItemProps {
  label: string
  value: string
  divided?: boolean
}

function SummaryItem({ label, value, divided }: SummaryItemProps) {
  return (
    <div className={`text-right ${divided ? 'border-l border-slate-300 pl-6' : ''}`}>
      <span className="block text-xs text-slate-500">{label}</span>
      <span className="text-base font-bold text-slate-800">{value}</span>
    </div>
  )
}
