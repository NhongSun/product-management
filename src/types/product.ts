export const CATEGORIES = [
  'อาหาร',
  'เครื่องดื่ม',
  'ของใช้',
  'เสื้อผ้า',
] as const

export type Category = (typeof CATEGORIES)[number]

export const ALL_CATEGORIES = 'ทั้งหมด'

export type CategoryFilterValue = Category | typeof ALL_CATEGORIES

export interface Product {
  id: string
  name: string
  sku: string
  price: number
  stock: number
  category: Category
  createdAt: Date
}

export const LOW_STOCK_THRESHOLD = 10
