import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen" style={{backgroundColor: '#F5ECD7'}}>
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-sm" style={{backgroundColor: '#F5ECD7', borderBottom: '1px solid #D4B896'}}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Image src="/logo.jpg" alt="روستی" width={60} height={60} style={{objectFit: 'cover', borderRadius: '50%'}} />
          <nav className="flex gap-6 font-medium" style={{color: '#5C1A1A'}}>
            <a href="/" className="hover:opacity-70">خانه</a>
            <a href="/products" className="hover:opacity-70">محصولات</a>
            <a href="/about" className="hover:opacity-70">درباره ما</a>
            <a href="/contact" className="hover:opacity-70">تماس</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-20" style={{backgroundColor: '#F5ECD7'}}>
        <Image src="/koze.png" alt="کوزه روستی" width={400} height={400} style={{objectFit: 'contain'}} />
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12" style={{color: '#5C1A1A'}}>محصولات ما</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "کاسه سفالی", emoji: "🥣", color: '#8B1A1A' },
            { name: "گلدان سرامیکی", emoji: "🏺", color: '#7B4F8C' },
            { name: "بشقاب دست‌ساز", emoji: "🍽️", color: '#C1440E' },
          ].map((p, i) => (
            <div key={i} className="round