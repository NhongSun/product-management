import { useMemo } from 'react'
import { AppFooter } from './components/layout/AppFooter'
import { AppHeader } from './components/layout/AppHeader'
import { PageHeader } from './components/layout/PageHeader'
import { AddProductForm } from './components/product-form/AddProductForm'
import { ProductList } from './components/product-list/ProductList'
import { ToastContainer } from './components/ui/ToastContainer'
import { useProducts } from './hooks/useProducts'
import { useToast } from './hooks/useToast'
import type { Product } from './types/product'
import { calcSummary, countLowStock } from './utils/productStats'

function App() {
  const { products, sellProduct, addProduct } = useProducts()
  const { toasts, showToast, dismissToast } = useToast()

  const overall = useMemo(
    () => ({ ...calcSummary(products), lowStock: countLowStock(products) }),
    [products],
  )

  function handleSell(id: string) {
    const result = sellProduct(id)
    if (result.ok) {
      showToast(
        `ขายสินค้า "${result.product.name}" สำเร็จ 1 ชิ้น (คงเหลือ ${result.product.stock} ชิ้น)`,
      )
    } else {
      showToast(
        `สินค้า "${result.product?.name ?? ''}" หมดสต็อกแล้ว ไม่สามารถขายได้`,
        'error',
      )
    }
  }

  function handleAdd(product: Omit<Product, 'id' | 'createdAt'>) {
    addProduct(product)
    showToast(`เพิ่มสินค้า "${product.name}" (SKU: ${product.sku}) เรียบร้อยแล้ว`)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          totalItems={overall.count}
          totalStock={overall.totalStock}
          lowStockCount={overall.lowStock}
        />
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <ProductList products={products} onSell={handleSell} />
          <AddProductForm products={products} onAdd={handleAdd} />
        </div>
      </main>

      <AppFooter />
    </div>
  )
}

export default App
