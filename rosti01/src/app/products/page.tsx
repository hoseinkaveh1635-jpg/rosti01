import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen" style={{backgroundColor: '#F5ECD7'}}>
      <header className="sticky top-0 z-50 shadow-sm" style={{backgroundColor: '#5C1A1A'}}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/logo.jpg" alt="روستی" width={60} height={60} style={{objectFit: 'cover', borderRadius: '50%'}} />
          <nav className="flex gap-6 font-medium" style={{color: '#F0DDB0'}}>
            <a href="/" className="hover:opacity-80">خانه</a>
            <a href="/products" className="hover:opacity-80">محصولات</a>
            <a href="/about" className="hover:opacity-80">درباره ما</a>
            <a href="/contact" className="hover:opacity-80">تماس</a>
          </nav>
        </div>
      </header>

      <section className="py-32 text-center" style={{background: 'linear-gradient(160deg, #8B1A1A 0%, #C1440E 25%, #D4823A 50%, #7B4F8C 75%, #3D2B1F 100%)'}}>
        <h2 className="text-5xl font-bold mb-4" style={{color: '#F5ECD7'}}>ظروف سرامیکی دست‌ساز</h2>
        <p className="text-xl mb-8" style={{color: '#E8C97A'}}>هنر اصیل ایرانی در خانه شما</p>
        <a href="/products" className="px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition" style={{backgroundColor: '#E8C97A', color: '#3D2B1F'}}>
          مشاهده محصولات
        </a>
      </section>

      <section id="products" className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12" style={{color: '#5C1A1A'}}>محصولات ما</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "کاسه سفالی", emoji: "🥣", color: '#8B1A1A' },
            { name: "گلدان سرامیکی", emoji: "🏺", color: '#7B4F8C' },
            { name: "بشقاب دست‌ساز", emoji: "🍽️", color: '#C1440E' },
          ].map((p, i) => (
            <div key={i} className="rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition" style={{backgroundColor: '#FDF6EC', borderTop: `4px solid ${p.color}`}}>
              <div className="text-6xl mb-4">{p.emoji}</div>
              <h4 className="text-xl font-bold mb-4" style={{color: '#3D2B1F'}}>{p.name}</h4>
              <button className="px-6 py-2 rounded-full hover:opacity-90 transition text-white" style={{backgroundColor: p.color}}>
                تماس برای خرید
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-8" style={{backgroundColor: '#3D2B1F', color: '#E8C97A'}}>
        <p>© ۱۴۰۴ رستی — تمامی حقوق محفوظ است</p>
      </footer>
    </main>
  );
}