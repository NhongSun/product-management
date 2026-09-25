import type { CategoryFilterValue } from '../../types/product'
import { CategoryFilter } from './CategoryFilter'
import { SearchInput } from './SearchInput'

interface ProductToolbarProps {
  category: CategoryFilterValue
  onCategoryChange: (value: CategoryFilterValue) => void
  search: string
  onSearchChange: (value: string) => void
}

export function ProductToolbar({
  category,
  onCategoryChange,
  search,
  onSearchChange,
}: ProductToolbarProps) {
  return (
    <div className="flex flex-col justify-between gap-4 border-b border-slate-200 bg-white p-5 sm:flex-row sm:items-center">
      <CategoryFilter value={category} onChange={onCategoryChange} />
      <SearchInput value={search} onChange={onSearchChange} />
    </div>
  )
}
