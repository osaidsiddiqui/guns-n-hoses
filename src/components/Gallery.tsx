import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SERVICES } from "./Services";

const photos = [
  { cat: "House Washing", url: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F5698c425c5b14ff28bf57c7b61ef4d59?format=webp&width=800&height=1200" },
  { cat: "Roof Cleaning", url: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F5c30f5222ea54ec3bc3f2ff56bfa486c?format=webp&width=800&height=1200" },
  { cat: "Gutter Cleaning", url: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F13281b4af40c4439ac7f8f7add6b19f0?format=webp&width=800&height=1200" },
  { cat: "Window Cleaning", url: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fb14c227bf2ba4466bd878a5400e3df88?format=webp&width=800&height=1200" },
  { cat: "Graffiti Removal", url: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fdb3e3b48c4f54f75a90c471fce534456?format=webp&width=800&height=1200" },
  { cat: "Waste Removal", url: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F9a81678327984739abd017f1b213110c?format=webp&width=800&height=1200" },
  { cat: "Stripping Services", url: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fec942d74da2d4d8bb5f00bdfd44b3cc6?format=webp&width=800&height=1200" },
];

const cats = ["All", "House Washing", "Roof Cleaning", "Gutter Cleaning", "Window Cleaning", "Graffiti Removal", "Waste Removal", "Stripping Services"];

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
