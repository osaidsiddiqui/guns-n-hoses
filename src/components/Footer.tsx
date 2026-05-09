import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, MapPin } from "lucide-react";
import { PHONE, PHONE_TEL, EMAIL, FB, IG } from "../lib/utils";

const logo = "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fc2bf693da44b427d999cace915102b8d?format=webp&width=800&height=1200";

const services = ["House Washing", "Roof Cleaning", "Gutter Cleaning", "Window Cleaning", "Graffiti Removal", "Stripping Services"];
const areas = ["Tacoma", "Olympia", "Lacey", "Lakewood", "Tumwater", "Yelm", "Spanaway", "Chehalis"];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/30 pt-16 pb-8">
      <div className="container-px mx-auto grid gap-10 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Guns n Hoses" className="h-14" />
            <span className="font-display uppercase text-sand tracking-widest">Guns <span className="text-gold">n</span> Hoses</span>
          </div>
          <p className="text-sand/60 text-sm leading-relaxed">Premium commercial & residential pressure washing. Licensed, bonded & insured.</p>
          <div className="flex gap-3 mt-5">
            <a href={FB} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition"><Facebook size={18} /></a>
            <a href={IG} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition"><Instagram size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="h-display text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sand/70 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="h-display text-gold mb-4">Services</h4>
          <ul className="space-y-2 text-sand/70 text-sm">
            {services.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="h-display text-gold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sand/80 text-sm">
            <li><a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-gold"><Phone size={16}/> {PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-gold break-all"><Mail size={16}/> {EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-1"/> <span>{areas.slice(0,4).join(", ")} & surrounding WA areas</span></li>
          </ul>
        </div>
      </div>

      <div className="container-px mx-auto mt-12 pt-6 border-t border-white/10 text-center text-sand/50 text-xs">
        © {new Date().getFullYear()} Guns n Hoses Pressure Washing. All rights reserved.
      </div>
    </footer>
  );
}
