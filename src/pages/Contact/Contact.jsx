import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import "./Contact.css";


const content = {
  ar: {
    dir: "rtl",
    langButton: "EN",
    nav: ["الرئيسية", "برامجنا", "تعرف علينا", "طلب مشروع", "تواصل معنا"],
    badge: "تواصل معنا والتعرف على خدماتنا",
    heroTitle: "تواصل معنا",
    heroAccent: "والخبرات التقنية",
    heroDescriptionLine1: "سواء كان لديك استفسار حول حلول ",
    heroDescriptionLine2: "، تريد مناقشة شراكة، أو الاطلاع على السيرة الذاتية والمهارات البرمجية، ",
    heroDescriptionAccent2: "نرحب بتواصلك دائماً.",

    instantNoticeLine1: "يمكنك ملء الاستمارة أدناه وسيصلنا طلبك فوراً ونرد عليك،",
    instantNoticeLine2Prefix: "أو التواصل معنا ",
    instantNoticeLine2Accent: "بشكل مباشر وسريع",
    instantNoticeLine2Suffix: " عبر إحدى المنصات",

    // Hero Action Buttons
    heroFormBtn: "تواصل معنا",
    heroQuickBtn: "التواصل السريع",

    // Fast Social Section Title
    quickContactTitle: "للتواصل السريع المباشر",
    quickContactSubtitle: "اختر منصتك المفضلة لبدء محادثة فورية معنا",

    // Contact Info
    contactTitle: "معلومات الاتصال المباشر",
    emailLabel: "البريد الإلكتروني",
    emailValue: "bllblouzi@gmail.com",
    phoneLabel: "الهاتف / واتساب",
    phoneValue: "28 33 13 666 213+",
    locationLabel: "المقر الرئيسي",
    locationValue: "الجزائر - ولاية المغير - بلدية جامعة",

    // Form Labels
    formTitle: "أرسل لنا رسالة مباشرة",
    fullNameLabel: "الاسم الكامل",
    fullNamePlaceholder: "أدخل اسمك الكامل",
    emailLabelForm: "البريد الإلكتروني",
    emailPlaceholder: "example@domain.com",
    subjectLabel: "موضوع الرسالة",
    subjectPlaceholder: "استفسار، دعم فني، استشارة...",
    messageLabel: "نص الرسالة",
    messagePlaceholder: "اكتب رسالتك هنا بالتفصيل...",
    submitButton: "إرسال الرسالة",
    submitting: "جاري الإرسال...",
    successMessage: "تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.",

    // Resume / CV Section
    cvTitle: "السيرة الذاتية والقدرات التقنية",
    cvSubtitle: "مهندس دولة في الإعلام الآلي - اختصاص ذكاء اصطناعي",
    cvDescription:
      "تطوير حلول برمجية متكاملة، إدارة الأنظمة، تصميم قواعد البيانات والأنظمة الإدارية الذكية للمؤسسات والأفراد.",
    skillsTitle: "أبرز المهارات والتقنيات",
    skills: [
      "تطوير تطبيقات الويب (React, Node.js, Vite)",
      "إدارة قواعد البيانات والأنظمة (SQL, Access)",
      "تطوير حلول الأعمال بدون كود (AppSheet, Google Sheets)",
      "تصميم الواجهات وتجربة المستخدم (Figma, UI/UX)",
      "الذكاء الاصطناعي وتحليل البيانات (Python, AI)",
      "الصيانة والدعم الفني للأنظمة والشبكات",
    ],

    footerDescription: "حلول برمجية ذكية تجعل العمل أسهل.",
    rights: "جميع الحقوق محفوظة.",
  },

  en: {
    dir: "ltr",
    langButton: "ع",
    nav: ["Home", "Programs", "Get to know us", "Request Project", "Contact Us"],
    badge: "Get in touch & Technical Portfolio",
    heroTitle: "Contact Us",
    heroAccent: "& Technical Resume",
    heroDescriptionLine1: "Whether you have a question about ",
    heroDescriptionLine2: " solutions, want to discuss a partnership, or view our resume & skills, ",
    heroDescriptionAccent2: "we always welcome your reach.",

    instantNoticeLine1: "You can fill out the form below and we will receive your request instantly,",
    instantNoticeLine2Prefix: "or get in touch with us ",
    instantNoticeLine2Accent: "directly and instantly",
    instantNoticeLine2Suffix: " via any of the following platforms:",

    heroFormBtn: "Contact Us",
    heroQuickBtn: "Instant Contact",

    quickContactTitle: "Instant Direct Contact",
    quickContactSubtitle: "Choose your favorite platform to chat with us immediately",

    contactTitle: "Direct Contact Info",
    emailLabel: "Email",
    emailValue: "bllblouzi@gmail.com",
    phoneLabel: "Phone / WhatsApp",
    phoneValue: "+213 666 13 33 28",
    locationLabel: "Location",
    locationValue: "Algeria - El Meghaier - Djamaa",

    formTitle: "Send a Direct Message",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "",
    emailLabelForm: "Email Address",
    emailPlaceholder: "example@domain.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Inquiry, Technical Support, Consulting...",
    messageLabel: "Message",
    messagePlaceholder: "Write your message details here...",
    submitButton: "Send Message",
    submitting: "Sending...",
    successMessage: "Your message has been sent successfully! We will get back to you soon.",

    cvTitle: "Resume & Core Competencies",
    cvSubtitle: "State Engineer in Computer Science - Artificial Intelligence",
    cvDescription:
      "Building integrated software solutions, system administration, database architecture, and smart business workflows.",
    skillsTitle: "Core Tech Stack & Skills",
    skills: [
      "Web Development (React, Node.js, Vite)",
      "Database & System Admin (SQL, Access)",
      "No-Code Business Solutions (AppSheet, Google Sheets)",
      "UI/UX Design & Prototyping (Figma)",
      "Artificial Intelligence & Data (Python, AI)",
      "Hardware, Networking & System Support",
    ],

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

export default function Contact() {
const [language, setLanguage] = useState(() => {
  return localStorage.getItem("flowsoft_lang") || "ar";
});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = content[language];
  const isArabic = language === "ar";

const pageTitle = isArabic
  ? "تواصل معنا | FlowSoft - حلول برمجية"
  : "Contact Us | FlowSoft - Software Solutions";

const pageDescription = isArabic
  ? "تواصل مع FlowSoft للاستفسار عن خدمات تطوير البرمجيات، ومناقشة المشاريع والشراكات، والاطلاع على المهارات والخبرات التقنية."
  : "Contact FlowSoft about software development services, project inquiries, partnerships, and technical skills and experience.";


function toggleLanguage() {
  setLanguage((current) => {
    const newLang = current === "ar" ? "en" : "ar";
    localStorage.setItem("flowsoft_lang", newLang);
    return newLang;
  });
}

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "340ec4ae-a8a2-4c70-86a7-81000953edf6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setLoading(false);
        setSubmitted(true);
      } else {
        setLoading(false);
        alert("حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      setLoading(false);
      alert("تأكد من اتصالك بالإنترنت.");
    }
  }

const [isMenuOpen, setIsMenuOpen] = useState(false);


return (
  <>
    <PageMeta
      title={pageTitle}
      description={pageDescription}
    />

    <div
      className={`programs-page contact-page ${isArabic ? "programs-ar" : "programs-en"}`}
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
            <Link to="/about">{t.nav[2]}</Link>
            <Link to="/request">{t.nav[3]}</Link>
            <Link to="/contact" className="active">{t.nav[4]}</Link>
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
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t.nav[2]}</Link>
            <Link to="/request" onClick={() => setIsMenuOpen(false)}>{t.nav[3]}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="active">{t.nav[4]}</Link>
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

            {/* النص الوصفي الأول */}
            <p className="hero-desc-primary">
              <span>{t.heroDescriptionLine1}</span>
              <strong className="accent-blue">FlowSoft</strong>
              <span>{t.heroDescriptionLine2}</span>
              <br />
              <strong className="accent-green">{t.heroDescriptionAccent2}</strong>
            </p>

            {/* النص الوصفي الثاني */}
            <p className="hero-desc-secondary">
              <span>{t.instantNoticeLine1}</span>
              <br />
              <span>{t.instantNoticeLine2Prefix}</span>
              <strong className="accent-blue-dark">{t.instantNoticeLine2Accent}</strong>
              <span>{t.instantNoticeLine2Suffix}</span>
            </p>

            {/* مجموعة الأزرار المزدوجة المتناسقة */}
            <div className="hero-buttons-group">
              <a href="#contact-section" className="programs-hero-button primary-btn">
                {t.heroFormBtn}
                <span aria-hidden="true">↓</span>
              </a>

              <a href="#quick-social-section" className="programs-hero-button secondary-btn">
                {t.heroQuickBtn}
                <span aria-hidden="true">⚡</span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT FORM & INFO SECTION */}
        <section className="programs-section" id="contact-section">
          <div className="programs-container">
            <div className="contact-grid-layout">
              {/* بطاقة معلومات الاتصال السريعة */}
              <div className="contact-info-card">
                <h3>{t.contactTitle}</h3>

                <div className="contact-info-item">
                  <span className="info-icon">✉</span>
                  <div>
                    <label>{t.emailLabel}</label>
                    <a href={`mailto:${t.emailValue}`}>{t.emailValue}</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <label>{t.phoneLabel}</label>
                    <p>{t.phoneValue}</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <label>{t.locationLabel}</label>
                    <p>{t.locationValue}</p>
                  </div>
                </div>
              </div>

              {/* نموذج المراسلة المباشرة */}
              <div className="contact-form-card">
                <h3>{t.formTitle}</h3>

                {submitted ? (
                  <div className="contact-success-alert">
                    <div className="success-icon">✓</div>
                    <h4>{t.successMessage}</h4>
                    <button
                      type="button"
                      className="cta-button"
                      style={{ marginTop: "15px" }}
                      onClick={() => setSubmitted(false)}
                    >
                      إرسال رسالة أخرى
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form-group">
                      <label htmlFor="fullName">{t.fullNameLabel}</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder={t.fullNamePlaceholder}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="email">{t.emailLabelForm}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={t.emailPlaceholder}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="subject">{t.subjectLabel}</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder={t.subjectPlaceholder}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="message">{t.messageLabel}</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        placeholder={t.messagePlaceholder}
                      ></textarea>
                    </div>

                    <button type="submit" className="contact-submit-button" disabled={loading}>
                      {loading ? t.submitting : t.submitButton}
                      <span aria-hidden="true">↗</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* الشريط المخصص للتواصل السريع المباشر وتصميم الأزرار المبهر */}
        <section className="quick-social-section" id="quick-social-section">
          <div className="programs-container">
            <div className="quick-social-header">
              <span className="quick-badge">⚡ {t.quickContactTitle}</span>
              <p>{t.quickContactSubtitle}</p>
            </div>

            <div className="quick-social-grid">
              
              {/* WhatsApp Card */}
              <div className="social-card whatsapp-card">
                <div className="social-logo-box">
                  <img src="/images/whatsapp.png" alt="WhatsApp" />
                </div>
                <a href="https://wa.me/213666133328" target="_blank" rel="noopener noreferrer" className="social-action-btn wa-btn">
                  WhatsApp
                </a>
              </div>

              {/* Telegram Card */}
              <div className="social-card telegram-card">
                <div className="social-logo-box">
                  <img src="/images/telegram.png" alt="Telegram" />
                </div>
                <a href="https://t.me/blzbilal" target="_blank" rel="noopener noreferrer" className="social-action-btn tg-btn">
                  Telegram
                </a>
              </div>

              {/* Gmail Card */}
              <div className="social-card gmail-card">
                <div className="social-logo-box">
                  <img src="/images/gmail.png" alt="Gmail" />
                </div>
                <a href="mailto:bllblouzi@gmail.com" className="social-action-btn gm-btn">
                  Gmail
                </a>
              </div>

              {/* Facebook Card */}
              <div className="social-card facebook-card">
                <div className="social-logo-box">
                  <img src="/images/facebook.png" alt="Facebook" />
                </div>
                <a href="https://facebook.com/profile.php?id=100063915678167" target="_blank" rel="noopener noreferrer" className="social-action-btn fb-btn">
                  Facebook
                </a>
              </div>

              {/* Instagram Card */}
              <div className="social-card instagram-card">
                <div className="social-logo-box">
                  <img src="/images/instagram.png" alt="Instagram" />
                </div>
                <a href="https://instagram.com/o_gh_o?psln=b2EwNDBjN2d3MWh3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-action-btn ig-btn">
                  Intagram
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* RESUME / CV SECTION */}
        <section className="why-section" id="resume">
          <div className="programs-container">
            <div className="cv-card-wrapper">
              <div className="cv-header">
                <div>
                  <h2>{t.cvTitle}</h2>
                  <span className="cv-subtitle">{t.cvSubtitle}</span>
                </div>
              </div>

              <p className="cv-desc">{t.cvDescription}</p>

              <div className="cv-skills-block">
                <h4>{t.skillsTitle}</h4>
                <div className="skills-tags">
                  {t.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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