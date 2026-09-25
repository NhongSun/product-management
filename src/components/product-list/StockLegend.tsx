export function StockLegend() {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 bg-slate-50 px-5 py-2.5 text-xs text-slate-600">
      <span className="font-medium text-slate-700">เงื่อนไขการแสดงผล:</span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded border border-red-300 bg-red-100" />
        สินค้าหมดสต็อก (Stock = 0)
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="font-bold text-red-600">ตัวหนาสีแดง</span>
        สินค้าใกล้หมด (Stock &lt; 10)
      </span>
    </div>
  )
}
