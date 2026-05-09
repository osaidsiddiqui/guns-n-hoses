import { useEffect } from "react";
import Services, { SERVICES } from "../components/Services";
import ServiceAreas from "../components/ServiceAreas";
import CTA from "../components/CTA";

export default function ServicesPage() {
  useEffect(() => { document.title = "Services | Guns n Hoses"; }, []);
  return (
    <>
      <section className="pt-36 pb-10 container-px mx-auto text-center max-w-3xl">
        <span className="text-gold font-display uppercase tracking-widest text-sm">Services</span>
        <h1 className="h-display text-5xl text-sand mt-3">Pro Pressure Washing, Top to Bottom</h1>
        <p className="text-sand/75 mt-5">{SERVICES.length} core services for residential & commercial properties.</p>
      </section>
      <Services />
      <ServiceAreas />
      <CTA />
    </>
  );
}
