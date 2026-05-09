import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const items = [
  { name: "Megan R.", area: "Olympia, WA", text: "They made our home look brand new! Roof and siding are spotless. Crew was professional and on time." },
  { name: "David T.", area: "Tacoma, WA", text: "Best pressure washing service we've hired. Removed years of grime from our storefront. Highly recommend." },
  { name: "Sara L.", area: "Lacey, WA", text: "Quick quote, fair price, and the gutters have never looked cleaner. Will use Guns n Hoses again." },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = items[i];
  return (
    <section className="py-24 container-px mx-auto">
      <div className="text-center mb-12">
        <span className="text-gold font-display uppercase tracking-widest text-sm">Reviews</span>
        <h2 className="h-display text-4xl sm:text-5xl text-sand mt-3">What Clients Say</h2>
      </div>
      <div className="max-w-3xl mx-auto glass rounded-2xl p-10 text-center relative">
        <Quote className="text-gold mx-auto mb-4" size={40} />
        <p key={i} className="text-xl text-sand/90 italic leading-relaxed animate-fade-up">"{t.text}"</p>
        <div className="mt-6 flex items-center justify-center gap-1 text-gold">
          {[...Array(5)].map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
        </div>
        <div className="mt-3 font-display text-gold">{t.name}</div>
        <div className="text-sand/60 text-sm">{t.area}</div>
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-2 bg-sand/30"}`}
              aria-label={`testimonial ${k+1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
