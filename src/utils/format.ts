export function formatBaht(value: number): string {
  return value.toLocaleString('th-TH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function formatNumber(value: number): string {
  return value.toLocaleString('th-TH')
}
