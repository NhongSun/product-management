import { LOW_STOCK_THRESHOLD, type Product } from '../../types/product'
import { formatBaht, formatNumber } from '../../utils/format'
import { CategoryBadge } from './CategoryBadge'
import { SellButton } from './SellButton'

interface ProductRowProps {
  product: Product
  onSell: (id: string) => void
}

const cell = 'border border-slate-200 px-4 py-3'

export function ProductRow({ product, onSell }: ProductRowProps) {
  const isOutOfStock = product.stock === 0
  const isLowStock = product.stock < LOW_STOCK_THRESHOLD

  return (
    <tr
      className={`transition-colors ${
        isOutOfStock ? 'bg-red-100 hover:bg-red-200' : 'hover:bg-slate-50'
      }`}
    >
      <td
        className={`${cell} font-mono font-medium whitespace-nowrap text-slate-900`}
      >
        {product.sku}
      </td>
      <td className={`${cell} font-medium text-slate-900`}>
        <div className="flex items-center space-x-2">
          <span>{product.name}</span>
          {isOutOfStock && (
            <span className="rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
              หมด
            </span>
          )}
        </div>
      </td>
      <td className={`${cell} text-center whitespace-nowrap`}>
        <CategoryBadge category={product.category} />
      </td>
      <td
        className={`${cell} text-right font-mono font-semibold whitespace-nowrap text-slate-800`}
      >
        ฿{formatBaht(product.price)}
      </td>
      <td className={`${cell} text-center whitespace-nowrap`}>
        <span
          className={`text-sm ${
            isLowStock ? 'font-bold text-red-600' : 'font-medium text-slate-700'
          }`}
        >
          {formatNumber(product.stock)}
        </span>
      </td>
      <td className={`${cell} text-center whitespace-nowrap`}>
        <SellButton
          disabled={isOutOfStock}
          onClick={() => onSell(product.id)}
        />
      </td>
    </tr>
  )
}
