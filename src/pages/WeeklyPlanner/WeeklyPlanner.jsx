import { useState } from "react";
import { Link } from "react-router-dom";
import "./WeeklyPlanner.css";

const content = {
  ar: {
    dir: "rtl",
    langButton: "EN",
    nav: ["الرئيسية", "برامجنا", "تعرف علينا", "طلب مشروع", "تواصل معنا"],
    category: "التنظيم والإنتاجية",
    badge: "برنامج مكتبي متاح الآن",
    title: "WeeklyPlannerApp",
    subtitle: "مخطط أسبوعي بسيط، واضح وعملي لتنظيم حياتك وإنجاز أهدافك.",
    downloadBtn: "تحميل البرنامج",
    statusText: "متاح مجانًا / الإصدار 1.0",
    
    aboutTitle: "عن البرنامج",
    aboutDesc: "من هنا جاءت فكرة WeeklyPlannerApp؛ تطبيق مكتبي صُمم لمساعدتك على تنظيم أسبوعك بطريقة بسيطة، واضحة وعملية، بعيدًا عن التعقيد وزحمة الميزات غير الضرورية.",

    featuresTitle: "ماذا يقدم التطبيق؟",
    features: [
      {
        icon: "📋",
        title: "إدارة المهام",
        desc: "إضافة المهام وتنظيمها ومتابعة حالتها خلال الأسبوع بكل سهولة."
      },
      {
        icon: "🎯",
        title: "الأهداف",
        desc: "إنشاء أهداف ومتابعة مستوى التقدم فيها، مع تحديد المدة والحالة الخاصة بكل هدف."
      },
      {
        icon: "🔄",
        title: "العادات",
        desc: "إنشاء عادات جديدة وتحديد الأيام التي تريد الالتزام بها، مع إمكانية تفعيل أو تعطيل العادة."
      },
      {
        icon: "📅",
        title: "تنظيم الأسبوع",
        desc: "رؤية التزاماتك بشكل منظم يساعدك على معرفة ما يجب إنجازه ومتى."
      },
      {
        icon: "✨",
        title: "واجهة عصرية وسهلة الاستخدام",
        desc: "تم تصميم الواجهة لتكون واضحة ومريحة، مع الاهتمام بالتفاصيل البصرية وسهولة الوصول إلى الوظائف الأساسية."
      }
    ],

    specsTitle: "المواصفات التقنية",
    specs: [
      { label: "نوع التطبيق", value: "Desktop Application" },
      { label: "نظام التشغيل", value: "Windows" },
      { label: "الحالة", value: "نسخة مستقرة وجاهزة للتحميل" },
      { label: "المطور", value: "بلال بلوزي" }
    ],

    ctaTitle: "جاهز لتنظيم أسبوعك وبناء عادات جديدة؟",
    ctaDesc: "حمل تطبيق WeeklyPlannerApp وابدأ في تنظيم مهامك وأهدافك اليوم.",

    footerDescription: "حلول برمجية ذكية تجعل العمل أسهل.",
    rights: "جميع الحقوق محفوظة."
  },

  en: {
    dir: "ltr",
    langButton: "ع",
    nav: ["Home", "Programs", "Get to know us", "Request Project", "Contact Us"],
    category: "Organization & Productivity",
    badge: "Desktop App - Available Now",
    title: "WeeklyPlannerApp",
    subtitle: "A simple, clear, and practical weekly planner to structure your life and reach your goals.",
    downloadBtn: "Download Software",
    statusText: "Free Available / v1.0",

    aboutTitle: "About The App",
    aboutDesc: "WeeklyPlannerApp was born to help you structure your week in a simple, clear, and practical way, without unnecessary complexity.",

    featuresTitle: "What does it offer?",
    features: [
      {
        icon: "📋",
        title: "Task Management",
        desc: "Add, organize, and track task status throughout the week effortlessly."
      },
      {
        icon: "🎯",
        title: "Goals",
        desc: "Set goals and track progress with custom duration and status."
      },
      {
        icon: "🔄",
        title: "Habits",
        desc: "Build new habits and set active days with easy toggle controls."
      },
      {
        icon: "📅",
        title: "Weekly Overview",
        desc: "A structured overview helping you know what to achieve and when."
      },
      {
        icon: "✨",
        title: "Modern & Intuitive UI",
        desc: "Designed for visual clarity and comfortable navigation to essential functions."
      }
    ],

    specsTitle: "Technical Specifications",
    specs: [
      { label: "App Type", value: "Desktop Application" },
      { label: "OS Compatibility", value: "Windows" },
      { label: "Status", value: "Stable Release" },
      { label: "Developer", value: "BILAL BLOUZI" }
    ],

    ctaTitle: "Ready to organize your week & build habits?",
    ctaDesc: "Download WeeklyPlannerApp today and take control of your tasks and goals.",

    footerDescription: "Smart software solutions that make work easier.",
    rights: "All rights reserved."
  }
};

function Brand() {
  return (
    <Link to="/" className="program-brand" aria-label="FlowSoft home">
      <img src="/images/flowsoft-logo.png" alt="" className="program-brand-logo" />
      <span className="program-brand-copy">
        <strong>FlowSoft</strong>
        <small>SMART SOFTWARE SOLUTIONS</small>
      </span>
    </Link>
  );
}

export default function WeeklyPlanner() {
const [language, setLanguage] = useState(() => {
  return localStorage.getItem("flowsoft_lang") || "ar";
});
  const t = content[language];
  const isArabic = language === "ar";

function toggleLanguage() {
  setLanguage((current) => {
    const newLang = current === "ar" ? "en" : "ar";
    localStorage.setItem("flowsoft_lang", newLang);
    return newLang;
  });
}

const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`programs-page planner-page ${isArabic ? "programs-ar" : "programs-en"}`} dir={t.dir} lang={language}>
      {/* HEADER */}
      <header className="programs-header">
        <div className="programs-header-inner">
          <Brand />

          {/* القائمة العادية للشاشات الكبيرة */}
          <nav className="programs-nav" aria-label="Main navigation">
            <Link to="/">{t.nav[0]}</Link>
            <Link to="/programs" className="active">{t.nav[1]}</Link>
            <Link to="/about">{t.nav[2]}</Link>
            <Link to="/request">{t.nav[3]}</Link>
            <Link to="/contact">{t.nav[4]}</Link>
          </nav>

          <div className="programs-header-actions-mobile">
            <button
              className="program-language-button"
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
            <Link to="/" onClick={() => setIsMenuOpen(false)}>{t.nav[0]}</Link>
            <Link to="/programs" onClick={() => setIsMenuOpen(false)} className="active">{t.nav[1]}</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t.nav[2]}</Link>
            <Link to="/request" onClick={() => setIsMenuOpen(false)}>{t.nav[3]}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t.nav[4]}</Link>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="planner-hero">
          <div className="programs-container planner-hero-inner">
            <div className="planner-logo-wrapper">
              <img src="/images/weekly-planner-logo.png" alt="WeeklyPlannerApp Logo" className="planner-main-logo" />
            </div>

            <div className="planner-hero-info">
              <span className="planner-category-tag">{t.category}</span>
              <h1>{t.title}</h1>
              <p className="planner-subtitle">{t.subtitle}</p>

              <div className="planner-hero-actions">
                <a href="#download" className="planner-download-btn">
                  {t.downloadBtn} <span>↓</span>
                </a>
                <span className="planner-status-badge">{t.statusText}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="planner-section planner-about-section">
          <div className="programs-container">
            <div className="planner-about-card">
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutDesc}</p>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="planner-section">
          <div className="programs-container">
            <div className="planner-section-title">
              <h2>{t.featuresTitle}</h2>
            </div>

            <div className="planner-features-grid">
              {t.features.map((item, index) => (
                <div key={index} className="planner-feature-card">
                  <div className="feature-card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECS SECTION */}
        <section className="planner-section planner-specs-section">
          <div className="programs-container">
            <div className="planner-specs-card">
              <h2>{t.specsTitle}</h2>
              <div className="specs-grid">
                {t.specs.map((spec, idx) => (
                  <div key={idx} className="spec-item">
                    <span className="spec-label">{spec.label}</span>
                    <strong className="spec-value">{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

{/* DOWNLOAD / CTA SECTION */}
        <section className="programs-cta" id="download">
          <div className="programs-cta-decoration" />
          <div className="programs-cta-content">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaDesc}</p>
            <a 
              href="https://www.mediafire.com/file/6mhl58tagifadp8/WeeklyPlanner.rar/file" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
            >
              {t.downloadBtn} <span aria-hidden="true">📥</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="programs-footer">
        <div className="programs-container footer-inner">
          <div className="footer-brand">
            <Brand />
            <p>{t.footerDescription}</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/">{t.nav[0]}</Link>
            <Link to="/programs">{t.nav[1]}</Link>
            <Link to="/about">{t.nav[2]}</Link>
            <Link to="/request">{t.nav[3]}</Link>
            <Link to="/contact">{t.nav[4]}</Link>
          </nav>

          <div className="footer-copy">
            © {new Date().getFullYear()} FlowSoft. {t.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}