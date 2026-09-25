import {
  ALL_CATEGORIES,
  LOW_STOCK_THRESHOLD,
  type CategoryFilterValue,
  type Product,
} from '../types/product'

export function getFilteredProducts(
  products: Product[],
  selectedCategory: CategoryFilterValue,
  searchQuery = '',
): Product[] {
  const query = searchQuery.trim().toLowerCase()

  return products.filter((product) => {
    const matchesCategory =
      selectedCategory === ALL_CATEGORIES ||
      product.category === selectedCategory
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })
}

export interface ProductSummary {
  count: number
  totalStock: number
  totalValue: number
}

// Total Value = sum of (price × stock)
export function calcSummary(products: Product[]): ProductSummary {
  return products.reduce<ProductSummary>(
    (acc, product) => ({
      count: acc.count + 1,
      totalStock: acc.totalStock + product.stock,
      totalValue: acc.totalValue + product.price * product.stock,
    }),
    { count: 0, totalStock: 0, totalValue: 0 },
  )
}

export function countLowStock(products: Product[]): number {
  return products.filter((product) => product.stock < LOW_STOCK_THRESHOLD)
    .length
}
