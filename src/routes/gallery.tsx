import { useEffect } from "react";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";

export default function GalleryPage() {
  useEffect(() => { document.title = "Gallery | Guns n Hoses"; }, []);
  return (
    <>
      <section className="pt-36 pb-6 container-px mx-auto text-center max-w-3xl">
        <span className="text-gold font-display uppercase tracking-widest text-sm">Our Work</span>
        <h1 className="h-display text-5xl text-sand mt-3">Before, After & Beautiful</h1>
        <p className="text-sand/75 mt-4">A glimpse at the results we deliver across Washington.</p>
      </section>
      <Gallery />
      <CTA />
    </>
  );
}
