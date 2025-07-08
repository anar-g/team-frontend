export function BgElement() {
  return (
    <>
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-gradient-to-bl from-blue-100/20 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-100/20 via-transparent to-transparent blur-3xl"></div>

      {/* Geometric Patterns */}
      <div className="absolute top-20 left-10 h-32 w-32 rotate-12 animate-pulse rounded-lg border border-blue-200/30"></div>
      <div className="absolute right-20 bottom-40 h-24 w-24 animate-bounce rounded-full border border-purple-200/30"></div>
    </>
  )
}
