import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ContactPage from "@/react-app/pages/Contact";
import AboutPage from "@/react-app/pages/About";
import PrivacyPage from "@/react-app/pages/Privacy";
import TermsPage from "@/react-app/pages/Terms";
import BlogPage from "@/react-app/pages/Blog";
import UnderstandingBMI from "@/react-app/pages/blog/UnderstandingBMI";
import BMICategories from "@/react-app/pages/blog/BMICategories";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/understanding-bmi-comprehensive-guide" element={<UnderstandingBMI />} />
        <Route path="/blog/bmi-weight-categories-explained" element={<BMICategories />} />
      </Routes>
    </Router>
  );
}
