import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Suggestions.css";

const content = {
  ar: {
    dir: "rtl",
    langButton: "EN",
    nav: ["الرئيسية", "برامجنا", "تعرف علينا", "طلب مشروع", "تواصل معنا", "الاقتراحات"],
    badge: "شاركنا أفكارك وآراءك",
    heroTitle: "لوحة اقتراحات",
    heroAccent: "المستخدمين",
    heroDescription: "نؤمن بأن أفضل البرمجيات تُبنى بمشاركة الأفكار. اترك اقتراحك أو فكرتك لتظهر للمجتمع وتساهم في تطوير FlowSoft.",
    
    formTitle: "أضف اقتراحاً جديداً",
    nameLabel: "الاسم الكريم",
    namePlaceholder: "أدخل اسمك أو اسم المستعار",
    suggestionLabel: "نص الاقتراح أو الفكرة",
    suggestionPlaceholder: "اكتب فكرتك أو اقتراحك لتطوير برامجنا هنا...",
    submitBtn: "نشر الاقتراح",
    successMsg: "تم نشر اقتراحك بنجاح وشكراً لمساهمتك!",

    listTitle: "اقتراحات وملاحظات المجتمع",
    noSuggestions: "لا توجد اقتراحات حتى الآن. كن أول من يشاركنا فكرته!",
    
    adminToggleOn: "🔓 وضع الإدارة (مفعل للحذف)",
    adminToggleOff: "🔒 تفعيل وضع الحذف للإدارة",
    adminPassPrompt: "أدخل كلمة مرور الإدارة:",
    wrongPass: "كلمة المرور غير صحيحة!",
    deleteBtn: "حذف",

    footerDescription: "حلول برمجية ذكية تجعل العمل أسهل.",
    rights: "جميع الحقوق محفوظة.",
  },

  en: {
    dir: "ltr",
    langButton: "ع",
    nav: ["Home", "Programs", "Get to know us", "Request Project", "Contact Us", "Suggestions"],
    badge: "Share your thoughts & ideas",
    heroTitle: "Community",
    heroAccent: "Suggestions",
    heroDescription: "We believe the best software is built together. Share your ideas to help shape the future of FlowSoft.",
    
    formTitle: "Submit a New Suggestion",
    nameLabel: "Your Name",
    namePlaceholder: "Enter your name or nickname",
    suggestionLabel: "Your Suggestion or Idea",
    suggestionPlaceholder: "Write your feature request or feedback here...",
    submitBtn: "Publish Suggestion",
    successMsg: "Your suggestion has been published successfully. Thank you!",

    listTitle: "Community Feedback & Ideas",
    noSuggestions: "No suggestions yet. Be the first to share an idea!",
    
    adminToggleOn: "🔓 Admin Mode (Delete Enabled)",
    adminToggleOff: "🔒 Enable Admin Delete",
    adminPassPrompt: "Enter admin password:",
    wrongPass: "Incorrect password!",
    deleteBtn: "Delete",

    footerDescription: "Smart software solutions that make work easier.",
    rights: "All rights reserved.",
  },
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

export default function Suggestions() {
  const [language, setLanguage] = useState("ar");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  
  // نظام الاقتراحات المحفوظة محلياً لتبقى عامة وتظهر للزوار
  const [suggestions, setSuggestions] = useState(() => {
    const saved = localStorage.getItem("flowsoft_suggestions");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [
      { id: 1, name: "أحمد بن عيسى", text: "أتمنى إضافة ميزة الوضع الليلي (Dark Mode) في جميع برامجكم القادمة.", date: "2026-10-09" },
      { id: 2, name: "سارة دحماني", text: "تطبيق المخطط الأسبوعي رائع جداً، هل يمكن إضافة تنبيهات سطح المكتب؟", date: "2026-10-10" }
    ];
  });

  // وضع الإدارة للحذف
  const [isAdmin, setIsAdmin] = useState(false);

  const t = content[language];
  const isArabic = language === "ar";

  function toggleLanguage() {
    setLanguage((current) => (current === "ar" ? "en" : "ar"));
  }

  useEffect(() => {
    localStorage.setItem("flowsoft_suggestions", JSON.stringify(suggestions));
  }, [suggestions]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newSuggestion = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    setSuggestions([newSuggestion, ...suggestions]);
    setName("");
    setText("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  }

  function handleDelete(id) {
    if (confirm("هل أنت متأكد من حذف هذا الاقتراح؟")) {
      setSuggestions(suggestions.filter((item) => item.id !== id));
    }
  }

  function handleAdminLogin() {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      const pass = prompt(t.adminPassPrompt);
      if (pass === "bilal2026") { // كلمة السر الخاصة بك كمدير
        setIsAdmin(true);
      } else if (pass !== null) {
        alert(t.wrongPass);
      }
    }
  }

  return (
    <div className={`programs-page suggestions-page ${isArabic ? "programs-ar" : "programs-en"}`} dir={t.dir} lang={language}>
      {/* HEADER */}
      <header className="programs-header">
        <div className="programs-header-inner">
          <Brand />

          <nav className="programs-nav" aria-label="Main navigation">
            <Link to="/">{t.nav[0]}</Link>
            <Link to="/programs">{t.nav[1]}</Link>
            <Link to="/about">{t.nav[2]}</Link>
            <Link to="/request">{t.nav[3]}</Link>
            <Link to="/contact">{t.nav[4]}</Link>
            <Link to="/suggestions" className="active">{t.nav[5]}</Link>
          </nav>

          <button className="program-language-button" type="button" onClick={toggleLanguage} aria-label="Switch language">
            {t.langButton}
          </button>
        </div>
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

            <p style={{ fontSize: "17px", lineHeight: "1.9", maxWidth: "780px", margin: "16px auto 24px", color: "#475569", fontWeight: "500" }}>
              {t.heroDescription}
            </p>

            <button onClick={handleAdminLogin} className="admin-toggle-btn">
              {isAdmin ? t.adminToggleOn : t.adminToggleOff}
            </button>
          </div>
        </section>

        {/* SUBMISSION & FEED SECTION */}
        <section className="programs-section">
          <div className="programs-container">
            <div className="suggestions-layout">
              
              {/* نموذج إرسال اقتراح */}
              <div className="suggestion-form-card">
                <h3>{t.formTitle}</h3>
                
                {success && (
                  <div className="suggestion-alert-success">
                    {t.successMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="suggestion-form">
                  <div className="form-group">
                    <label>{t.nameLabel}</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder={t.namePlaceholder}
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.suggestionLabel}</label>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      rows="4"
                      required
                      placeholder={t.suggestionPlaceholder}
                    ></textarea>
                  </div>

                  <button type="submit" className="suggestion-submit-btn">
                    {t.submitBtn} <span>✨</span>
                  </button>
                </form>
              </div>

              {/* قائمة الاقتراحات العامة */}
              <div className="suggestions-list-container">
                <h3>{t.listTitle} ({suggestions.length})</h3>

                {suggestions.length === 0 ? (
                  <p className="no-suggestions">{t.noSuggestions}</p>
                ) : (
                  <div className="suggestions-grid">
                    {suggestions.map((item) => (
                      <div className="suggestion-item-card" key={item.id}>
                        <div className="suggestion-card-header">
                          <span className="sug-name">{item.name}</span>
                          <span className="sug-date">{item.date}</span>
                        </div>
                        <p className="sug-text">{item.text}</p>
                        
                        {isAdmin && (
                          <button onClick={() => handleDelete(item.id)} className="sug-delete-btn">
                            🗑️ {t.deleteBtn}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
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
            <Link to="/suggestions">{t.nav[5]}</Link>
          </nav>

          <div className="footer-copy">
            © {new Date().getFullYear()} FlowSoft. {t.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}