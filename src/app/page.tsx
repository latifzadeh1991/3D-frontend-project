const sweets = [
  { number: "01", name: "باقلوا", description: "لایه‌هایی از هنر، پسته و عطر گلاب", image: "/images/baklava-hero.png", featured: true },
  { number: "02", name: "گز", description: "شیرینی اصیل با مغز پسته", image: "/images/gaz.png" },
  { number: "03", name: "قطاب", description: "نرم و لطیف، با مغز خوش‌عطر", image: "/images/qottab.png" },
  { number: "04", name: "سوهان", description: "طلایی، ترد و سنتی", image: "/images/sohan.png" },
];

export default function Home() {
  return (
    <main dir="rtl" className="shirin-page min-h-screen overflow-hidden">
      <header className="shirin-header mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <a href="#" className="brand" aria-label="شیرین‌خانه، صفحه اصلی">
          شیرین‌خانه<span>.</span>
        </a>
        <nav aria-label="منوی اصلی" className="hidden items-center gap-8 text-sm md:flex">
          <a href="#story">داستان ما</a>
          <a href="#collection">شیرینی‌ها</a>
          <a href="#collection">فروشگاه</a>
          <a href="#footer">تماس با ما</a>
        </nav>
        <a href="#collection" className="outline-pill">کشف محصولات <span aria-hidden="true">↙</span></a>
      </header>

      <section id="story" className="hero-shell mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="hero-topline">
          <div>
            <p className="eyebrow">THE ART OF PERSIAN SWEETS</p>
            <p className="small-persian">اصالت ایرانی، به روایت طعم</p>
          </div>
          <span className="eyebrow collection-number">COLLECTION / 001</span>
        </div>

        <div className="hero-stage">
          <div className="hero-watermark" aria-hidden="true">شیرین‌خانه</div>
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-product">
            <img src="/images/baklava-hero.png" alt="باقلوا تبریزی با لایه‌های طلایی و مغز پسته" />
          </div>
          <div className="floating-nut nut-one" aria-hidden="true">✦</div>
          <div className="floating-nut nut-two" aria-hidden="true">✧</div>
          <div className="hero-caption">
            <span className="eyebrow">01 / BAKLAVA</span>
            <h1>باقلوا</h1>
            <p>لایه‌هایی از هنر، پسته و عطر گلاب</p>
            <a className="solid-pill" href="#collection">کشف مجموعه <span aria-hidden="true">←</span></a>
          </div>
          <div className="heritage-note">
            <span className="eyebrow">PERSIAN HERITAGE</span>
            <p>Crafted with tradition</p>
          </div>
        </div>

        <div className="hero-bottomline">
          <a href="#collection" className="text-link">کشف مجموعه شیرینی‌ها <span aria-hidden="true">←</span></a>
          <span className="scroll-hint"><span className="mouse-icon" /> SCROLL TO EXPLORE</span>
        </div>
      </section>

      <section id="collection" className="collection-section px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="collection-heading">
            <p className="eyebrow">THE COLLECTION</p>
            <h2>طعم‌هایی برای کشف کردن</h2>
            <p className="collection-description">به‌زودی داستان سه‌بعدی هر شیرینی را از مواد اولیه تا آماده‌شدن تجربه می‌کنید.</p>
          </div>

          <div className="sweet-grid">
            {sweets.map((sweet) => (
              <a href="#story" key={sweet.number} className={`sweet-card ${sweet.featured ? "sweet-card-featured" : ""}`}>
                <div className="sweet-card-top">
                  <span className="sweet-number">{sweet.number}</span>
                  <span className="card-arrow" aria-hidden="true">↙</span>
                </div>
                <div className="sweet-image-wrap">
                  <img src={sweet.image} alt={sweet.name} loading={sweet.featured ? "eager" : "lazy"} />
                </div>
                <div className="sweet-card-copy">
                  <h3>{sweet.name}</h3>
                  <p>{sweet.description}</p>
                  <span className="details-link">مشاهده جزئیات <span aria-hidden="true">←</span></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="footer" className="shirin-footer px-5 py-7 md:px-10">
        <span className="footer-ornament" aria-hidden="true">❧</span>
        <p>شیرین‌خانه — روایتی نو از شیرینی‌های اصیل ایرانی</p>
        <span className="footer-subtitle">با عشق، از ایران</span>
      </footer>
    </main>
  );
}
