import { useMemo, useState } from 'react'
import type { Category, Product } from '../types/product'
import {
  emptyProductForm,
  validateProduct,
  type ProductFormErrors,
  type ProductFormValues,
} from '../utils/validateProduct'

type Field = keyof ProductFormValues

const SKU_PREFIX: Record<Category, string> = {
  อาหาร: 'FD',
  เครื่องดื่ม: 'BV',
  ของใช้: 'UC',
  เสื้อผ้า: 'CL',
}

export function useProductForm(products: Product[]) {
  const [values, setValues] = useState<ProductFormValues>(emptyProductForm)
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})

  const errors = useMemo(
    () => validateProduct(values, products),
    [values, products],
  )
  const isValid = Object.keys(errors).length === 0

  // Only show an error once the user has interacted with that field
  const visibleErrors: ProductFormErrors = {}
  for (const field of Object.keys(errors) as Field[]) {
    if (touched[field]) visibleErrors[field] = errors[field]
  }

  function setField(field: Field, value: string) {
    setValues((prev) => ({
      ...prev,
      [field]: field === 'sku' ? value.toUpperCase() : value,
    }))
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  function generateSku() {
    const prefix = SKU_PREFIX[values.category as Category] ?? 'SKU'
    const randomNum = Math.floor(100 + Math.random() * 900)
    setField('sku', `${prefix}-${randomNum}`)
  }

  function reset() {
    setValues(emptyProductForm)
    setTouched({})
  }

  function toProduct(): Omit<Product, 'id' | 'createdAt'> {
    return {
      name: values.name.trim(),
      sku: values.sku.trim().toUpperCase(),
      category: values.category as Category,
      price: Number(values.price),
      stock: Number(values.stock),
    }
  }

  return {
    values,
    errors: visibleErrors,
    isValid,
    setField,
    generateSku,
    reset,
    toProduct,
  }
}
