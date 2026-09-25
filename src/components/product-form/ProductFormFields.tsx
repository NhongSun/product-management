import { CATEGORIES } from '../../types/product'
import { inputClassName } from '../ui/inputStyles'
import { SelectInput } from '../ui/SelectInput'
import { TextInput } from '../ui/TextInput'
import type {
  ProductFormErrors,
  ProductFormValues,
} from '../../utils/validateProduct'
import { FormField } from './FormField'
import { SkuInput } from './SkuInput'

interface ProductFormFieldsProps {
  values: ProductFormValues
  errors: ProductFormErrors
  onChange: (field: keyof ProductFormValues, value: string) => void
  onGenerateSku: () => void
}

export function ProductFormFields({
  values,
  errors,
  onChange,
  onGenerateSku,
}: ProductFormFieldsProps) {
  return (
    <>
      <FormField htmlFor="form-name" label="ชื่อสินค้า" error={errors.name}>
        <TextInput
          id="form-name"
          type="text"
          value={values.name}
          hasError={!!errors.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="เช่น นมจืด, กางเกงยีนส์..."
        />
      </FormField>

      <FormField
        htmlFor="form-sku"
        label="รหัสสินค้า (SKU)"
        hint="(ต้องไม่ซ้ำกัน)"
        error={errors.sku}
      >
        <SkuInput
          value={values.sku}
          hasError={!!errors.sku}
          onChange={(value) => onChange('sku', value)}
          onGenerate={onGenerateSku}
        />
      </FormField>

      <FormField
        htmlFor="form-category"
        label="หมวดหมู่สินค้า"
        error={errors.category}
      >
        <SelectInput
          id="form-category"
          value={values.category}
          onChange={(e) => onChange('category', e.target.value)}
          className={inputClassName(!!errors.category)}
        >
          <option value="">-- กรุณาเลือกหมวดหมู่ --</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </SelectInput>
      </FormField>

      <div className="grid grid-cols-2 gap-3">
        <FormField htmlFor="form-price" label="ราคา (บาท)" error={errors.price}>
          <TextInput
            id="form-price"
            type="number"
            step="0.25"
            min="0"
            value={values.price}
            hasError={!!errors.price}
            onChange={(e) => onChange('price', e.target.value)}
            placeholder="0.00"
          />
        </FormField>
        <FormField
          htmlFor="form-stock"
          label="สต็อกเริ่มต้น"
          error={errors.stock}
        >
          <TextInput
            id="form-stock"
            type="number"
            step="1"
            min="0"
            value={values.stock}
            hasError={!!errors.stock}
            onChange={(e) => onChange('stock', e.target.value)}
            placeholder="0"
          />
        </FormField>
      </div>
    </>
  )
}
