import { Search } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative w-full sm:w-64">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="ค้นหาชื่อสินค้า หรือ SKU..."
        aria-label="ค้นหาสินค้า"
        className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pr-3.5 pl-9 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100"
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
        <Search className="h-4 w-4" />
      </div>
    </div>
  )
}
