import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import "./Programs.css";


const content = {
  ar: {
    dir: "rtl",
    langButton: "EN",
    nav: ["الرئيسية", "برامجنا", "تعرف علينا", "طلب مشروع", "تواصل معنا"],
    badge: "حلول برمجية مصممة للأعمال والإنتاجية",
    heroTitle: "برامجنا",
    heroAccent: "تصنع الفرق",
    heroDescription:
      "اكتشف مجموعة الحلول البرمجية التي تطورها FlowSoft لمساعدة المؤسسات والأفراد على تنظيم أعمالهم، إدارة أنشطتهم، وتبسيط المهام اليومية.",
    productsLabel: "منتجات FlowSoft",
    productsTitle: "حلول برمجية",
    productsAccent: "عملية وذكية",
    productsDescription:
      "كل برنامج نصممه يبدأ من مشكلة حقيقية، ثم نحولها إلى تجربة استخدام بسيطة وفعالة.",
    
    // WeeklyPlannerApp
    weeklyPlannerName: "WeeklyPlannerApp",
    weeklyPlannerCategory: "التنظيم والإنتاجية",
    weeklyPlannerDescription:
      "تطبيق مكتبي صُمم لمساعدتك على تنظيم أسبوعك وإدارة المهام والأهداف والعادات بطريقة بسيطة وواضحة.",
    weeklyPlannerFeatures: [
      "إدارة المهام ومتابعتها",
      "تحديد الأهداف ومستوى التقدم",
      "بناء ومتابعة العادات",
      "واجهة عصرية وسهلة الاستخدام",
    ],

    // General Ledger - دفتر الأستاذ (إصدار التعليم والتدريس)
    ledgerName: "General Ledger",
    ledgerCategory: "التعليم والتدريس",
    ledgerDescription:
      "دفتر الأستاذ الرقمي المخصص للأستاذ لإدارة الدروس والأفواج وتتبع تقييمات التلاميذ وتنظيم العمل التربوي.",
    ledgerFeatures: [
      "إدارة الأفواج والتلاميذ",
      "متابعة الحضور والغياب",
      "تدوين النقاط والتقييمات",
      "تخطيط الدروس والبرنامج الدراسي",
    ],

    available: "متاح",
    development: "قيد التطوير",
    details: "اكتشف البرنامج",
    comingLabel: "قريبًا",
    comingTitle: "برنامج جديد",
    comingDescription:
      "نعمل باستمرار على تطوير حلول برمجية جديدة تساعد المؤسسات والأفراد على إنجاز أعمالهم بطريقة أسهل وأكثر احترافية.",

    whyLabel: "لماذا FlowSoft؟",
    whyTitle: "لا نصنع البرامج فقط...",
    whyAccent: "بل نصنع حلولًا.",
    whyDescription:
      "هدفنا تقديم برامج تجمع بين سهولة الاستخدام والتصميم الحديث والوظائف العملية التي يحتاجها المستخدم فعلًا.",
    benefits: [
      ["01", "سهولة الاستخدام", "واجهات واضحة ومريحة تساعد على إنجاز العمل دون تعقيد."],
      ["02", "تصميم حديث", "تصميم متناسق وتجربة مريحة على مختلف الشاشات."],
      ["03", "تطوير مستمر", "نطوّر منتجاتنا باستمرار وفق احتياجات المستخدمين."],
      ["04", "حلول عملية", "نركز على حل المشكلات الحقيقية وتبسيط العمل اليومي."],
    ],

    ctaLabel: "هل لديك فكرة؟",
    ctaTitle: "ربما يكون",
    ctaAccent: "برنامجك القادم",
    ctaEnd: "معنا.",
    ctaDescription:
      "إذا كانت لديك فكرة لبرنامج أو حل رقمي، يسعدنا أن نسمع عنها.",
    contact: "تواصل معنا",
    footerDescription: "حلول برمجية ذكية تجعل العمل أسهل.",
    rights: "جميع الحقوق محفوظة.",
  },

  en: {
    dir: "ltr",
    langButton: "ع",
    nav: ["Home", "Programs", "Get to know us", "Request Project", "Contact Us"],
    badge: "Software solutions designed for productivity",
    heroTitle: "Our programs",
    heroAccent: "make a difference",
    heroDescription:
      "Discover FlowSoft software solutions designed to help organizations and individuals organize their work, improve productivity and simplify everyday tasks.",
    productsLabel: "FlowSoft products",
    productsTitle: "Practical",
    productsAccent: "and smart solutions",
    productsDescription:
      "Every product starts with a real problem and becomes a simple, effective user experience.",

    weeklyPlannerName: "WeeklyPlannerApp",
    weeklyPlannerCategory: "Organization & Productivity",
    weeklyPlannerDescription:
      "A desktop application designed to help you organize your week, tasks, goals, and habits simply.",
    weeklyPlannerFeatures: [
      "Task management & tracking",
      "Goal setting & progress",
      "Habit building & scheduling",
      "Modern & intuitive interface",
    ],

    ledgerName: "General Ledger",
    ledgerCategory: "Education & Teaching",
    ledgerDescription:
      "A digital gradebook and ledger for teachers to manage classes, track student evaluations, and plan lessons.",
    ledgerFeatures: [
      "Class & student management",
      "Attendance tracking",
      "Grade & evaluation log",
      "Lesson & syllabus planning",
    ],

    available: "Available",
    development: "In development",
    details: "Explore program",
    comingLabel: "Coming soon",
    comingTitle: "A new program",
    comingDescription:
      "We keep developing software solutions that help organizations and individuals work more easily and professionally.",

    whyLabel: "Why FlowSoft?",
    whyTitle: "We do not just build software...",
    whyAccent: "we build solutions.",
    whyDescription:
      "Our goal is to combine ease of use, modern design and practical features that people genuinely need.",
    benefits: [
      ["01", "Easy to use", "Clear interfaces that help people work without unnecessary complexity."],
      ["02", "Modern design", "A consistent experience across different screen sizes."],
      ["03", "Continuous development", "We improve our products as user needs evolve."],
      ["04", "Practical solutions", "We focus on real problems and simpler everyday work."],
    ],

    ctaLabel: "Have an idea?",
    ctaTitle: "Your next",
    ctaAccent: "software solution",
    ctaEnd: "could start here.",
    ctaDescription:
      "Have an idea for a program or digital solution? We would love to hear about it.",
    contact: "Contact us",
    footerDescription: "Smart software solutions that make work easier.",
    rights: "All rights reserved.",
  },
};

function Brand() {
  return (
    <Link to="/" className="program-brand" aria-label="FlowSoft home">
      <img
        src="/images/flowsoft-logo.png"
        alt=""
        className="program-brand-logo"
      />
      <span className="program-brand-copy">
        <strong>FlowSoft</strong>
        <small>SMART SOFTWARE SOLUTIONS</small>
      </span>
    </Link>
  );
}

function ProgramCard({ id, name, category, description, status, features, imageSrc, letter, details, isAvailable, comingLabel }) {
  return (
    <article className={`program-card program-card-${id}`}>
      <div className="program-card-top">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="program-card-logo-img" />
        ) : (
          <div className={`program-icon ${id}`}>{letter}</div>
        )}
        <span className={`program-status ${isAvailable ? "available" : "development"}`}>
          <span className="status-dot" />
          {status}
        </span>
      </div>

      <div className="program-card-content">
        <span className="program-category">{category}</span>
        <h3>{name}</h3>
        <p>{description}</p>

        <ul className="program-features">
          {features.map((feature) => (
            <li key={feature}>
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="program-card-footer">
        {isAvailable ? (
          <Link to={`/programs/${id}`} className="program-button">
            {details}
            <span aria-hidden="true">↗</span>
          </Link>
        ) : (
          <div className="program-button disabled">
            <span className="status-dot" style={{ background: "#eaa328" }} />
            {comingLabel}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Programs() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("flowsoft_lang") || "ar";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = content[language];
  const isArabic = language === "ar";
  
const pageTitle = isArabic
  ? "برامج FlowSoft | حلول برمجية عملية وذكية"
  : "FlowSoft Programs | Practical and Smart Software";

const pageDescription = isArabic
  ? "اكتشف برامج FlowSoft، بما فيها WeeklyPlannerApp لتنظيم المهام والأهداف، وتعرّف على حلولنا البرمجية للإنتاجية والعمل."
  : "Explore FlowSoft software, including WeeklyPlannerApp for organizing tasks and goals, and discover practical solutions for productivity and work.";


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
      className={`programs-page ${isArabic ? "programs-ar" : "programs-en"}`}
      dir={t.dir}
      lang={language}
    >

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
              title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
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
        {/* HERO */}
        <section className="programs-hero">
          <div className="programs-hero-decoration hero-decoration-one" />
          <div className="programs-hero-decoration hero-decoration-two" />

          <div className="programs-hero-content">
            <div className="programs-hero-badge">
              <span className="status-dot" />
              {t.badge}
            </div>

            <h1>
              {t.heroTitle}
              <span>{t.heroAccent}</span>
            </h1>

            <p>{t.heroDescription}</p>

            <a href="#products" className="programs-hero-button">
              {t.nav[1]}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="programs-section" id="products">
          <div className="programs-container">
            <div className="programs-section-heading">
              <div>
                <span className="section-label">{t.productsLabel}</span>
                <h2>
                  {t.productsTitle}
                  <span> {t.productsAccent}</span>
                </h2>
              </div>
              <p>{t.productsDescription}</p>
            </div>

            <div className="programs-grid">
              {/* WeeklyPlannerApp (متاح) */}
              <ProgramCard
                id="weekly-planner"
                name={t.weeklyPlannerName}
                imageSrc="/images/weekly-planner-logo.png"
                category={t.weeklyPlannerCategory}
                description={t.weeklyPlannerDescription}
                status={t.available}
                isAvailable={true}
                features={t.weeklyPlannerFeatures}
                details={t.details}
              />

              {/* General Ledger (قيد التطوير - أستاذ وتدريس) */}
              <ProgramCard
                id="general-ledger"
                name={t.ledgerName}
                letter="G"
                category={t.ledgerCategory}
                description={t.ledgerDescription}
                status={t.development}
                isAvailable={false}
                comingLabel={t.development}
                features={t.ledgerFeatures}
                details={t.details}
              />

              {/* Coming Soon */}
              <article className="program-card coming-card">
                <div className="coming-icon">+</div>
                <span className="program-category">{t.comingLabel}</span>
                <h3>{t.comingTitle}</h3>
                <p>{t.comingDescription}</p>
                <div className="coming-label">
                  <span className="status-dot" />
                  {t.comingLabel}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* WHY FLOWSOFT */}
        <section className="why-section" id="why-flowsoft">
          <div className="programs-container why-inner">
            <div className="why-content">
              <span className="section-label">{t.whyLabel}</span>
              <h2>
                {t.whyTitle}
                <span>{t.whyAccent}</span>
              </h2>
              <p>{t.whyDescription}</p>
            </div>

            <div className="why-grid">
              {t.benefits.map(([number, title, description]) => (
                <article className="why-item" key={number}>
                  <span className="why-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="programs-cta" id="support">
          <div className="programs-cta-decoration" />
          <div className="programs-cta-content">
            <span className="cta-small">{t.ctaLabel}</span>
            <h2>
              {t.ctaTitle}
              <span>{t.ctaAccent}</span>
              {t.ctaEnd}
            </h2>
            <p>{t.ctaDescription}</p>
            <Link to="/contact" className="cta-button">
              {t.contact}
              <span aria-hidden="true">↗</span>
            </Link>
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
  </>
  );
}