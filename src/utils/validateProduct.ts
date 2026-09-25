import type { Product } from '../types/product'

export interface ProductFormValues {
  name: string
  sku: string
  category: string
  price: string
  stock: string
}

export type ProductFormErrors = Partial<Record<keyof ProductFormValues, string>>

export const emptyProductForm: ProductFormValues = {
  name: '',
  sku: '',
  category: '',
  price: '',
  stock: '',
}

export function validateProduct(
  values: ProductFormValues,
  products: Product[],
): ProductFormErrors {
  const errors: ProductFormErrors = {}
  const name = values.name.trim()
  const sku = values.sku.trim().toUpperCase()
  const price = Number(values.price)
  const stock = Number(values.stock)

  if (name.length < 3) {
    errors.name = 'ชื่อสินค้าต้องมีอย่างน้อย 3 ตัวอักษร'
  }

  if (!sku) {
    errors.sku = 'กรุณากรอก SKU'
  } else if (products.some((p) => p.sku.toUpperCase() === sku)) {
    errors.sku = `รหัส SKU "${sku}" ซ้ำกับสินค้าที่มีอยู่แล้ว`
  }

  if (!values.category) {
    errors.category = 'กรุณาเลือกหมวดหมู่สินค้า'
  }

  if (values.price === '' || Number.isNaN(price) || price <= 0) {
    errors.price = 'ราคาต้องมากกว่า 0 บาท'
  }

  if (
    values.stock === '' ||
    Number.isNaN(stock) ||
    !Number.isInteger(stock) ||
    stock < 0
  ) {
    errors.stock = 'สต็อกต้องเป็นจำนวนเต็มและไม่ติดลบ (>= 0)'
  }

  return errors
}
