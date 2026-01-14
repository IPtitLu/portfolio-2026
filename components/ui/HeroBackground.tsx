'use client'

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full 
                   bg-[#A3BFFA]/60 blur-3xl"
      />
      <div
        className="absolute bottom-[-200px] right-1/4 w-[700px] h-[700px] rounded-full 
                   bg-[#C9B3F5]/50 blur-3xl"
      />
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full 
                   bg-[#FFAC3B]/40 blur-3xl"
      />
    </div>
  )
}
