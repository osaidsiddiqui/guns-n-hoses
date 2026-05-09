import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  { cat: "House Washing", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" },
  { cat: "Roof Cleaning", url: "https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=800&q=80" },
  { cat: "Commercial", url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80" },
  { cat: "Residential", url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" },
  { cat: "House Washing", url: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80" },
  { cat: "Graffiti Removal", url: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80" },
  { cat: "Commercial", url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80" },
  { cat: "Residential", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
  { cat: "Roof Cleaning", url: "https://images.unsplash.com/photo-1632758840009-89cb98aa42f1?auto=format&fit=crop&w=800&q=80" },
];

const cats = ["All", "House Washing", "Roof Cleaning", "Commercial", "Residential", "Graffiti Removal"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const list = filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  return (
    <section className="container-px mx-auto py-16">
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm font-display uppercase tracking-wider transition ${
              filter === c ? "bg-gold text-charcoal" : "border border-white/15 text-sand/80 hover:border-gold hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {list.map((p, i) => (
          <motion.div
            key={p.url + i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/10 cursor-pointer group relative"
            onClick={() => setOpen(p.url)}
          >
            <img src={p.url} alt={p.cat} loading="lazy" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <span className="text-gold font-display uppercase tracking-wider text-sm">{p.cat}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <button className="absolute top-6 right-6 text-sand"><X size={32} /></button>
            <img src={open} className="max-h-[90vh] max-w-full rounded-lg" alt="" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
