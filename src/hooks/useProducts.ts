import { useState } from 'react'
import { mockProducts } from '../data/mockProducts'
import type { Product } from '../types/product'

export type SellResult =
  { ok: true; product: Product } | { ok: false; product?: Product }

export function useProducts(initialProducts: Product[] = mockProducts) {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  function sellProduct(id: string): SellResult {
    const product = products.find((p) => p.id === id)
    if (!product || product.stock <= 0) return { ok: false, product }

    const updated = { ...product, stock: product.stock - 1 }
    setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)))
    return { ok: true, product: updated }
  }

  function addProduct(product: Omit<Product, 'id' | 'createdAt'>): Product {
    const newProduct: Product = {
      ...product,
      id: `prod_${Date.now()}`,
      createdAt: new Date(),
    }
    setProducts((prev) => [...prev, newProduct])
    return newProduct
  }

  return { products, sellProduct, addProduct }
}
