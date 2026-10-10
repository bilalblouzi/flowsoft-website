import { Routes, Route, Link, useParams } from "react-router-dom";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import RequestProject from "./pages/Request/RequestProject";
import Contact from "./pages/Contact/Contact";
import WeeklyPlanner from "./pages/WeeklyPlanner/WeeklyPlanner";
import About from "./pages/About/About";

function ProgramDetails() {
  const { id } = useParams();

  const programNames = {
    flow: "FLOW",
    yaman: "مدرسة يمان التعليمية",
  };

  const programName = programNames[id];

  return (
    <main className="details-page" dir="rtl">
      <div className="details-card">
        <div className="details-logo">F</div>

        {programName ? (
          <>
            <span className="details-label">FlowSoft</span>
            <h1>{programName}</h1>
            <p>
              اكتشف حلولنا البرمجية المصممة لتسهيل العمل
              وتنظيم المهام وتحسين الإنتاجية.
            </p>
          </>
        ) : (
          <>
            <h1>البرنامج غير موجود</h1>
            <p>لم نتمكن من العثور على البرنامج المطلوب.</p>
          </>
        )}

        <div className="details-actions">
          <Link to="/programs" className="details-button">
            استعراض البرامج
          </Link>

          <Link to="/" className="details-link">
            العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="details-page" dir="rtl">
      <div className="details-card">
        <h1>الصفحة غير موجودة</h1>
        <p>عذرًا، الصفحة التي تبحث عنها غير متاحة.</p>
        <Link to="/" className="details-button">
          العودة إلى الرئيسية
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/programs" element={<Programs />} />

      <Route path="/programs/:id" element={<ProgramDetails />} />
      <Route path="/request" element={<RequestProject />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/programs/weekly-planner" element={<WeeklyPlanner />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}