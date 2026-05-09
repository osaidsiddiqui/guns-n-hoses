import { useEffect, useState } from "react";

const logo = "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fc2bf693da44b427d999cace915102b8d?format=webp&width=800&height=1200";

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;
        return next > 100 ? 100 : next;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
        <div className="absolute inset-0 rounded-full border-t-2 border-gold animate-spin" />
        <img src={logo} alt="Guns n Hoses" className="h-28 w-28 object-contain p-3" />
      </div>
      <div className="mt-8 w-56 h-1 bg-graphite rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold/30 via-gold to-gold-light transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-gold/80 font-display tracking-[0.3em] text-sm">{Math.floor(progress)}%</p>
    </div>
  );
}
