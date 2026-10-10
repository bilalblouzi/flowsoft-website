import "./Brand.css";

export default function Brand({ compact = false }) {
  return (
    <a
      href="/"
      className={`brand ${compact ? "brand-compact" : ""}`}
      aria-label="FlowSoft - الصفحة الرئيسية"
    >
      <img
        src="/images/flowsoft-logo.png"
        alt="FlowSoft"
        className="brand-logo"
      />

      {!compact && (
        <span className="brand-text">
          <strong>FlowSoft</strong>
          <span>Smart Software Solutions</span>
        </span>
      )}
    </a>
  );
}