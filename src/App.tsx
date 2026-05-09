import { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import FloatingButtons from "./components/FloatingButtons";
import Index from "./routes/index";
const About = lazy(() => import("./routes/about"));
const Services = lazy(() => import("./routes/services"));
const Gallery = lazy(() => import("./routes/gallery"));
const Contact = lazy(() => import("./routes/contact"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return null;
}

function RouteLoader() {
  return <div className="min-h-screen" />;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Suspense fallback={<RouteLoader />}><About /></Suspense>} />
          <Route path="/services" element={<Suspense fallback={<RouteLoader />}><Services /></Suspense>} />
          <Route path="/gallery" element={<Suspense fallback={<RouteLoader />}><Gallery /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<RouteLoader />}><Contact /></Suspense>} />
          <Route path="*" element={<Index />} />
        </Routes>
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}
