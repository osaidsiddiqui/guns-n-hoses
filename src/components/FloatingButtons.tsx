import { Phone, Mail } from "lucide-react";
import { PHONE_TEL, EMAIL } from "../lib/utils";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={`tel:${PHONE_TEL}`} className="p-4 rounded-full bg-gold text-charcoal shadow-glow hover:shadow-glow-lg hover:scale-110 transition" aria-label="Call us">
        <Phone size={20} />
      </a>
      <a href={`mailto:${EMAIL}`} className="p-4 rounded-full bg-graphite border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition" aria-label="Email us">
        <Mail size={20} />
      </a>
    </div>
  );
}
