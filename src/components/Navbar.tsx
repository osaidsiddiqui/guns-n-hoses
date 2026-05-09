import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn, PHONE, PHONE_TEL } from "../lib/utils";

const logo = "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fc2bf693da44b427d999cace915102b8d?format=webp&width=800&height=1200";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl border-b border-gold/30 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-px mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Guns n Hoses" className="h-12 w-auto drop-shadow" />
          <span className="hidden sm:block font-display uppercase text-sand text-lg tracking-widest">
            Guns <span className="text-gold">n</span> Hoses
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 font-display uppercase tracking-wider text-sm transition-all rounded-md",
                  isActive
                    ? "text-gold"
                    : "text-sand/80 hover:text-gold hover:backdrop-blur"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-sand/90 hover:text-gold">
            <Phone size={16} /> <span className="text-sm">{PHONE}</span>
          </a>
          <Link to="/contact" className="btn-gold text-sm py-2.5">Free Estimate</Link>
        </div>

        <button
          className="lg:hidden text-sand p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-black border-l border-gold/30 shadow-2xl",
            "flex flex-col p-6 transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-10">
            <img src={logo} alt="Guns n Hoses" className="h-10" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-sand">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col bg-charcoal/80 -mx-6 -mt-6 px-6 pt-6 pb-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-3 px-2 text-2xl font-display uppercase tracking-wide border-b border-white/10",
                    isActive ? "text-gold" : "text-sand"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <a href={`tel:${PHONE_TEL}`} className="btn-outline w-full">
              <Phone size={16} /> {PHONE}
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold w-full">
              Free Estimate
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
