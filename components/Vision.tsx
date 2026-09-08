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
                src="/ycs.jpeg"
                alt="A macro close-up of a high-resolution camera lens and a digital screen showing lines of clean code, symbolizing the intersection of creative documentation and digital solutions. Cold, clinical blue and sharp white lighting emphasize a high-tech, precision-oriented production environment."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
