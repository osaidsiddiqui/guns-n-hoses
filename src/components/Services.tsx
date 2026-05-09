import { motion } from "framer-motion";

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
    </section>
  );
}
