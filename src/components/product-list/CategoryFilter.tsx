import { Filter } from 'lucide-react'
import {
  ALL_CATEGORIES,
  CATEGORIES,
  type CategoryFilterValue,
} from '../../types/product'
import { SelectInput } from '../ui/SelectInput'

interface CategoryFilterProps {
  value: CategoryFilterValue
  onChange: (value: CategoryFilterValue) => void
}

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div className="flex w-full items-center space-x-3 sm:w-auto">
      <label
        htmlFor="category-filter"
        className="flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap text-slate-700"
      >
        <Filter className="h-4 w-4 text-emerald-600" />
        หมวดหมู่:
      </label>
      <SelectInput
        id="category-filter"
        value={value}
        onChange={(e) => onChange(e.target.value as CategoryFilterValue)}
        wrapperClassName="w-full sm:w-56"
        className="rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 font-medium text-slate-800 hover:border-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100"
      >
        <option value={ALL_CATEGORIES}>ทั้งหมด (All Categories)</option>
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </SelectInput>
    </div>
  )
}
