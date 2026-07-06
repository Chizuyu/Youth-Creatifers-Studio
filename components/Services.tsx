type ServiceCard = {
  icon: string;
  title: string;
  items: string[];
};

const SERVICES: ServiceCard[] = [
  {
    icon: "brush",
    title: "Design & Branding",
    items: [
      "Logo & Visual Identity",
      "Social Media Asset",
      "Event Merchandise",
    ],
  },
  {
    icon: "photo_camera",
    title: "Documentation",
    items: [
      "Event Photography",
      "Aftermovie Production",
      "Live Streaming / OBS",
      "Reels & TikTok Content",
    ],
  },
  {
    icon: "campaign",
    title: "Publication",
    items: [
      "Media Partnership",
      "Press Release",
      "Community Outreach",
    ],
  },
  {
    icon: "terminal",
    title: "Digital Services",
    items: [
      "Custom Registration Forms",
      "Automated E-Certs",
      "Web Development",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-stack-lg bg-white" id="services">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-hero text-[32px] md:text-[40px] mb-4">
              Core Competencies
            </h2>
            <p className="text-on-surface-variant text-body">
              Specialized solutions tailored to the specific needs of modern
              organizations and high-impact events.
            </p>
          </div>
          <div className="text-primary font-semibold border-b-2 border-primary pb-1 hidden md:block">
            Expertise in Execution
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-surface-variant">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="p-10 border-r border-b border-surface-variant hover:bg-surface-container-low transition-colors duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-primary-heading text-primary-heading mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3 text-[14px] text-on-surface-variant">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
