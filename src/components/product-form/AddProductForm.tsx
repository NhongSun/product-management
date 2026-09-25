import type { FormEvent } from 'react'
import { useProductForm } from '../../hooks/useProductForm'
import type { Product } from '../../types/product'
import { FormHeader } from './FormHeader'
import { ProductFormFields } from './ProductFormFields'
import { SmeTip } from './SmeTip'
import { SubmitButton } from './SubmitButton'

interface AddProductFormProps {
  products: Product[]
  onAdd: (product: Omit<Product, 'id' | 'createdAt'>) => void
}

export function AddProductForm({ products, onAdd }: AddProductFormProps) {
  const form = useProductForm(products)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!form.isValid) return

    onAdd(form.toProduct())
    form.reset()
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:col-span-4">
      <FormHeader />
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <ProductFormFields
          values={form.values}
          errors={form.errors}
          onChange={form.setField}
          onGenerateSku={form.generateSku}
        />
        <SubmitButton disabled={!form.isValid} />
      </form>
      <SmeTip />
    </section>
  )
}
