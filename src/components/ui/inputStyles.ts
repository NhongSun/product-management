export function inputClassName(hasError = false, extra = ''): string {
  return [
    'w-full text-sm px-3 py-2 bg-slate-50 border rounded-lg transition',
    'focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600',
    hasError ? 'border-red-500 bg-red-50/30' : 'border-slate-300',
    extra,
  ].join(' ')
}
