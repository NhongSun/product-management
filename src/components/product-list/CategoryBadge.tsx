import type { Category } from '../../types/product'

const badgeStyles: Record<Category, string> = {
  อาหาร: 'bg-amber-100 text-amber-800 border-amber-200',
  เครื่องดื่ม: 'bg-blue-100 text-blue-800 border-blue-200',
  ของใช้: 'bg-purple-100 text-purple-800 border-purple-200',
  เสื้อผ้า: 'bg-pink-100 text-pink-800 border-pink-200',
}

export function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeStyles[category]}`}
    >
      {category}
    </span>
  )
}
