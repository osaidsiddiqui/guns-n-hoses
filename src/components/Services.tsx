import { motion } from "framer-motion";
import { Home, Cloud, Wind, Sparkles, SprayCan, Trash2, Layers } from "lucide-react";

export const SERVICES = [
  { icon: Home, title: "House Washing", desc: "Safe and effective exterior cleaning that restores curb appeal." },
  { icon: Cloud, title: "Roof Cleaning", desc: "Soft wash roof cleaning that removes algae, moss, and buildup." },
  { icon: Wind, title: "Gutter Cleaning", desc: "Professional gutter cleaning for proper drainage and protection." },
  { icon: Sparkles, title: "Window Cleaning", desc: "Crystal-clear windows for homes and commercial properties." },
  { icon: SprayCan, title: "Graffiti Removal", desc: "Fast and effective graffiti removal solutions." },
  { icon: Trash2, title: "Waste Removal", desc: "Exterior cleanup and property washing solutions." },
  { icon: Layers, title: "Stripping Services", desc: "Professional stripping and surface restoration services." },
];

export default function Services() {
  return (
    <section className="py-24 container-px mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-gold font-display uppercase tracking-widest text-sm">What We Do</span>
        <h2 className="h-display text-4xl sm:text-5xl text-sand mt-3">Premium Pressure Washing Services</h2>
        <p className="text-sand/70 mt-4">Top-to-bottom exterior cleaning for residential and commercial properties.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card p-7 group"
          >
            <div className="w-14 h-14 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-charcoal transition">
              <s.icon size={26} />
            </div>
            <h3 className="h-display text-xl text-sand">{s.title}</h3>
            <p className="text-sand/65 mt-2 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
