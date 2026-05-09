import { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ServiceAreas from "../components/ServiceAreas";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Index() {
  useEffect(() => { document.title = "Guns n Hoses | Pressure Washing — WA"; }, []);
  return (
    <>
      <Hero />
      <Services />
      <ServiceAreas />
      <Testimonials />
      <CTA />
    </>
  );
}
