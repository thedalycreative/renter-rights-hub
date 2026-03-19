export default function Topbar() {
  return (
    <div className="h-[60px] border-b border-sand-3 bg-sand px-7 flex items-center gap-4 flex-shrink-0">
      <span className="font-serif text-[17px] font-semibold text-teal-2">Rights assistant</span>
      <span className="inline-flex items-center gap-1.5 bg-teal-lt text-teal-2 text-[12px] font-medium px-3 py-1 rounded-full border border-teal/15">
        <span className="w-2 h-2 rounded-full bg-teal-md opacity-70" />
        WA Tenancy Act 1987
      </span>
      <div className="ml-auto flex gap-2">
        <button className="btn-ghost text-[12.5px]">New question</button>
        <button className="btn-primary text-[12.5px]">Get template letter</button>
      </div>
    </div>
  )
}
