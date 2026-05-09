import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = ["Tacoma, WA", "Spanaway, WA", "Chehalis, WA", "Lacey, WA", "Yelm, WA", "Rochester, WA", "Olympia, WA", "Hawks Prairie, WA", "Lakewood, WA", "Tumwater, WA"];

export default function ServiceAreas() {
  return (
    <section className="py-24 container-px mx-auto">
      <div className="text-center mb-12">
        <span className="text-gold font-display uppercase tracking-widest text-sm">Coverage</span>
        <h2 className="h-display text-4xl sm:text-5xl text-sand mt-3">Areas We Serve</h2>
        <p className="text-sand/70 mt-3 max-w-xl mx-auto">Proudly serving Thurston, Lewis, and Pierce Counties.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {areas.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
            className="card p-5 flex items-center gap-3"
          >
            <div className="relative">
              <MapPin className="text-gold" size={20} />
              <span className="absolute -inset-2 rounded-full bg-gold/20 blur-md animate-pulse" />
            </div>
            <span className="text-sand font-medium text-sm">{a}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
