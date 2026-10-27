const sweets = ["باقلوا", "گز", "قطاب", "سوهان"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6EFE2] text-[#0E5955]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-12">
        <a href="/" className="text-2xl font-black tracking-tight">
          شیرین‌خانه<span className="text-[#D8AC62]">.</span>
        </a>

        <nav
          aria-label="منوی اصلی"
          className="hidden items-center gap-9 text-sm font-medium md:flex"
        >
          <a href="#story" className="hover:text-[#B86B61]">
            داستان ما
          </a>
          <a href="#collection" className="hover:text-[#B86B61]">
            شیرینی‌ها
          </a>
        </nav>

        <a
          href="#collection"
          className="rounded-full border border-[#0E5955]/30 px-5 py-2 text-sm transition hover:bg-[#0E5955] hover:text-[#F6EFE2]"
        >
          کشف محصولات
        </a>
      </header>

      <section
        id="story"
        className="relative isolate mx-auto flex min-h-[760px] max-w-[1600px] flex-col overflow-hidden px-6 pb-14 pt-16 md:min-h-[850px] md:px-12"
      >
        {/* Editorial heading */}
        <div className="relative z-20 flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.22em] text-[#B86B61]">
              THE ART OF PERSIAN SWEETS
            </span>
            <p className="mt-3 text-sm text-[#704532]">
              اصالت ایرانی، به روایت طعم
            </p>
          </div>

          <span className="text-xs text-[#704532]">COLLECTION / 001</span>
        </div>

        {/* Large typography behind the product */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[24%] z-0 flex justify-center md:top-[17%]"
        >
          <span className="whitespace-nowrap text-[clamp(5rem,17vw,17rem)] font-black leading-none tracking-[-0.08em] text-[#0E5955]/12">
            شیرین‌خانه
          </span>
        </div>

        {/* Main product visual */}
        <div className="relative z-10 flex min-h-[480px] flex-1 items-center justify-center md:min-h-[570px]">
          <div className="absolute h-[300px] w-[300px] rounded-full bg-[#D8AC62]/10 blur-3xl md:h-[500px] md:w-[500px]" />

          <div className="relative h-[360px] w-full max-w-[680px] md:h-[570px]">
            <img
              src="/images/baklava-hero.png"
              alt="باقلوا ایرانی با مغز پسته"
              className="h-full w-full object-contain drop-shadow-[0_35px_35px_rgba(70,45,20,0.20)]"
            />
          </div>

          {/* Small editorial details */}
          <div className="absolute bottom-10 right-0 z-20 md:bottom-20">
            <span className="block text-xs tracking-[0.2em] text-[#B86B61]">
              01 / BAKLAVA
            </span>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">باقلوا</h1>
            <p className="mt-3 max-w-[190px] text-sm leading-7 text-[#704532]">
              لایه‌هایی از هنر، پسته و عطر گلاب
            </p>
          </div>

          <div className="absolute bottom-10 left-0 z-20 hidden text-left md:bottom-20 md:block">
            <span className="text-xs tracking-[0.2em] text-[#704532]">
              PERSIAN HERITAGE
            </span>
            <p className="mt-2 text-sm text-[#704532]">
              Crafted with tradition
            </p>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="relative z-20 flex items-end justify-between gap-4 border-t border-[#0E5955]/20 pt-6">
          <a
            href="#collection"
            className="inline-flex items-center gap-3 text-sm font-bold text-[#0E5955] transition hover:text-[#B86B61]"
          >
            کشف مجموعه شیرینی‌ها
            <span aria-hidden="true">↙</span>
          </a>

          <span className="hidden text-xs tracking-[0.18em] text-[#704532] md:block">
            SCROLL TO EXPLORE
          </span>
        </div>
      </section>

      <section
        id="collection"
        className="border-t border-[#0E5955]/15 bg-[#F6EFE2] px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#B86B61]">
            THE COLLECTION
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            طعم‌هایی برای کشف کردن
          </h2>
          <p className="mt-5 text-sm leading-8 text-[#704532]">
            به‌زودی داستان سه‌بعدی هر شیرینی را از مواد اولیه تا آماده‌شدن تجربه
            می‌کنید.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {sweets.map((sweet, index) => (
              <article
                key={sweet}
                className="group flex min-h-48 flex-col justify-between rounded-2xl border border-[#0E5955]/15 p-6 transition hover:-translate-y-1 hover:border-[#D8AC62] md:min-h-60"
              >
                <span className="text-xs text-[#B86B61]">0{index + 1}</span>
                <h3 className="text-2xl font-black md:text-3xl">{sweet}</h3>
                <span className="text-xs text-[#704532]">
                  داستان این شیرینی به‌زودی...
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#0E5955]/15 px-6 py-8 text-center text-xs text-[#704532]">
        شیرین‌خانه — روایتی نو از شیرینی‌های اصیل ایرانی
      </footer>
    </main>
  );
}
