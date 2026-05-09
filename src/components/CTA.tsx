import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { PHONE, PHONE_TEL } from "../lib/utils";

const CAROUSEL_IMAGES = [
  "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F5698c425c5b14ff28bf57c7b61ef4d59?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F5c30f5222ea54ec3bc3f2ff56bfa486c?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F13281b4af40c4439ac7f8f7add6b19f0?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fb14c227bf2ba4466bd878a5400e3df88?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fdb3e3b48c4f54f75a90c471fce534456?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F9a81678327984739abd017f1b213110c?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fec942d74da2d4d8bb5f00bdfd44b3cc6?format=webp&width=800&height=1200",
];

export default function CTA() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <img
        src={CAROUSEL_IMAGES[currentImageIndex]}
        alt="Service background"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px mx-auto relative text-center max-w-3xl">
        <h2 className="h-display text-4xl sm:text-5xl text-sand">
          Protect Your Property Before <span className="text-gold">Damage Gets Worse</span>
        </h2>
        <p className="mt-5 text-sand/80 text-lg">
          Restore your home or business with professional pressure washing services.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={`tel:${PHONE_TEL}`} className="btn-gold"><Phone size={18} /> Call {PHONE}</a>
          <Link to="/contact" className="btn-outline">Free Estimate</Link>
        </div>
      </div>
    </section>
  );
}
