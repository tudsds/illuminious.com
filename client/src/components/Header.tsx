import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ChevronRight, Globe, Cpu, Factory, Wrench, Layers, Award, Wifi, Heart, Car, Home as HomeIcon, Building2, Newspaper, BookOpen, FileText, Zap, Shield, Microscope, Package, Truck, Settings, CircuitBoard, Cog, FlaskConical, Box, Search, Rocket, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced navigation structure - manufacturer-focused mega menu
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    megaMenu: true,
    columns: [
      {
        title: "Engineering & Design",
        items: [
          { label: "NPI & Engineering", href: "/services/npi-engineering", icon: Cpu, desc: "New product introduction" },
          { label: "DFM Analysis", href: "/services/dfm", icon: Wrench, desc: "Design for manufacturability" },
          { label: "Rapid Prototyping", href: "/services/rapid-prototyping", icon: FlaskConical, desc: "Fast prototype development" },
        ],
      },
      {
        title: "PCB & Assembly",
        items: [
          { label: "SMT Assembly", href: "/services/smt-assembly", icon: CircuitBoard, desc: "Surface mount technology" },
          { label: "PCB Assembly (PCBA)", href: "/services/pcb-assembly", icon: Layers, desc: "Full PCB assembly services" },
          { label: "Through-Hole Assembly", href: "/services/through-hole", icon: Cog, desc: "THT component insertion" },
          { label: "Testing & Inspection", href: "/services/testing-inspection", icon: Search, desc: "AOI, ICT, functional testing" },
        ],
      },
      {
        title: "Manufacturing",
        items: [
          { label: "EMS", href: "/services/ems", icon: Factory, desc: "Electronics manufacturing services" },
          { label: "OEM", href: "/services/oem", icon: Settings, desc: "Original equipment manufacturing" },
          { label: "ODM", href: "/services/odm", icon: Cpu, desc: "Original design manufacturing" },
          { label: "Box Build Assembly", href: "/services/box-build", icon: Box, desc: "Full system integration" },
          { label: "Injection Molding", href: "/services/injection-molding", icon: Factory, desc: "Plastic enclosures & parts" },
        ],
      },
      {
        title: "Supply Chain & Logistics",
        items: [
          { label: "Supply Chain Management", href: "/services/supply-chain", icon: Globe, desc: "End-to-end procurement" },
          { label: "US Fulfillment", href: "/services/us-fulfillment", icon: Truck, desc: "Warehousing & distribution" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: true,
    columns: [
      {
        title: "Sectors We Serve",
        items: [
          { label: "IoT & Smart Devices", href: "/industries/iot", icon: Wifi, desc: "Connected hardware solutions" },
          { label: "Consumer Electronics", href: "/industries/consumer", icon: HomeIcon, desc: "Wearables, audio, smart home" },
          { label: "Medical Devices", href: "/industries/medical", icon: Heart, desc: "FDA-compliant manufacturing" },
          { label: "Automotive", href: "/industries/automotive", icon: Car, desc: "IATF 16949 certified" },
          { label: "Industrial & Automation", href: "/industries/industrial", icon: Building2, desc: "Rugged & reliable systems" },
        ],
      },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    megaMenu: true,
    columns: [
      {
        title: "Our Strengths",
        items: [
          { label: "Quality & Certifications", href: "/capabilities/quality", icon: Shield, desc: "ISO 9001, ISO 13485, IATF 16949" },
          { label: "IoT Specialization", href: "/capabilities/iot", icon: Wifi, desc: "AI hardware & wearables" },
          { label: "Factory Tour", href: "/factory-tour", icon: Factory, desc: "See our production lines" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    megaMenu: true,
    columns: [
      {
        title: "Knowledge Center",
        items: [
          { label: "Case Studies", href: "/case-studies", icon: FileText, desc: "Real project outcomes" },
          { label: "Blog", href: "/blog", icon: BookOpen, desc: "Technical insights & guides" },
          { label: "News", href: "/news", icon: Newspaper, desc: "Company updates" },
        ],
      },
    ],
  },
  { label: "Startups", href: "/startups" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  }, [location]);

  // Pages with dark hero backgrounds where header starts transparent
  const isDarkBgPage = location === "/" || location === "/startups";
  const isStartupsPage = location === "/startups";
  const isHomePage = location === "/";

  // Dynamic text color based on page and scroll state
  const getNavTextColor = (isActive: boolean) => {
    if (isStartupsPage) {
      return isActive ? "text-cyber-cyan" : "text-gray-300 hover:text-cyber-cyan";
    }
    if (isHomePage) {
      if (isScrolled) {
        return isActive ? "text-illuminious-blue" : "text-gray-700 hover:text-illuminious-blue";
      }
      return isActive ? "text-illuminious-sky" : "text-white/90 hover:text-white";
    }
    return isActive ? "text-illuminious-blue" : "text-gray-700 hover:text-illuminious-blue";
  };

  const getLogoTextColor = () => {
    if (isStartupsPage) return "text-cyber-cyan";
    if (isHomePage && !isScrolled) return "text-white";
    return "text-illuminious-navy";
  };

  // Dynamic logo switching: white logo on dark backgrounds, blue logo on light backgrounds
  const getLogoSrc = () => {
    if (isStartupsPage) return "/images/illuminious-logo-white.png";
    if (isHomePage) {
      return isScrolled ? "/images/illuminious-logo-blue.png" : "/images/illuminious-logo-white.png";
    }
    return "/images/illuminious-logo-blue.png";
  };

  // Mobile menu background also affects logo
  const getMobileMenuLogoSrc = () => {
    if (isStartupsPage) return "/images/illuminious-logo-white.png";
    return "/images/illuminious-logo-blue.png";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isStartupsPage
            ? "bg-cyber-black/95 backdrop-blur-md shadow-lg shadow-cyber-purple/20"
            : "bg-white/95 backdrop-blur-md shadow-md"
          : isStartupsPage
          ? "bg-transparent"
          : isDarkBgPage
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo - dynamically switches between white and blue based on background */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src={isMobileMenuOpen ? getMobileMenuLogoSrc() : getLogoSrc()}
              alt="Illuminious"
              className="h-8 w-8 lg:h-9 lg:w-9 transition-opacity duration-200"
            />
            <span className={`text-lg lg:text-xl font-bold font-heading tracking-tight ${
              isMobileMenuOpen && !isStartupsPage ? "text-illuminious-navy" : getLogoTextColor()
            }`}>
              illuminious
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-0.5 ${getNavTextColor(location === item.href || location.startsWith(item.href + "/"))}`}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="w-3 h-3 opacity-60" />}
                </Link>

                {/* Enhanced Mega Menu */}
                <AnimatePresence>
                  {item.megaMenu && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full ${
                        item.label === "Services" ? "-left-32" : "left-0"
                      } mt-1 rounded-xl shadow-2xl overflow-hidden ${
                        isStartupsPage
                          ? "bg-cyber-black border border-cyber-purple/30"
                          : "bg-white border border-gray-100"
                      }`}
                      style={{
                        minWidth: item.label === "Services" ? "680px" : "280px",
                      }}
                    >
                      <div className={`p-4 ${
                        item.label === "Services" ? "grid grid-cols-2 gap-4" : ""
                      }`}>
                        {item.columns?.map((column, colIdx) => (
                          <div key={column.title} className={
                            item.label !== "Services" && colIdx > 0
                              ? "mt-3 pt-3 border-t border-gray-100"
                              : ""
                          }>
                            <h4 className={`text-[10px] font-bold uppercase tracking-wider mb-2 px-2 ${
                              isStartupsPage ? "text-cyber-purple" : "text-illuminious-blue"
                            }`}>
                              {column.title}
                            </h4>
                            <div className="space-y-0.5">
                              {column.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className={`flex items-start gap-3 px-2 py-2 rounded-lg text-sm transition-colors group ${
                                    isStartupsPage
                                      ? "text-gray-300 hover:bg-cyber-purple/20 hover:text-cyber-cyan"
                                      : "text-gray-700 hover:bg-illuminious-light/50 hover:text-illuminious-blue"
                                  }`}
                                >
                                  {subItem.icon && (
                                    <subItem.icon className={`w-4 h-4 mt-0.5 shrink-0 ${
                                      isStartupsPage ? "text-cyber-cyan/60 group-hover:text-cyber-cyan" : "text-illuminious-blue/60 group-hover:text-illuminious-blue"
                                    }`} />
                                  )}
                                  <div>
                                    <div className="font-medium">{subItem.label}</div>
                                    {"desc" in subItem && subItem.desc && (
                                      <div className={`text-xs mt-0.5 ${
                                        isStartupsPage ? "text-gray-500" : "text-gray-400"
                                      }`}>
                                        {subItem.desc}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mega menu footer CTA for Services */}
                      {item.label === "Services" && (
                        <div className={`px-4 py-3 border-t ${
                          isStartupsPage ? "border-cyber-purple/20 bg-cyber-black/50" : "border-gray-100 bg-gray-50/50"
                        }`}>
                          <Link
                            href="/services"
                            className={`flex items-center gap-2 text-sm font-medium ${
                              isStartupsPage ? "text-cyber-cyan hover:text-cyber-cyan/80" : "text-illuminious-blue hover:text-illuminious-navy"
                            }`}
                          >
                            View All Services
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={`rounded-full px-4 text-sm ${
                isStartupsPage
                  ? "text-gray-300 hover:text-cyber-cyan hover:bg-cyber-purple/20"
                  : isHomePage && !isScrolled
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-illuminious-blue hover:bg-illuminious-light/50"
              }`}
            >
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-1" />
                Contact
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className={`${
                isStartupsPage
                  ? "bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/80"
                  : "bg-illuminious-blue text-white hover:bg-illuminious-navy"
              } rounded-full px-5 text-sm font-semibold`}
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-1.5 rounded-md ${
              isStartupsPage
                ? "text-cyber-cyan"
                : isHomePage && !isScrolled
                ? "text-white"
                : "text-illuminious-navy"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden overflow-hidden ${
                isStartupsPage ? "bg-cyber-black" : "bg-white"
              }`}
            >
              <div className="py-3 space-y-0.5 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.megaMenu ? (
                      <>
                        <button
                          onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.label ? null : item.label)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${
                            isStartupsPage
                              ? "text-gray-300 hover:text-cyber-cyan"
                              : "text-gray-700 hover:text-illuminious-blue hover:bg-gray-50"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileMenu === item.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {expandedMobileMenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-3 space-y-0.5 pb-1"
                            >
                              {item.columns?.map((column) => (
                                <div key={column.title} className="py-1">
                                  <div className={`text-[10px] font-bold uppercase tracking-wider px-3 mb-1 ${
                                    isStartupsPage ? "text-cyber-purple" : "text-illuminious-blue/60"
                                  }`}>
                                    {column.title}
                                  </div>
                                  {column.items.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      className={`block px-3 py-1.5 text-sm rounded-md ${
                                        isStartupsPage
                                          ? "text-gray-400 hover:text-cyber-cyan"
                                          : "text-gray-600 hover:text-illuminious-blue hover:bg-gray-50"
                                      }`}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 text-sm font-medium rounded-md ${
                          location === item.href
                            ? isStartupsPage
                              ? "text-cyber-cyan bg-cyber-purple/20"
                              : "text-illuminious-blue bg-illuminious-light/50"
                            : isStartupsPage
                            ? "text-gray-300 hover:text-cyber-cyan"
                            : "text-gray-700 hover:text-illuminious-blue hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-3 pt-3 space-y-2">
                  <Button
                    asChild
                    size="sm"
                    className={`w-full ${
                      isStartupsPage
                        ? "bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/80"
                        : "bg-illuminious-blue text-white hover:bg-illuminious-navy"
                    } rounded-full font-semibold`}
                  >
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
