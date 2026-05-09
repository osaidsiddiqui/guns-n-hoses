import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Award, Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

      {/* gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-50 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container-px mx-auto relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 text-gold text-xs font-display uppercase tracking-widest mb-6">
            Licensed • Bonded • Insured
          </span>
          <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-sand leading-[1.05]">
            Commercial & Residential <span className="text-gold">Pressure Washing</span> Done Right
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80 leading-relaxed">
            Professional pressure washing and soft washing for homes and businesses across Thurston, Lewis, and Pierce Counties.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold">Get Free Estimate <ArrowRight size={18} /></Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: "500+", l: "Projects" },
              { n: "10+", l: "Years Exp." },
              { n: "5★", l: "Rated Service" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-display text-gold">{s.n}</div>
                <div className="text-sand/60 text-xs uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex lg:col-span-4 flex-col gap-3"
        >
          {[
            { icon: Shield, t: "Fully Insured", d: "Licensed, bonded, insured" },
            { icon: Award, t: "Pro Equipment", d: "Commercial-grade gear" },
            { icon: Star, t: "Eco-Friendly", d: "Safe cleaning solutions" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="glass rounded-xl p-4 flex items-center gap-4 hover:border-gold/40 transition">
              <div className="p-3 rounded-lg bg-gold/10 text-gold"><Icon size={22} /></div>
              <div>
                <div className="text-sand font-semibold">{t}</div>
                <div className="text-sand/60 text-xs">{d}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
