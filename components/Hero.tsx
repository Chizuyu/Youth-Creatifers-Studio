"use client";

export default function Hero() {

  const handleButtonClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-margin-mobile md:px-margin-tablet lg:px-margin-desktop bg-white overflow-hidden" id="hero">
      {/* Subtle atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#0071E3 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-max-width w-full text-center z-10">
        <span className="inline-block font-eyebrow text-eyebrow text-primary uppercase mb-6 tracking-[0.2em]">
          Established 2026
        </span>

        <h1 className="font-hero text-hero-mobile md:text-hero max-w-4xl mx-auto mb-10 leading-[1.1] tracking-tight">
          End-to-end event and digital solutions for the modern era.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => handleButtonClick("#contact")} className="w-full sm:w-auto bg-primary text-white font-semibold h-[44px] px-10 rounded-full hover:bg-[#0077ED] transition-all duration-300 transform hover:-translate-y-0.5">
            Start Project
          </button>
          <button onClick={() => handleButtonClick("#work")} className="w-full sm:w-auto border-2 border-primary text-primary font-semibold h-[44px] px-10 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
            View Work
          </button>
        </div>
      </div>

      {/* Downward scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-on-surface-variant opacity-30 text-3xl">
          keyboard_double_arrow_down
        </span>
      </div>
    </section>
  );
}
