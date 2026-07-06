const FOOTER_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-variant py-stack-md">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-primary-heading text-on-background font-bold text-xl">
            Youth Creatifers Studio
          </div>
          <p className="text-[14px] text-on-surface-variant">
            © 2026 Youth Creatifers Studio (YCS). All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8 text-[14px] text-on-surface-variant">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
