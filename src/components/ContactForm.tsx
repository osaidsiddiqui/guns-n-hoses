import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const services = ["House Washing", "Roof Cleaning", "Gutter Cleaning", "Window Cleaning", "Graffiti Removal", "Waste Removal", "Stripping Services", "Other"];
const types = ["Residential", "Commercial"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "", service: services[0], type: types[0], message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request - ${data.service}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nProperty: ${data.type}\n\n${data.message}`
    );
    window.location.href = `mailto:gunsnhoses360@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="glass rounded-2xl p-10 text-center animate-fade-up">
        <CheckCircle2 className="text-gold mx-auto" size={56} />
        <h3 className="h-display text-2xl text-sand mt-4">Request Sent!</h3>
        <p className="text-sand/70 mt-2">We'll be in touch shortly to confirm your free estimate.</p>
      </div>
    );
  }

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gold/90 font-display">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );

  const inp = "w-full bg-charcoal/60 border border-white/10 focus:border-gold rounded-md px-4 py-3 text-sand outline-none transition placeholder:text-sand/30";

  return (
    <form onSubmit={submit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name"><input required className={inp} value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} placeholder="John Smith" /></Field>
        <Field label="Email"><input required type="email" className={inp} value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} placeholder="you@example.com" /></Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone"><input required className={inp} value={data.phone} onChange={(e)=>setData({...data,phone:e.target.value})} placeholder="(360) 000-0000" /></Field>
        <Field label="Property Type">
          <select className={inp} value={data.type} onChange={(e)=>setData({...data,type:e.target.value})}>
            {types.map(t => <option key={t}>{t}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Service Needed">
        <select className={inp} value={data.service} onChange={(e)=>setData({...data,service:e.target.value})}>
          {services.map(s => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Message"><textarea rows={5} className={inp} value={data.message} onChange={(e)=>setData({...data,message:e.target.value})} placeholder="Tell us about your project..." /></Field>
      <button type="submit" className="btn-gold w-full">Send Request</button>
    </form>
  );
}
