import { useEffect } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { PHONE, PHONE_TEL, EMAIL, FB, IG } from "../lib/utils";

export default function Contact() {
  useEffect(() => { document.title = "Contact | Guns n Hoses"; }, []);
  return (
    <section className="pt-36 pb-24 container-px mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-gold font-display uppercase tracking-widest text-sm">Contact</span>
        <h1 className="h-display text-5xl text-sand mt-3">Get a Free Estimate</h1>
        <p className="text-sand/75 mt-4">Tell us about your property — we'll get back fast.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <a href={`tel:${PHONE_TEL}`} className="card p-5 flex items-center gap-4 block">
            <div className="p-3 rounded-lg bg-gold/10 text-gold"><Phone /></div>
            <div>
              <div className="text-sand/60 text-xs uppercase tracking-wider">Call</div>
              <div className="text-sand font-semibold">{PHONE}</div>
            </div>
          </a>
          <a href={`mailto:${EMAIL}`} className="card p-5 flex items-center gap-4 block">
            <div className="p-3 rounded-lg bg-gold/10 text-gold"><Mail /></div>
            <div className="min-w-0">
              <div className="text-sand/60 text-xs uppercase tracking-wider">Email</div>
              <div className="text-sand font-semibold break-all">{EMAIL}</div>
            </div>
          </a>
          <div className="card p-5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-gold/10 text-gold"><MapPin /></div>
            <div>
              <div className="text-sand/60 text-xs uppercase tracking-wider">Service Area</div>
              <div className="text-sand font-semibold">Thurston, Lewis & Pierce Counties</div>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <a href={FB} target="_blank" rel="noreferrer" className="p-3 rounded-md border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition"><Facebook size={20} /></a>
            <a href={IG} target="_blank" rel="noreferrer" className="p-3 rounded-md border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition"><Instagram size={20} /></a>
          </div>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
