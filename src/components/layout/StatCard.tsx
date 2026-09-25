import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string
  tone?: 'emerald' | 'amber'
}

const toneStyles = {
  emerald: { icon: 'bg-emerald-50 text-emerald-600', value: 'text-slate-800' },
  amber: { icon: 'bg-amber-50 text-amber-600', value: 'text-amber-600' },
}

export function StatCard({ icon: Icon, label, value, tone = 'emerald' }: StatCardProps) {
  const styles = toneStyles[tone]

  return (
    <div className="flex items-center space-x-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
      <div className={`rounded-lg p-2 ${styles.icon}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className={`text-base font-bold ${styles.value}`}>{value}</div>
      </div>
    </div>
  )
}
