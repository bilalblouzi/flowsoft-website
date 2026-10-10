import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import "./Home.css";


const content = {
  ar: {
    direction: "rtl",
    langButton: "EN",
    nav: ["الرئيسية", "برامجنا", "تعرف علينا", "طلب مشروع", "تواصل معنا"],
    badge: "حلول برمجية تصنع الفرق",
    heroTitle: "نحوّل أفكارك",
    heroAccent: "إلى حلول ذكية",
    heroDescription:
      "تطوّر FlowSoft برامج عملية تجمع بين سهولة الاستخدام والتصميم الحديث، لمساعدة المؤسسات والأفراد على تنظيم أعمالهم وتحقيق نتائج أفضل.",
    primaryButton: "اكتشف برامجنا",
    secondaryButton: "تعرّف علينا",
    subHeroCheck: "حلول عملية، وتجربة استخدام واضحة.",
    miniLabel: "ابتكار رقمي",
    miniTitle: "تقنية تخدم أهدافك",
    miniDescription: "حلول عملية، وتجربة استخدام واضحة.",
    badgeLeft: "FlowSoft ✦",
    badgeRight: "✓ ابتكار رقمي",

    stats: [
      { value: "01", label: "حلول برمجية" },
      { value: "24/7", label: "الوصول إلى معلومات الموقع" },
      { value: "∞", label: "أفكار قابلة للتطوير" },
    ],

    // Programs Summary
    programsEyebrow: "منتجاتنا البرمجية",
    programsTitle: "حلول عملية،",
    programsAccent: "لأعمال أكثر ذكاءً",
    programsDescription:
      "نطور حلولاً برمجية ذكية تلبي الاحتياجات الفعلية للمؤسسات والأفراد.",
    viewAllPrograms: "عرض جميع البرامج",
    weeklyPlannerName: "WeeklyPlannerApp",
    weeklyPlannerCat: "التنظيم والإنتاجية",
    weeklyPlannerDesc: "مخطط أسبوعي مكتبي بسيط وفعال لإدارة المهام والأهداف والعادات.",
    ledgerName: "General Ledger",
    ledgerCat: "التعليم والتدريس",
    ledgerDesc: "دفتر الأستاذ الرقمي المخصص للأستاذ لإدارة الدروس والتقييمات والأفواج.",
    available: "متاح",
    development: "قيد التطوير",
    details: "اكتشف البرنامج",
    comingSoon: "قريبًا",

    // About Summary
    aboutEyebrow: "من نحن",
    aboutTitle: "التقنية يجب أن تجعل العمل",
    aboutAccent: "أسهل، لا أعقد.",
    aboutDescription:
      "في FlowSoft نركز على تطوير برامج واضحة وعملية مع الاهتمام بالتفاصيل وتجربة المستخدم السلسة.",
    aboutMoreBtn: "تعرف على رؤيتنا وقيمنا",
    benefits: [
      { number: "01", title: "سهولة الاستخدام", description: "واجهات واضحة تقلل التعقيد وتوفر الوقت." },
      { number: "02", title: "تصميم حديث", description: "تجربة بصرية مريحة ومتناسقة على مختلف الشاشات." },
      { number: "03", title: "حلول عملية", description: "نركز على الاحتياجات الحقيقية دون إضافات زجهزة." },
      { number: "04", title: "تطوير مستمر", description: "قابلية تحسين المنتجات وتوسيع إمكاناتها دائماً." },
    ],

    // Request Summary
    requestEyebrow: "خدمات مخصصة",
    requestTitle: "هل لديك فكرة مشروع خاص؟",
    requestDescription: "نساعدك في تحويل فكرتك أو نظامك المطلوب إلى تطبيق عملي ومصمم بخصائص تلائم عملك تماماً.",
    requestBtn: "اطلب مشروعك الآن",

    // Contact Summary
    contactEyebrow: "تواصل معنا",
    contactTitle: "لنتواصل ونناقش أفكارك",
    contactDescription: "يسعدنا استقبال استفساراتك واقتراحاتك، أو إطلاعك على الخبرات والمهارات البرمجية المتاحة.",
    contactBtn: "صفحة التواصل والسيرة الذاتية",

    footerDescription: "حلول برمجية ذكية تجعل العمل أسهل.",
    rights: "جميع الحقوق محفوظة.",
    backTop: "العودة إلى الأعلى",
  },

  en: {
    direction: "ltr",
    langButton: "ع",
    nav: ["Home", "Programs", "Get to know us", "Request Project", "Contact Us"],
    badge: "Software solutions that make a difference",
    heroTitle: "We turn your ideas",
    heroAccent: "into smart solutions",
    heroDescription:
      "FlowSoft develops practical software combining simplicity and modern design to help businesses and individuals succeed.",
    primaryButton: "Explore our programs",
    secondaryButton: "About FlowSoft",
    subHeroCheck: "Practical solutions, clear user experience.",
    miniLabel: "Digital innovation",
    miniTitle: "Technology with purpose",
    miniDescription: "Practical solutions, clear user experience.",
    badgeLeft: "FlowSoft ✦",
    badgeRight: "✓ Digital Innovation",

    stats: [
      { value: "01", label: "Software Solutions" },
      { value: "24/7", label: "Website Info Access" },
      { value: "∞", label: "Scalable Ideas" },
    ],

    programsEyebrow: "Our Products",
    programsTitle: "Practical tools,",
    programsAccent: "smarter work",
    programsDescription:
      "We build software solutions tailored to actual user needs.",
    viewAllPrograms: "View all programs",
    weeklyPlannerName: "WeeklyPlannerApp",
    weeklyPlannerCat: "Organization & Productivity",
    weeklyPlannerDesc: "A simple and effective desktop planner for tasks, goals, and habits.",
    ledgerName: "General Ledger",
    ledgerCat: "Education & Teaching",
    ledgerDesc: "A digital gradebook and ledger for teachers to manage classes and grades.",
    available: "Available",
    development: "In development",
    details: "Explore program",
    comingSoon: "Coming soon",

    aboutEyebrow: "About Us",
    aboutTitle: "Technology should make work",
    aboutAccent: "easier, not harder.",
    aboutDescription:
      "At FlowSoft, we focus on building practical software with thoughtful user experiences.",
    aboutMoreBtn: "Learn more about us",
    benefits: [
      { number: "01", title: "Easy to use", description: "Clear interfaces that save time and eliminate complexity." },
      { number: "02", title: "Modern design", description: "A clean, consistent visual experience across devices." },
      { number: "03", title: "Practical solutions", description: "We focus strictly on real-world requirements." },
      { number: "04", title: "Continuous development", description: "Scalable applications designed to improve over time." },
    ],

    requestEyebrow: "Custom Services",
    requestTitle: "Have a custom project idea?",
    requestDescription: "We help turn your unique requirements into fully functional custom software.",
    requestBtn: "Request Your Project Now",

    contactEyebrow: "Get In Touch",
    contactTitle: "Let's discuss your ideas",
    contactDescription: "We welcome your inquiries or viewing our technical competencies and skills.",
    contactBtn: "Contact & Resume Page",

    footerDescription: "Smart software solutions that make work easier.",
    rights: "All rights reserved.",
    backTop: "Back to top",
  },
};

function Brand() {
  return (
    <Link to="/" className="home-brand" aria-label="FlowSoft home">
      <img src="/images/flowsoft-logo.png" alt="" className="home-brand-logo" />
      <span className="home-brand-copy">
        <strong>FlowSoft</strong>
        <small>SMART SOFTWARE SOLUTIONS</small>
      </span>
    </Link>
  );
}

export default function Home() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("flowsoft_lang") || "ar";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = content[language];
  const isArabic = language === "ar";
  
const pageTitle = isArabic
  ? "FlowSoft | حلول برمجية ذكية"
  : "FlowSoft | Smart Software Solutions";

const pageDescription = isArabic
  ? "اكتشف حلول FlowSoft البرمجية لتنظيم الملفات وإدارة الأعمال. تعرّف على برامجنا واطلب مشروعك البرمجي القادم."
  : "Discover FlowSoft software solutions for file organization and business management. Explore our products and request your next software project.";


  function toggleLanguage() {
    setLanguage((current) => {
      const newLang = current === "ar" ? "en" : "ar";
      localStorage.setItem("flowsoft_lang", newLang);
      return newLang;
    });
  }


return (
  <>
    <PageMeta
      title={pageTitle}
      description={pageDescription}
    />

    <div
      className={`home-page ${isArabic ? "home-ar" : "home-en"}`}
      dir={t.direction}
      lang={language}
    >
      {/* HEADER */}
      <header className="home-header">
        <div className="home-header-inner">
          <Brand />

          {/* القائمة العادية للشاشات الكبيرة */}
          <nav className="home-nav" aria-label="Main navigation">
            <Link to="/" className="active">{t.nav[0]}</Link>
            <Link to="/programs">{t.nav[1]}</Link>
            <Link to="/about">{t.nav[2]}</Link>
            <Link to="/request">{t.nav[3]}</Link>
            <Link to="/contact">{t.nav[4]}</Link>
          </nav>

          <div className="home-header-actions-mobile">
            <button
              className="home-language-button"
              type="button"
              onClick={toggleLanguage}
              aria-label="Switch language"
            >
              {t.langButton}
            </button>

            {/* زر القائمة للهواتف */}
            <button
              className="mobile-menu-toggle"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* قائمة الهاتف المنسدلة */}
        {isMenuOpen && (
          <div className="mobile-dropdown-menu">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="active">{t.nav[0]}</Link>
            <Link to="/programs" onClick={() => setIsMenuOpen(false)}>{t.nav[1]}</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t.nav[2]}</Link>
            <Link to="/request" onClick={() => setIsMenuOpen(false)}>{t.nav[3]}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t.nav[4]}</Link>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="home-hero" id="home">
          <div className="home-hero-glow home-glow-one" />
          <div className="home-hero-glow home-glow-two" />

          <div className="home-container home-hero-layout">
            {/* البطاقة البصرية المبهرة على اليسار مع الـ Mockup والبادجات */}
            <div className="home-visual">
              <div className="dashboard-visual-wrapper floating-card">
                
                {/* Floating Badge Left */}
                <div className="floating-badge badge-top-left">
                  {t.badgeLeft}
                </div>

                {/* Floating Badge Right */}
                <div className="floating-badge badge-bottom-right">
                  {t.badgeRight}
                </div>

                {/* Main Card */}
                <div className="home-visual-card">
                  <div className="home-visual-card-header">
                    <div>
                      <span className="home-visual-label">{t.miniLabel}</span>
                      <h2>{t.miniTitle}</h2>
                    </div>
                    <div className="home-visual-mark">F</div>
                  </div>

                  {/* UI Window Simulation */}
                  <div className="ui-window-mockup">
                    <div className="ui-window-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>

                    <div className="ui-mockup-body">
                      <div className="ui-sidebar">
                        <div className="ui-circle-item"></div>
                        <div className="ui-circle-item"></div>
                        <div className="ui-circle-item"></div>
                      </div>

                      <div className="ui-main-content">
                        <div className="ui-header-bar"></div>
                        <div className="ui-cards-row">
                          <div className="ui-card-skeleton">
                            <div className="ui-line-short"></div>
                            <div className="ui-line-long"></div>
                          </div>
                          <div className="ui-card-skeleton">
                            <div className="ui-line-short"></div>
                            <div className="ui-line-long"></div>
                          </div>
                        </div>

                        {/* Chart Bars */}
                        <div className="ui-chart-bars">
                          <div className="bar bar-1"></div>
                          <div className="bar bar-2"></div>
                          <div className="bar bar-3"></div>
                          <div className="bar bar-4"></div>
                          <div className="bar bar-5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="home-visual-caption">
                    <span className="home-caption-pulse" />
                    {t.miniDescription}
                  </div>
                </div>

              </div>
            </div>

            {/* الجانب الأيمن للنص والعناوين */}
            <div className="home-hero-copy">
              <div className="home-eyebrow">
                <span className="home-eyebrow-dot" />
                {t.badge}
              </div>

              <h1>
                {t.heroTitle} <span>{t.heroAccent}</span>
              </h1>

              <p className="home-hero-description">{t.heroDescription}</p>

              <div className="home-hero-actions">
                <Link to="/programs" className="home-button-primary">
                  {t.primaryButton} <span aria-hidden="true">↗</span>
                </Link>

                <Link to="/about" className="home-button-secondary">
                  {t.secondaryButton} <span aria-hidden="true">↓</span>
                </Link>
              </div>

              <div className="sub-hero-check" style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#475569", fontWeight: "600" }}>
                <span style={{ color: "#10b981", fontWeight: "800" }}>✓</span> {t.subHeroCheck}
              </div>
            </div>
          </div>

          <div className="home-container home-stats">
            {t.stats.map((stat) => (
              <div className="home-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 1. PROGRAMS SUMMARY */}
        <section className="home-section home-products" id="programs-summary">
          <div className="home-container">
            <div className="home-section-heading">
              <div>
                <span className="home-section-eyebrow">{t.programsEyebrow}</span>
                <h2>
                  {t.programsTitle} <span>{t.programsAccent}</span>
                </h2>
              </div>
              <div className="home-section-side">
                <p>{t.programsDescription}</p>
                <Link to="/programs" className="home-text-link">
                  {t.viewAllPrograms} <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="home-program-grid">
              {/* Available App */}
              <article className="home-program-card">
                <div className="home-program-top">
                  <img src="/images/weekly-planner-logo.png" alt="" className="home-app-logo" />
                  <span className="home-program-status status-available">
                    <span className="home-status-dot" />
                    {t.available}
                  </span>
                </div>
                <div className="home-program-body">
                  <span className="home-program-category">{t.weeklyPlannerCat}</span>
                  <h3>{t.weeklyPlannerName}</h3>
                  <p>{t.weeklyPlannerDesc}</p>
                </div>
                <div className="home-program-footer">
                  <Link to="/programs/weekly-planner" className="home-program-link">
                    {t.details} ↗
                  </Link>
                </div>
              </article>

              {/* Development App */}
              <article className="home-program-card">
                <div className="home-program-top">
                  <span className="home-program-icon">G</span>
                  <span className="home-program-status status-development">
                    <span className="home-status-dot" />
                    {t.development}
                  </span>
                </div>
                <div className="home-program-body">
                  <span className="home-program-category">{t.ledgerCat}</span>
                  <h3>{t.ledgerName}</h3>
                  <p>{t.ledgerDesc}</p>
                </div>
                <div className="home-program-footer">
                  <div className="home-disabled-btn">{t.comingSoon}</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 2. ABOUT SUMMARY */}
        <section className="home-section home-about" id="about-summary">
          <div className="home-container home-about-layout">
            <div className="home-about-copy">
              <span className="home-section-eyebrow">{t.aboutEyebrow}</span>
              <h2>
                {t.aboutTitle} <span>{t.aboutAccent}</span>
              </h2>
              <p>{t.aboutDescription}</p>

              <Link to="/about" className="home-button-primary" style={{ marginTop: "20px" }}>
                {t.aboutMoreBtn} <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="home-benefits-grid">
              {t.benefits.map((b) => (
                <article className="home-benefit" key={b.number}>
                  <span className="home-benefit-number">{b.number}</span>
                  <h3>{b.title}</h3>
                  <p>{b.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. REQUEST PROJECT SUMMARY / CTA */}
        <section className="home-contact-section" id="request-summary">
          <div className="home-contact-decoration" />
          <div className="home-container home-contact-content">
            <span className="home-contact-eyebrow">{t.requestEyebrow}</span>
            <h2>{t.requestTitle}</h2>
            <p>{t.requestDescription}</p>
            <Link to="/request" className="home-button-light">
              {t.requestBtn} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        {/* 4. CONTACT & RESUME SUMMARY */}
        <section className="home-section home-contact-brief">
          <div className="home-container" style={{ textAlign: "center" }}>
            <span className="home-section-eyebrow">{t.contactEyebrow}</span>
            <h2>{t.contactTitle}</h2>
            <p style={{ maxWidth: "600px", margin: "10px auto 24px", color: "#475569", fontWeight: "500" }}>
              {t.contactDescription}
            </p>
            <Link to="/contact" className="home-button-primary">
              {t.contactBtn} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="home-container home-footer-inner">
          <div className="home-footer-brand">
            <Brand />
            <p>{t.footerDescription}</p>
          </div>

          <div className="home-footer-links">
            <Link to="/">{t.nav[0]}</Link>
            <Link to="/programs">{t.nav[1]}</Link>
            <Link to="/about">{t.nav[2]}</Link>
            <Link to="/request">{t.nav[3]}</Link>
            <Link to="/contact">{t.nav[4]}</Link>
          </div>

          <div className="home-footer-bottom">
            <span>© {new Date().getFullYear()} FlowSoft. {t.rights}</span>
            <a href="#home">{t.backTop} ↑</a>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}