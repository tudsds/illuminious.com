import { Link, useLocation } from "wouter";
import { Mail, MapPin, Phone, Linkedin, Twitter, Globe, Factory, Shield } from "lucide-react";
import FlagIcon from "./FlagIcon";

const globalOffices = [
  { location: "United States", city: "Palo Alto, CA", type: "Headquarters", flag: "US" as const },
  { location: "Hong Kong", city: "Hong Kong SAR", type: "R&D Center", flag: "HK" as const },
  { location: "China", city: "Shenzhen, GD", type: "Manufacturing", flag: "CN" as const },
  { location: "Indonesia", city: "Batam Island FTZ", type: "Manufacturing", flag: "ID" as const },
];

const certifications = [
  "ISO 9001:2015",
  "ISO 13485",
  "IATF 16949",
  "IPC-A-610 Class 3",
  "RoHS / REACH",
  "UL Listed",
];

const footerLinks = {
  services: [
    { label: "SMT Assembly", href: "/services/smt-assembly" },
    { label: "PCB Assembly (PCBA)", href: "/services/pcb-assembly" },
    { label: "Through-Hole Assembly", href: "/services/through-hole" },
    { label: "Testing & Inspection", href: "/services/testing-inspection" },
    { label: "Box Build Assembly", href: "/services/box-build" },
    { label: "Injection Molding", href: "/services/injection-molding" },
    { label: "NPI & Engineering", href: "/services/npi-engineering" },
    { label: "DFM Analysis", href: "/services/dfm" },
    { label: "Rapid Prototyping", href: "/services/rapid-prototyping" },
    { label: "EMS", href: "/services/ems" },
    { label: "OEM / ODM", href: "/services/oem" },
    { label: "Supply Chain Management", href: "/services/supply-chain" },
    { label: "US Fulfillment", href: "/services/us-fulfillment" },
  ],
  industries: [
    { label: "IoT & Smart Devices", href: "/industries/iot" },
    { label: "Consumer Electronics", href: "/industries/consumer" },
    { label: "Medical Devices", href: "/industries/medical" },
    { label: "Automotive", href: "/industries/automotive" },
    { label: "Industrial & Automation", href: "/industries/industrial" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Factory Tour", href: "/factory-tour" },
    { label: "Quality & Certifications", href: "/capabilities/quality" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "News", href: "/news" },
    { label: "Startups Program", href: "/startups" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  const [location] = useLocation();
  const isStartupsPage = location === "/startups";

  return (
    <footer
      className={`${
        isStartupsPage
          ? "bg-cyber-black border-t border-cyber-purple/30"
          : "bg-illuminious-navy"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img
                src="/images/illuminious-logo-white.png"
                alt="Illuminious"
                className="h-10 w-10"
              />
              <span
                className={`text-xl font-bold font-heading ${
                  isStartupsPage ? "text-cyber-cyan" : "text-white"
                }`}
              >
                illuminious
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-white">
              A US-headquartered electronics manufacturer with production facilities in Shenzhen and Batam. We provide end-to-end manufacturing from PCB assembly to finished product, serving startups and enterprises worldwide.
            </p>

            {/* Certifications Badge */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Certifications</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isStartupsPage
                        ? "bg-cyber-purple/20 text-gray-400"
                        : "bg-illuminious-blue/20 text-gray-400"
                    }`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isStartupsPage
                    ? "bg-cyber-purple/20 text-white hover:bg-cyber-purple/40 hover:text-cyber-cyan"
                    : "bg-illuminious-blue/20 text-white hover:bg-illuminious-blue/40 hover:text-illuminious-sky"
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isStartupsPage
                    ? "bg-cyber-purple/20 text-white hover:bg-cyber-purple/40 hover:text-cyber-cyan"
                    : "bg-illuminious-blue/20 text-white hover:bg-illuminious-blue/40 hover:text-illuminious-sky"
                }`}
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${
              isStartupsPage ? "text-cyber-cyan" : "text-white"
            }`}>
              Manufacturing Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries + Company Column */}
          <div className="lg:col-span-2">
            <h3 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${
              isStartupsPage ? "text-cyber-cyan" : "text-white"
            }`}>
              Industries
            </h3>
            <ul className="space-y-2 mb-8">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${
              isStartupsPage ? "text-cyber-cyan" : "text-white"
            }`}>
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices + Contact Column */}
          <div className="lg:col-span-4">
            <h3 className={`text-sm font-semibold mb-4 uppercase tracking-wider flex items-center gap-2 ${
              isStartupsPage ? "text-cyber-cyan" : "text-white"
            }`}>
              <Factory className="w-4 h-4" />
              Global Facilities
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {globalOffices.map((office) => (
                <div key={office.location} className={`p-3 rounded-lg ${
                  isStartupsPage ? "bg-cyber-purple/10" : "bg-white/5"
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <FlagIcon code={office.flag} className="w-5 h-3.5" />
                    <span className="text-sm font-medium text-white">{office.location}</span>
                  </div>
                  <p className="text-xs text-gray-400">{office.city}</p>
                  <p className="text-[10px] font-medium text-gray-400">
                    {office.type}
                  </p>
                </div>
              ))}
            </div>

            <h3 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${
              isStartupsPage ? "text-cyber-cyan" : "text-white"
            }`}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gray-400" />
                <a
                  href="mailto:info@illuminious.com"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: 'email_click',
                        email: 'info@illuminious.com'
                      });
                    }
                  }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@illuminious.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-gray-400" />
                <span className="text-sm text-gray-400">+1 424-626-3312</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <span className="text-sm text-gray-400">
                  Palo Alto, CA, United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-8 border-t ${
            isStartupsPage ? "border-cyber-purple/30" : "border-white/10"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Illuminious LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
