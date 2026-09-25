export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-xl font-bold text-white shadow-md">
            FA
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display text-lg font-bold tracking-tight text-slate-900">
                FlowAccount
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                SME Edition
              </span>
            </div>
            <p className="text-xs text-slate-500">
              ระบบจัดการสินค้า (Product Management)
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
