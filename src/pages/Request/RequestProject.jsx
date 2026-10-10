import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import "./RequestProject.css";

const content = {
  ar: {
    dir: "rtl",
    langButton: "EN",
    nav: ["الرئيسية", "برامجنا", "تعرف علينا", "طلب مشروع", "تواصل معنا"],
    badge: "تطوير حلول برمجية مخصصة",
    heroTitle: "اطلب مشروعك",
    heroAccent: "الخاص الآن",
    heroDescription:
      "شاركنا تفاصيل فكرتك أو نظامك المطلوب، وسيقوم فريق FlowSoft بالدراسة والتحليل لتقديم العرض التقني والزمني الأناسب لأعمالك.",
    
    // النصوص الإضافية المماثلة لصفحة تواصل معنا
    instantNoticeLine1: "يمكنك ملء الاستمارة أدناه وسيصلنا طلبك فوراً ونرد عليك،",
    instantNoticeLine2Prefix: "أو التواصل معنا ",
    instantNoticeLine2Accent: "بشكل مباشر وسريع",
    instantNoticeLine2Suffix: " عبر إحدى المنصات التالية:",

    heroFormBtn: "اطلب مشروعك",
    heroQuickBtn: "التواصل السريع",
    quickContactTitle: "للتواصل السريع المباشر",
    quickContactSubtitle: "اختر منصتك المفضلة لبدء محادثة فورية معنا",

    formTitle: "تفاصيل الطلب",
    formAccent: "والمواصفات",
    formDescription:
      "يرجى ملء النموذج أدناه بكل دقة لنتمكن من فهم متطلبات مشروعك بشكل أفضل.",
    
    projectTypeLabel: "نوع المشروع المطلوب",
    projectTypes: [
      "نظام إداري ",
      "تطبيق ويب مخصص (Web App)",
      "برنامج لسطح المكتب (Desktop App)",
      "حلول تعليمية ",
      "استشارة وتطوير برجمي آخر",
    ],
    budgetLabel: "الميزانية المتوقعة (اختياري)",
    budgetOptions: [
      "غير محددة بعد",
      "أقل من 100,000 د.ج",
      "100,000 - 300,000 د.ج",
      "أكثر من 300,000 د.ج",
    ],
    timelineLabel: "الإطار الزمني للتنفيذ",
    timelineOptions: [
      "عاجل (في أقرب وقت)",
      "خلال شهر",
      "خلال 2 إلى 3 أشهر",
      "غير مستعجل",
    ],
    
    detailsLabel: "شرح تفاصيل المشروع والمتطلبات",
    detailsPlaceholder:
      "اشرح لنا الهدف من البرنامج، أهم الوظائف والميزات المطلوبة، وأي ملاحظات تقنية إضافية...",
    
    fileLabel: "إرفاق ملف توضيحي أو دفتر شروط (اختياري)",
    fileHint: "يمكنك رفع ملفات (PDF, DOCX, PNG, ZIP) بحجم أقصى 10 ميغابايت",

    clientInfoTitle: "معلومات التواصل",
    fullNameLabel: "الاسم الكامل",
    fullNamePlaceholder: "",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "example@domain.com",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "+213 XX XX XX XX",
    companyLabel: "اسم المؤسسة / الشركة (اختياري)",
    companyPlaceholder: "",

    submitButton: "إرسال طلب المشروع",
    submitting: "جاري الإرسال...",
    successMessage: "تم إرسال طلبك بنجاح! سنتواصل معك في أقرب وقت ممكن.",

    whyTitle: "لماذا تطلب مشروعك من",
    whyAccent: "FlowSoft؟",
    whyDescription:
      "نلبي احتياجات المؤسسات والأفراد بدقة متناهية مع التركيز على سهولة الاستخدام، الأمان، والدعم الفني المستمر.",
    benefits: [
      ["01", "تحليل دقيق للمتطلبات", "ندرس فكرتك ونقترح عليك أفضل الحلول البرمجية الأكثر كفاءة وأقل تكلفة."],
      ["02", "واجهات حديثة وسهلة", "نضمن تجربة استخدام سلسة ومريحة للمستخدمين والموظفين."],
      ["03", "أمان واعتمادية", "أنظمة برمجية مستقرة بحماية عالية وأداء سريع."],
      ["04", "متابعة ودعم مستمر", "نلبي احتياجات الصيانة والتحديث والتطوير حسب توسع أعمالك."],
    ],

    footerDescription: "حلول برمجية ذكية تجعل العمل أسهل.",
    rights: "جميع الحقوق محفوظة.",
  },

  en: {
    dir: "ltr",
    langButton: "ع",
    nav: ["Home", "Programs", "Get to know us", "Request Project", "Contact Us"],
    badge: "Custom Software Development",
    heroTitle: "Request Your",
    heroAccent: "Custom Project",
    heroDescription:
      "Share the details of your idea or required software system. FlowSoft will analyze your request and provide a tailored technical proposal.",

    instantNoticeLine1: "You can fill out the form below and we will receive your request instantly,",
    instantNoticeLine2Prefix: "or get in touch with us ",
    instantNoticeLine2Accent: "directly and instantly",
    instantNoticeLine2Suffix: " via any of the following platforms:",

    heroFormBtn: "Request Project",
    heroQuickBtn: "Instant Contact",
    quickContactTitle: "Instant Direct Contact",
    quickContactSubtitle: "Choose your favorite platform to chat with us immediately",

    formTitle: "Project Details",
    formAccent: "and Specifications",
    formDescription:
      "Please fill out the form below carefully so we can better understand your project requirements.",

    projectTypeLabel: "Project Type",
    projectTypes: [
      "Administrative System ",
      "Custom Web Application",
      "Desktop Application",
      "Educational ",
      "Other Custom Development / Consultation",
    ],
    budgetLabel: "Estimated Budget (Optional)",
    budgetOptions: [
      "Not determined yet",
      "Under 100,000 DZD",
      "100,000 - 300,000 DZD",
      "Over 300,000 DZD",
    ],
    timelineLabel: "Expected Timeline",
    timelineOptions: [
      "Urgent (As soon as possible)",
      "Within 1 month",
      "Within 2 to 3 months",
      "Flexible timeline",
    ],

    detailsLabel: "Project Description & Requirements",
    detailsPlaceholder:
      "Explain the goal of the software, key required features, and any additional technical notes...",

    fileLabel: "Attach Document or Specification File (Optional)",
    fileHint: "You can upload (PDF, DOCX, PNG, ZIP) up to 10MB",

    clientInfoTitle: "Contact Information",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "",
    emailLabel: "Email Address",
    emailPlaceholder: "example@domain.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+213 XXX XX XX XX",
    companyLabel: "Company / Organization Name (Optional)",
    companyPlaceholder: "",

    submitButton: "Submit Project Request",
    submitting: "Submitting...",
    successMessage: "Your request has been submitted successfully! We will contact you soon.",

    whyTitle: "Why Request Your Project From",
    whyAccent: "FlowSoft?",
    whyDescription:
      "We deliver tailored software systems with high emphasis on user experience, security, and long-term support.",
    benefits: [
      ["01", "Accurate Requirement Analysis", "We study your idea and recommend the most cost-effective and powerful tech stack."],
      ["02", "Modern & Intuitive UI", "Clean design ensuring high productivity for end-users and administrators."],
      ["03", "Security & Reliability", "Stable software applications with robust security and fast performance."],
      ["04", "Continuous Support", "Long-term maintenance and scalable upgrades as your organization grows."],
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

export default function RequestProject() {
const [language, setLanguage] = useState(() => {
  return localStorage.getItem("flowsoft_lang") || "ar";
});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = content[language];
  const isArabic = language === "ar";

const pageTitle = isArabic
  ? "طلب مشروع | FlowSoft - تطوير البرمجيات"
  : "Request a Project | FlowSoft - Software Development";

const pageDescription = isArabic
  ? "اطلب مشروعك البرمجي من FlowSoft. شاركنا فكرتك ومتطلباتك للحصول على حلول برمجية مخصصة للمؤسسات والأفراد."
  : "Request a custom software project from FlowSoft. Share your idea and requirements to explore tailored software solutions for businesses and individuals.";


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
        body: formData
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
      className={`programs-page request-page ${isArabic ? "programs-ar" : "programs-en"}`}
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
            <Link to="/request" className="active">{t.nav[3]}</Link>
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
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t.nav[2]}</Link>
            <Link to="/request" onClick={() => setIsMenuOpen(false)} className="active">{t.nav[3]}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t.nav[4]}</Link>
          </div>
        )}
      </header>

      <main>
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

            <p style={{ fontSize: "17px", lineHeight: "1.9", maxWidth: "780px", margin: "16px auto 14px", color: "#475569", fontWeight: "500" }}>
              {t.heroDescription}
            </p>

            <p style={{ fontSize: "15px", color: "#1e293b", lineHeight: "1.8", fontWeight: "600", margin: "0 auto 24px", maxWidth: "700px" }}>
              <span>{t.instantNoticeLine1}</span>
              <br />
              <span>{t.instantNoticeLine2Prefix}</span>
              <strong style={{ color: "#2563eb", fontWeight: "700" }}>{t.instantNoticeLine2Accent}</strong>
              <span>{t.instantNoticeLine2Suffix}</span>
            </p>

            <div className="hero-buttons-group">
              <a href="#request-form" className="programs-hero-button primary-btn">
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

        <section className="programs-section" id="request-form">
          <div className="programs-container">
            <div className="programs-section-heading">
              <div>
                <span className="section-label">{t.badge}</span>
                <h2>
                  {t.formTitle}
                  <span> {t.formAccent}</span>
                </h2>
              </div>
              <p>{t.formDescription}</p>
            </div>

            <div className="request-form-card">
              {submitted ? (
                <div className="request-success-alert">
                  <div className="success-icon">✓</div>
                  <h3>{t.successMessage}</h3>
                  <button
                    type="button"
                    className="cta-button"
                    style={{ marginTop: "20px" }}
                    onClick={() => setSubmitted(false)}
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="request-form">
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label htmlFor="projectType">{t.projectTypeLabel}</label>
                      <select id="projectType" name="projectType" required defaultValue="">
                        <option value="" disabled>-- اختر نوع المشروع --</option>
                        {t.projectTypes.map((type, idx) => (
                          <option key={idx} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="budget">{t.budgetLabel}</label>
                      <select id="budget" name="budget" defaultValue="">
                        {t.budgetOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="timeline">{t.timelineLabel}</label>
                      <select id="timeline" name="timeline" defaultValue="">
                        {t.timelineOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="details">{t.detailsLabel}</label>
                      <textarea
                        id="details"
                        name="details"
                        rows="5"
                        required
                        placeholder={t.detailsPlaceholder}
                      ></textarea>
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="fileAttachment">{t.fileLabel}</label>
                      <input type="file" id="fileAttachment" name="fileAttachment" className="file-input" />
                      <small className="form-hint">{t.fileHint}</small>
                    </div>

                    <div className="form-divider full-width">
                      <h3>{t.clientInfoTitle}</h3>
                    </div>

                    <div className="form-group">
                      <label htmlFor="fullName">{t.fullNameLabel}</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder={t.fullNamePlaceholder}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">{t.emailLabel}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={t.emailPlaceholder}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">{t.phoneLabel}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder={t.phonePlaceholder}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">{t.companyLabel}</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder={t.companyPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="form-submit-wrapper">
                    <button type="submit" className="request-submit-button" disabled={loading}>
                      {loading ? t.submitting : t.submitButton}
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* شريط أزرار التواصل الاجتماعي الفخم */}
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
                  Instagram
                </a>
              </div>

            </div>
          </div>
        </section>

        <section className="why-section" id="why-flowsoft">
          <div className="programs-container why-inner">
            <div className="why-content">
              <span className="section-label">{t.badge}</span>
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
      </main>

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