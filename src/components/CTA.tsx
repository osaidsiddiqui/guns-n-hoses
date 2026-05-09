import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { PHONE, PHONE_TEL } from "../lib/utils";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-graphite to-black" />
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />
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
