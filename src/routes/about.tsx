import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import CTA from "../components/CTA";

const points = [
  "Commercial-grade pressure & soft-wash equipment",
  "Eco-friendly cleaning solutions",
  "Licensed, bonded & fully insured",
  "Trained, professional, and respectful crews",
  "Residential and commercial expertise",
  "Free, no-obligation estimates",
];

const timeline = [
  { year: "Day 1", title: "Free Estimate", desc: "We assess your property and provide a transparent quote." },
  { year: "Day 2", title: "Schedule", desc: "We pick a convenient day that works around your routine." },
  { year: "Service Day", title: "Pro Cleaning", desc: "Our team arrives on time with all equipment ready." },
  { year: "Aftercare", title: "Walkthrough", desc: "We confirm satisfaction and offer maintenance guidance." },
];

export default function About() {
  useEffect(() => { document.title = "About | Guns n Hoses"; }, []);
  return (
    <>
      <section className="pt-36 pb-16 container-px mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="max-w-3xl">
          <span className="text-gold font-display uppercase tracking-widest text-sm">About Us</span>
          <h1 className="h-display text-5xl sm:text-6xl text-sand mt-3">Built On Pride. Driven by Pressure.</h1>
          <p className="text-sand/75 mt-5 text-lg leading-relaxed">
            Guns n Hoses is a Pacific Northwest pressure washing company committed to bringing properties back to life. We combine pro-grade equipment with a customer-first mindset to deliver results that protect and beautify what you own.
          </p>
        </motion.div>
      </section>

      <section className="container-px mx-auto pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <img src="https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=900&q=80" alt="Pressure washing in action" className="rounded-2xl border border-white/10 w-full" />
        <div>
          <h2 className="h-display text-3xl text-sand">Our Mission</h2>
          <p className="text-sand/70 mt-4">To restore curb appeal, extend property life, and deliver a premium service experience — every job, every time.</p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold mt-0.5" size={20} />
                <span className="text-sand/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-px mx-auto pb-24">
        <h2 className="h-display text-3xl text-sand text-center mb-10">How We Work</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {timeline.map((t, i) => (
            <motion.div key={t.title}
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
              viewport={{once:true}} transition={{duration:0.4, delay: i*0.1}}
              className="card p-6"
            >
              <div className="text-gold font-display tracking-widest text-xs">{t.year}</div>
              <div className="h-display text-xl text-sand mt-1">{t.title}</div>
              <p className="text-sand/65 text-sm mt-2">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
