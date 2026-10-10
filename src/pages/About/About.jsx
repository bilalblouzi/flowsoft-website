import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import "./About.css";


const content = {
  ar: {
    dir: "rtl",
    langButton: "EN",
    nav: ["الرئيسية", "برامجنا", "تعرف علينا", "طلب مشروع", "تواصل معنا"],
    badge: "عن FlowSoft",
    heroTitle: "نبني حلولًا برمجية",
    heroAccent: "تبسط المستحيل",
    heroDescription:
      "نحن في FlowSoft نركز على تحويل الأفكار المعقدة والمهام الإدارية والتربوية إلى أنظمة برمجية ذكية، بسيطة، وسريعة الاستخدام.",
    
    // Mission & Vision Section
    visionTitle: "رؤيتنا ورسالتنا",
    visionAccent: "في العمل",
    missionTitle: "رسالتنا",
    missionDesc:
      "تقديم حلول برمجية عملية تلبي الاحتياجات الحقيقية للمؤسسات والأفراد، مع التركيز العالي على جودة الأداء وسهولة تجربة المستخدم.",
    visionMainTitle: "رؤيتنا",
    visionDesc:
      "أن نكون الخيار الأول في تقديم التطبيقات المكتبية والحلول الرقمية المخصصة التي ترفع الإنتاجية وتدعم التحول الرقمي السلس.",

    // Core Values
    valuesTitle: "قيمنا الأساسية",
    valuesAccent: "التي نلتزم بها",
    valuesList: [
      {
        number: "01",
        title: "البساطة والوضوح",
        desc: "نصمم واجهات مريحة تخلو من التعقيد وتتيح للعميل التركيز على عمله الأساسي."
      },
      {
        number: "02",
        title: "الجودة والأمان",
        desc: "نهتم ببناء قواعد بيانات مستقرة وأنظمة آمنة تضمن حفظ بياناتك وسرعة استجابتها."
      },
      {
        number: "03",
        title: "التركيز على المستخدم",
        desc: "كل ميزة نطورها تبدأ من فهم دقيق للمشكلة اليومية التي يواجهها المستخدم."
      },
      {
        number: "04",
        title: "التطوير والدعم المستمر",
        desc: "لا ينتهي عملنا عند تسليم المشروع، بل نواصل التحديث والدعم الفني لضمان النجاح."
      }
    ],

    // Development Workflow
    processTitle: "منهجية العمل",
    processAccent: "كيف نحول فكرتك إلى واقع؟",
    processSteps: [
      {
        step: "1",
        title: "التحليل والدراسة",
        desc: "فهم متطلبات المشروع بدقة وتحديد الوظائف الأساسية ونوع الحل المناسب."
      },
      {
        step: "2",
        title: "التصميم والهيكلة",
        desc: "رسم واجهات المستخدم وتحديد تدفق البيانات لضمان تجربة استخدام سلسة."
      },
      {
        step: "3",
        title: "التطوير البرمجي",
        desc: "كتابة كود برمجي نظيف وآمن باستخدام أحدث التقنيات وأفضل الممارسات."
      },
      {
        step: "4",
        title: "الاختبار والتسليم",
        desc: "فحص أداء البرنامج والتأكد من خلوه من الأخطاء ثم إطلاقه وتقديم الدعم."
      }
    ],

    ctaLabel: "هل أنت جاهز للبدء؟",
    ctaTitle: "دعنا نحول فكرتك إلى",
    ctaAccent: "برنامج حقيقي",
    ctaDescription:
      "تواصل معنا اليوم لمناقشة مشروعك واكتشاف كيف يمكن لـ FlowSoft مساعدتك.",
    contactBtn: "طلب مشروعك الآن",

    footerDescription: "حلول برمجية ذكية تجعل العمل أسهل.",
    rights: "جميع الحقوق محفوظة."
  },

  en: {
    dir: "ltr",
    langButton: "ع",
    nav: ["Home", "Programs", "Get to know us", "Request Project", "Contact Us"],
    badge: "About FlowSoft",
    heroTitle: "Building Software Solutions",
    heroAccent: "That Simplify Work",
    heroDescription:
      "At FlowSoft, we transform complex ideas and administrative tasks into smart, clean, and efficient software applications.",

    visionTitle: "Our Mission & Vision",
    visionAccent: "Drive Success",
    missionTitle: "Our Mission",
    missionDesc:
      "Delivering practical software solutions tailored to real-world needs, focusing on high performance and seamless user experience.",
    visionMainTitle: "Our Vision",
    visionDesc:
      "To be the preferred provider for custom desktop and digital applications that boost productivity and simplify work.",

    valuesTitle: "Core Values",
    valuesAccent: "We Stand By",
    valuesList: [
      {
        number: "01",
        title: "Simplicity & Clarity",
        desc: "Designing intuitive interfaces that allow users to focus on what matters most."
      },
      {
        number: "02",
        title: "Quality & Security",
        desc: "Building reliable database architecture and secure, highly efficient applications."
      },
      {
        number: "03",
        title: "User-Centric Design",
        desc: "Every feature we create begins with a deep understanding of user pain points."
      },
      {
        number: "04",
        title: "Continuous Support",
        desc: "We stay engaged after delivery with updates and technical assistance."
      }
    ],

    processTitle: "Development Process",
    processAccent: "How We Bring Ideas to Life",
    processSteps: [
      {
        step: "1",
        title: "Analysis & Scoping",
        desc: "Understanding requirements thoroughly to define optimal technical scope."
      },
      {
        step: "2",
        title: "UI/UX & Architecture",
        desc: "Prototyping user flows and database schema for smooth interaction."
      },
      {
        step: "3",
        title: "Development",
        desc: "Writing clean, efficient, and robust code using modern tech stacks."
      },
      {
        step: "4",
        title: "Testing & Deployment",
        desc: "Rigorous quality assurance before launch and continuous post-launch support."
      }
    ],

    ctaLabel: "Ready to start?",
    ctaTitle: "Let's turn your vision into a",
    ctaAccent: "Real Software Solution",
    ctaDescription:
      "Reach out today to discuss your project and discover how FlowSoft can help.",
    contactBtn: "Request Your Project",

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

export default function About() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("flowsoft_lang") || "ar";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = content[language];
  const isArabic = language === "ar";
  
const pageTitle = isArabic
  ? "من نحن | FlowSoft - حلول برمجية ذكية"
  : "About FlowSoft | Smart Software Solutions";

const pageDescription = isArabic
  ? "تعرّف على رؤية FlowSoft ورسالتها وقيمها، ومنهجيتها في تطوير حلول برمجية عملية تساعد على تبسيط العمل وتحسين الإنتاجية."
  : "Learn about FlowSoft's mission, vision, values, and development process for building practical software solutions that simplify work and improve productivity.";


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
      className={`programs-page about-page ${isArabic ? "programs-ar" : "programs-en"}`}
      dir={t.dir}
      lang={language}
    >

      {/* HEADER */}
      <header className="programs-header">
        <div className="programs-header-inner">
          <Brand />

          {/* القائمة العادية للشاشات الكبيرة */}
          <nav className="programs-nav" aria-label="Main navigation">
            <Link to="/">{t.nav[0]}</Link>
            <Link to="/programs">{t.nav[1]}</Link>
            <Link to="/about" className="active">{t.nav[2]}</Link>
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
            <Link to="/programs" onClick={() => setIsMenuOpen(false)}>{t.nav[1]}</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="active">{t.nav[2]}</Link>
            <Link to="/request" onClick={() => setIsMenuOpen(false)}>{t.nav[3]}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t.nav[4]}</Link>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
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

            <a href="#vision" className="programs-hero-button">
              {t.nav[2]}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="programs-section" id="vision">
          <div className="programs-container">
            <div className="programs-section-heading" style={{ textAlign: "center", display: "block" }}>
              <span className="section-label">{t.badge}</span>
              <h2>
                {t.visionTitle} <span>{t.visionAccent}</span>
              </h2>
            </div>

            <div className="about-vision-grid">
              <div className="about-vision-card">
                <div className="about-card-icon">🎯</div>
                <h3>{t.missionTitle}</h3>
                <p>{t.missionDesc}</p>
              </div>

              <div className="about-vision-card">
                <div className="about-card-icon">🚀</div>
                <h3>{t.visionMainTitle}</h3>
                <p>{t.visionDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="why-section" id="values">
          <div className="programs-container why-inner">
            <div className="why-content">
              <span className="section-label">{t.badge}</span>
              <h2>
                {t.valuesTitle}
                <span>{t.valuesAccent}</span>
              </h2>
            </div>

            <div className="why-grid">
              {t.valuesList.map((item, idx) => (
                <article className="why-item" key={idx}>
                  <span className="why-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS / WORKFLOW */}
        <section className="programs-section" id="process">
          <div className="programs-container">
            <div className="programs-section-heading" style={{ textAlign: "center", display: "block" }}>
              <span className="section-label">{t.badge}</span>
              <h2>
                {t.processTitle} <span>({t.processAccent})</span>
              </h2>
            </div>

            <div className="about-process-grid">
              {t.processSteps.map((item, index) => (
                <div key={index} className="process-step-card">
                  <div className="step-number">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="programs-cta" id="start">
          <div className="programs-cta-decoration" />
          <div className="programs-cta-content">
            <span className="cta-small">{t.ctaLabel}</span>
            <h2>
              {t.ctaTitle} <span>{t.ctaAccent}</span>
            </h2>
            <p>{t.ctaDescription}</p>
            <Link to="/request" className="cta-button">
              {t.contactBtn}
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