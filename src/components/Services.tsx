import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SERVICES = [
  { image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F5698c425c5b14ff28bf57c7b61ef4d59?format=webp&width=800&height=1200", title: "House Washing", desc: "Safe and effective exterior cleaning that restores curb appeal." },
  { image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F5c30f5222ea54ec3bc3f2ff56bfa486c?format=webp&width=800&height=1200", title: "Roof Cleaning", desc: "Soft wash roof cleaning that removes algae, moss, and buildup." },
  { image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F13281b4af40c4439ac7f8f7add6b19f0?format=webp&width=800&height=1200", title: "Gutter Cleaning", desc: "Professional gutter cleaning for proper drainage and protection." },
  { image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fb14c227bf2ba4466bd878a5400e3df88?format=webp&width=800&height=1200", title: "Window Cleaning", desc: "Crystal-clear windows for homes and commercial properties." },
  { image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fdb3e3b48c4f54f75a90c471fce534456?format=webp&width=800&height=1200", title: "Graffiti Removal", desc: "Fast and effective graffiti removal solutions." },
  { image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F9a81678327984739abd017f1b213110c?format=webp&width=800&height=1200", title: "Waste Removal", desc: "Exterior cleanup and property washing solutions." },
  { image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fec942d74da2d4d8bb5f00bdfd44b3cc6?format=webp&width=800&height=1200", title: "Stripping Services", desc: "Professional stripping and surface restoration services." },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleServices = [
    SERVICES[currentIndex],
    SERVICES[(currentIndex + 1) % SERVICES.length],
    SERVICES[(currentIndex + 2) % SERVICES.length],
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  };

  return (
    <section className="py-24 container-px mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-gold font-display uppercase tracking-widest text-sm">What We Do</span>
        <h2 className="h-display text-4xl sm:text-5xl text-sand mt-3">Premium Pressure Washing Services</h2>
        <p className="text-sand/70 mt-4">Top-to-bottom exterior cleaning for residential and commercial properties.</p>
      </div>

      <div className="relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((s, i) => (
            <motion.div
              key={`${currentIndex}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="card p-7 group overflow-hidden"
            >
              <div className="w-full h-40 rounded-lg mb-5 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
              </div>
              <h3 className="h-display text-xl text-sand">{s.title}</h3>
              <p className="text-sand/65 mt-2 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {SERVICES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === currentIndex ? "bg-gold" : "bg-gold/30"
                }`}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
