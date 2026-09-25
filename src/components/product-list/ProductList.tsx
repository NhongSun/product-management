import { useMemo, useState } from 'react'
import {
  ALL_CATEGORIES,
  type CategoryFilterValue,
  type Product,
} from '../../types/product'
import { calcSummary, getFilteredProducts } from '../../utils/productStats'
import { EmptyState } from './EmptyState'
import { ProductSummary } from './ProductSummary'
import { ProductTable } from './ProductTable'
import { ProductToolbar } from './ProductToolbar'

interface ProductListProps {
  products: Product[]
  onSell: (id: string) => void
}

export function ProductList({ products, onSell }: ProductListProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilterValue>(ALL_CATEGORIES)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(
    () => getFilteredProducts(products, selectedCategory, searchQuery),
    [products, selectedCategory, searchQuery],
  )
  const summary = useMemo(
    () => calcSummary(filteredProducts),
    [filteredProducts],
  )

  return (
    <section className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-8">
      <ProductToolbar
        category={selectedCategory}
        onCategoryChange={setSelectedCategory}
        search={searchQuery}
        onSearchChange={setSearchQuery}
      />
      {filteredProducts.length > 0 ? (
        <ProductTable products={filteredProducts} onSell={onSell} />
      ) : (
        <EmptyState />
      )}
      <ProductSummary summary={summary} />
    </section>
  )
}
