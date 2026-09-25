import { TextInput } from '../ui/TextInput'

interface SkuInputProps {
  value: string
  hasError: boolean
  onChange: (value: string) => void
  onGenerate: () => void
}

export function SkuInput({ value, hasError, onChange, onGenerate }: SkuInputProps) {
  return (
    <div className="flex gap-2">
      <TextInput
        id="form-sku"
        type="text"
        value={value}
        hasError={hasError}
        onChange={(e) => onChange(e.target.value)}
        placeholder="เช่น FD-001, BV-002..."
        className="font-mono uppercase"
      />
      <button
        type="button"
        onClick={onGenerate}
        className="cursor-pointer rounded-lg border border-slate-300 bg-slate-100 px-2.5 py-2 text-xs font-medium whitespace-nowrap text-slate-700 transition hover:bg-slate-200"
      >
        สุ่ม SKU
      </button>
    </div>
  )
}
