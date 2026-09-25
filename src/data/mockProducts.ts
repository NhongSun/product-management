import type { Product } from '../types/product'

export const mockProducts: Product[] = [
  {
    id: 'prod_1',
    name: 'ข้าวผัด',
    sku: 'FD-001',
    price: 45,
    stock: 20,
    category: 'อาหาร',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: 'prod_2',
    name: 'น้ำส้ม',
    sku: 'BV-001',
    price: 25,
    stock: 50,
    category: 'เครื่องดื่ม',
    createdAt: new Date('2024-01-12'),
  },
  {
    id: 'prod_3',
    name: 'สบู่',
    sku: 'UC-001',
    price: 35,
    stock: 0,
    category: 'ของใช้',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'prod_4',
    name: 'เสื้อยืด',
    sku: 'CL-001',
    price: 299,
    stock: 5,
    category: 'เสื้อผ้า',
    createdAt: new Date('2024-01-18'),
  },
]
