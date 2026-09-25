import type { Product } from '../../types/product'
import { ProductRow } from './ProductRow'

interface ProductTableProps {
  products: Product[]
  onSell: (id: string) => void
}

const columns = [
  { label: 'รหัสสินค้า (SKU)', align: 'text-left' },
  { label: 'ชื่อสินค้า', align: 'text-left' },
  { label: 'หมวดหมู่', align: 'text-center' },
  { label: 'ราคา (บาท)', align: 'text-right' },
  { label: 'สต็อก (ชิ้น)', align: 'text-center' },
  { label: 'การจัดการ', align: 'text-center' },
]

export function ProductTable({ products, onSell }: ProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-slate-300 text-left text-sm">
        <thead className="bg-flow-header font-display text-xs font-semibold tracking-wider text-white uppercase">
          <tr>
            {columns.map((column) => (
              <th
                key={column.label}
                scope="col"
                className={`border border-slate-200 px-4 py-3 ${column.align}`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {products.map((product) => (
            <ProductRow key={product.id} product={product} onSell={onSell} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
