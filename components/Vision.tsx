import Image from "next/image";

export default function Vision() {
  return (
    <section className="py-stack-lg bg-background" id="vision">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-eyebrow text-primary uppercase mb-6 block">
              Our Vision
            </span>
            <h2 className="font-hero text-hero-mobile md:text-hero mb-8">
              Seamless execution and professional creative results.
            </h2>
            <div className="space-y-6 text-on-surface-variant text-body leading-relaxed max-w-lg">
              <p>
                We believe that in the digital age, the friction between idea
                and implementation should be non-existent. Our mission is to
                bridge that gap through meticulous planning and superior
                aesthetic judgment.
              </p>
              <p>
                By integrating digital infrastructure with traditional
                creative production, we offer a holistic approach that
                ensures your message is not only seen but felt across every
                touchpoint.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square bg-surface-variant overflow-hidden border border-surface-variant">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiU_zxIqFiqrV1jtg_4Trnrj_ono6vKKIkaXS1PJKxaXcpKcHoltbXIUyMz8jsCD1dpznxjBwQJZMhlkIeye9iN_YO4Puua2ds0OPKxaN1QSFEZ0HyD4sILclfZpfYtNz4r6j7eH9QbY4NMvoIy0a2BASm3h1NGbOzEGcNkmEHLGq4m9uFB-6RapUHamBwXbww08aGyzVX8fmSj4SVW7rWCf-pW9rLlSIRPDI9yHnM9rAdP8fgocqRi_oP7OZQkhUtx_bVBDgbFHo"
                alt="A macro close-up of a high-resolution camera lens and a digital screen showing lines of clean code, symbolizing the intersection of creative documentation and digital solutions. Cold, clinical blue and sharp white lighting emphasize a high-tech, precision-oriented production environment."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Absolute floating accent */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 border border-primary/20 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
