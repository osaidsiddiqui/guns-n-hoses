import logo from "../assets/logo.png";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
        <div className="absolute inset-0 rounded-full border-t-2 border-gold animate-spin" />
        <img src={logo} alt="Guns n Hoses" className="h-28 w-28 object-contain p-3" />
      </div>
      <div className="mt-8 w-56 h-1 bg-graphite rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-gold/30 via-gold to-gold-light animate-spray" />
      </div>
      <p className="mt-4 text-gold/80 font-display tracking-[0.3em] text-sm">LOADING</p>
    </div>
  );
}
