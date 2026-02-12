/**
 * Static HTML Page Generator for SEO
 * 
 * Runs after `vite build` to generate individual HTML files for each route
 * with proper meta tags, structured data, and noscript content for crawlers.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist/public');

const pages = [
  {
    path: '/about',
    title: 'About Illuminious | US-Managed Electronics Manufacturer',
    description: 'Illuminious is a vertically integrated electronics manufacturer with US headquarters in Palo Alto and own factories in Shenzhen and Batam FTZ. ISO 9001, ISO 13485, IATF 16949 certified.',
    keywords: 'about illuminious, electronics manufacturer, contract manufacturing, Shenzhen factory, Batam FTZ',
    h1: 'About Illuminious',
    content: 'Illuminious is a US-managed, vertically integrated electronics manufacturer headquartered in Palo Alto, California. With our own factories in Shenzhen, China and Batam Free Trade Zone, Indonesia, we provide end-to-end manufacturing solutions from prototype to mass production.',
  },
  {
    path: '/services',
    title: 'End-to-End Electronics Manufacturing Services | Illuminious',
    description: 'Full suite of electronics manufacturing services: NPI, rapid prototyping, PCB assembly, box build, injection molding, and global supply chain management.',
    keywords: 'electronics manufacturing services, NPI, PCB assembly, box build, injection molding, supply chain',
    h1: 'Electronics Manufacturing Services',
    content: 'Illuminious offers comprehensive electronics manufacturing services including NPI Engineering, PCB Assembly, SMT Assembly, Through-Hole Assembly, Box Build Assembly, Injection Molding, Rapid Prototyping, DFM Analysis, Supply Chain Management, and US Fulfillment.',
    links: [
      { href: '/services/npi-engineering', text: 'NPI Engineering' },
      { href: '/services/pcb-assembly', text: 'PCB Assembly' },
      { href: '/services/smt-assembly', text: 'SMT Assembly' },
      { href: '/services/box-build', text: 'Box Build Assembly' },
      { href: '/services/injection-molding', text: 'Injection Molding' },
      { href: '/services/rapid-prototyping', text: 'Rapid Prototyping' },
      { href: '/services/dfm', text: 'DFM Analysis' },
      { href: '/services/supply-chain', text: 'Supply Chain Management' },
      { href: '/services/us-fulfillment', text: 'US Fulfillment' },
    ],
  },
  { path: '/services/npi-engineering', title: 'NPI Engineering Services | New Product Introduction | Illuminious', description: 'Expert NPI engineering services to accelerate your product from concept to manufacturing. DFM review, prototyping, pilot runs, and production ramp-up.', keywords: 'NPI engineering, new product introduction, DFM review, prototyping', h1: 'NPI Engineering Services', content: 'Our NPI Engineering team guides your product from concept through to full-scale manufacturing with DFM reviews, rapid prototyping, pilot runs, and seamless production ramp-up.' },
  { path: '/services/pcb-assembly', title: 'PCB Assembly Services | PCBA Manufacturing | Illuminious', description: 'High-quality PCB assembly services from prototype to mass production. SMT, through-hole, and mixed technology assembly with ISO 9001 certified facilities.', keywords: 'PCB assembly, PCBA manufacturing, circuit board assembly', h1: 'PCB Assembly Services', content: 'Illuminious provides comprehensive PCB assembly services including SMT assembly, through-hole assembly, and mixed technology from prototype to high-volume mass production.' },
  { path: '/services/smt-assembly', title: 'SMT Assembly Services | Surface Mount Technology | Illuminious', description: 'Advanced SMT assembly services with high-speed pick-and-place, reflow soldering, and AOI inspection.', keywords: 'SMT assembly, surface mount technology, pick and place, reflow soldering', h1: 'SMT Assembly Services', content: 'Our SMT assembly lines feature high-speed pick-and-place machines capable of placing components as small as 01005 with reflow soldering and AOI inspection.' },
  { path: '/services/through-hole', title: 'Through-Hole Assembly Services | THT Soldering | Illuminious', description: 'Professional through-hole assembly services including wave soldering, selective soldering, and hand soldering.', keywords: 'through-hole assembly, THT, wave soldering, selective soldering', h1: 'Through-Hole Assembly Services', content: 'Through-hole technology (THT) assembly services including wave soldering, selective soldering, and precision hand soldering for connectors and power components.' },
  { path: '/services/testing-inspection', title: 'Testing & Inspection Services | Quality Assurance | Illuminious', description: 'Comprehensive testing and inspection: ICT, FCT, AOI, X-ray, environmental testing, and reliability testing.', keywords: 'testing inspection, ICT, FCT, AOI, X-ray inspection', h1: 'Testing & Inspection Services', content: 'Our testing capabilities include In-Circuit Testing (ICT), Functional Testing (FCT), Automated Optical Inspection (AOI), X-ray Inspection, and Environmental Testing.' },
  { path: '/services/box-build', title: 'Box Build Assembly Services | System Integration | Illuminious', description: 'Complete box build assembly and system integration from sub-assembly to final product packaging.', keywords: 'box build assembly, system integration, cable assembly', h1: 'Box Build Assembly Services', content: 'Complete box build assembly services including mechanical assembly, cable and harness assembly, enclosure integration, labeling, and final product packaging.' },
  { path: '/services/injection-molding', title: 'Injection Molding Services | Plastic Parts Manufacturing | Illuminious', description: 'Custom injection molding services for plastic enclosures, housings, and components.', keywords: 'injection molding, plastic molding, custom enclosures, tooling design', h1: 'Injection Molding Services', content: 'Custom injection molding capabilities including tooling design, rapid prototyping with soft tooling, and high-volume production with hardened steel molds.' },
  { path: '/services/supply-chain', title: 'Supply Chain Management | Component Sourcing | Illuminious', description: 'End-to-end supply chain management including component sourcing, vendor management, and logistics.', keywords: 'supply chain management, component sourcing, vendor management', h1: 'Supply Chain Management', content: 'Comprehensive supply chain management including global component sourcing, vendor qualification, inventory management, and logistics coordination.' },
  { path: '/services/dfm', title: 'DFM Analysis Services | Design for Manufacturing | Illuminious', description: 'Expert DFM analysis to optimize your product design for manufacturability and reduce costs.', keywords: 'DFM analysis, design for manufacturing, design optimization', h1: 'DFM Analysis Services', content: 'Our DFM analysis reviews your product design to identify manufacturing issues, optimize for cost and quality, and ensure smooth production transition.' },
  { path: '/services/us-fulfillment', title: 'US Fulfillment & Warehouse Services | Illuminious', description: 'US-based warehouse and fulfillment services for electronics products.', keywords: 'US fulfillment, warehouse services, order fulfillment', h1: 'US Fulfillment & Warehouse Services', content: 'US warehouse and fulfillment center providing inventory management, order processing, pick-and-pack services, and domestic distribution.' },
  { path: '/services/odm', title: 'ODM Services | Original Design Manufacturing | Illuminious', description: 'ODM services from concept to finished product with our engineering expertise.', keywords: 'ODM, original design manufacturing, product design', h1: 'ODM Services', content: 'End-to-end ODM services from industrial design and engineering through to manufacturing and delivery.' },
  { path: '/services/ems', title: 'EMS Services | Electronics Manufacturing Services | Illuminious', description: 'Full-service EMS provider offering PCB assembly, system integration, testing, and supply chain management.', keywords: 'EMS, electronics manufacturing services, contract manufacturing', h1: 'Electronics Manufacturing Services (EMS)', content: 'Full-service EMS provider offering PCB assembly, system integration, testing, supply chain management, and logistics.' },
  { path: '/services/oem', title: 'OEM Manufacturing Services | Illuminious', description: 'OEM manufacturing services for electronics products at our ISO certified facilities.', keywords: 'OEM manufacturing, original equipment manufacturing', h1: 'OEM Manufacturing Services', content: 'OEM manufacturing services producing your products to exact specifications with consistent quality from prototype through mass production.' },
  { path: '/services/rapid-prototyping', title: 'Rapid Prototyping Services | Fast PCB Prototypes | Illuminious', description: 'Rapid prototyping services with 2-4 week turnaround for PCB prototypes and functional assemblies.', keywords: 'rapid prototyping, PCB prototype, 3D printing, fast turnaround', h1: 'Rapid Prototyping Services', content: 'Get functional prototypes in 2-4 weeks including PCB fabrication, 3D printing, CNC machining, and complete functional prototype assembly.' },
  { path: '/factory-tour', title: 'Virtual Factory Tour | Manufacturing Facilities | Illuminious', description: 'Take a virtual tour of our manufacturing facilities in Shenzhen and Batam.', keywords: 'factory tour, manufacturing facility, SMT line, assembly area', h1: 'Virtual Factory Tour', content: 'Explore our state-of-the-art manufacturing facilities featuring advanced SMT assembly lines, automated testing equipment, and clean rooms.' },
  {
    path: '/case-studies',
    title: 'Case Studies | Electronics Manufacturing Success Stories | Illuminious',
    description: 'Read how Illuminious helped hardware startups and enterprises scale from prototype to mass production.',
    keywords: 'case studies, manufacturing success stories, hardware startup',
    h1: 'Case Studies',
    content: 'Discover how Illuminious has helped companies across industries scale their hardware products from prototype to mass production.',
    links: [
      { href: '/case-studies/aurasense-ai-wearable-scaling', text: 'AuraSense AI Wearable Scaling' },
      { href: '/case-studies/scaling-silicon-valley-ai-wearable-necklace', text: 'Scaling a Silicon Valley AI Wearable' },
      { href: '/case-studies/wearable-fitness-fast-launch', text: 'Wearable Fitness Tracker Fast Launch' },
      { href: '/case-studies/smart-home-device-scaling', text: 'Smart Home Device Scaling' },
      { href: '/case-studies/medical-device-fda-approval', text: 'Medical Device FDA Approval' },
    ],
  },
  {
    path: '/industries',
    title: 'Industries We Serve | Electronics Manufacturing | Illuminious',
    description: 'Illuminious serves IoT, consumer electronics, automotive, medical device, and industrial sectors.',
    keywords: 'industries, IoT manufacturing, consumer electronics, automotive, medical devices',
    h1: 'Industries We Serve',
    content: 'Specialized electronics manufacturing solutions for IoT, consumer electronics, automotive, medical devices, and industrial applications.',
    links: [
      { href: '/industries/iot', text: 'IoT & Smart Devices' },
      { href: '/industries/consumer', text: 'Consumer Electronics' },
      { href: '/industries/automotive', text: 'Automotive Electronics' },
      { href: '/industries/medical', text: 'Medical Devices' },
      { href: '/industries/industrial', text: 'Industrial Electronics' },
    ],
  },
  { path: '/industries/iot', title: 'IoT Device Manufacturing | Smart Device Assembly | Illuminious', description: 'Specialized IoT device manufacturing from smart home devices to industrial IoT sensors.', keywords: 'IoT manufacturing, smart device assembly, connected device', h1: 'IoT Device Manufacturing', content: 'Specialized IoT device manufacturing covering wireless connectivity, low-power design, and cloud-connected hardware.' },
  { path: '/industries/consumer', title: 'Consumer Electronics Manufacturing | Illuminious', description: 'Consumer electronics manufacturing for wearables, audio devices, and smart home products.', keywords: 'consumer electronics manufacturing, wearables, audio devices', h1: 'Consumer Electronics Manufacturing', content: 'Manufacturing consumer electronics including wearables, audio devices, smart home products, and personal electronics.' },
  { path: '/industries/automotive', title: 'Automotive Electronics Manufacturing | IATF 16949 | Illuminious', description: 'IATF 16949 certified automotive electronics manufacturing for ADAS, infotainment, and EV systems.', keywords: 'automotive electronics, IATF 16949, ADAS, EV charging', h1: 'Automotive Electronics Manufacturing', content: 'IATF 16949 certified facilities manufacturing ADAS components, infotainment systems, EV charging modules, and vehicle control units.' },
  { path: '/industries/medical', title: 'Medical Device Manufacturing | ISO 13485 | FDA Compliant | Illuminious', description: 'ISO 13485 certified medical device manufacturing with FDA compliant processes.', keywords: 'medical device manufacturing, ISO 13485, FDA compliant', h1: 'Medical Device Manufacturing', content: 'ISO 13485 certified medical device manufacturing supporting diagnostic equipment, patient monitoring devices, and surgical instruments.' },
  { path: '/industries/industrial', title: 'Industrial Electronics Manufacturing | Illuminious', description: 'Industrial electronics manufacturing for automation, control systems, and power electronics.', keywords: 'industrial electronics, automation, control systems', h1: 'Industrial Electronics Manufacturing', content: 'Manufacturing industrial electronics for automation systems, process control, power management, and industrial IoT applications.' },
  {
    path: '/capabilities',
    title: 'Manufacturing Capabilities | Equipment & Technology | Illuminious',
    description: 'Explore our manufacturing capabilities including advanced SMT lines, testing equipment, and quality systems.',
    keywords: 'manufacturing capabilities, SMT equipment, testing capabilities',
    h1: 'Manufacturing Capabilities',
    content: 'Advanced SMT assembly lines, automated testing equipment, clean room facilities, and comprehensive quality management systems.',
    links: [
      { href: '/capabilities/quality', text: 'Quality Management' },
      { href: '/capabilities/iot', text: 'IoT Specialization' },
    ],
  },
  { path: '/capabilities/quality', title: 'Quality Management | ISO Certifications | Illuminious', description: 'ISO 9001, ISO 13485, ISO 14001, and IATF 16949 certified quality management system.', keywords: 'quality management, ISO 9001, ISO 13485, IATF 16949', h1: 'Quality Management', content: 'ISO 9001, ISO 13485, ISO 14001, and IATF 16949 certifications with a zero-defect manufacturing approach.' },
  { path: '/capabilities/iot', title: 'IoT Manufacturing Specialization | Illuminious', description: 'Specialized capabilities for IoT device manufacturing including wireless testing and low-power optimization.', keywords: 'IoT specialization, wireless testing, low-power', h1: 'IoT Manufacturing Specialization', content: 'IoT manufacturing specialization including wireless protocol testing, low-power design optimization, and antenna integration.' },
  { path: '/blog', title: 'Blog | Electronics Manufacturing Insights | Illuminious', description: 'Expert insights on electronics manufacturing, supply chain management, DFM best practices, and industry trends.', keywords: 'electronics manufacturing blog, supply chain insights, DFM tips', h1: 'Illuminious Blog', content: 'Expert insights on electronics manufacturing, supply chain management, DFM best practices, and industry trends.' },
  { path: '/news', title: 'News | Company Updates & Announcements | Illuminious', description: 'Latest news from Illuminious: company updates, facility expansions, certifications, and partnerships.', keywords: 'illuminious news, company updates, facility expansion', h1: 'Illuminious News', content: 'Latest news including company updates, facility expansions, new certifications, and partnership announcements.' },
  { path: '/startups', title: 'Startups Bridge Program | Hardware Startup Manufacturing | Illuminious', description: 'The Illuminious Startups Bridge Program helps hardware startups go from prototype to mass production.', keywords: 'hardware startup manufacturing, startup bridge program, prototype to production', h1: 'Startups Bridge Program', content: 'Dedicated program for hardware startups providing end-to-end manufacturing support from DFM review through mass production with flexible MOQs.' },
  { path: '/contact', title: 'Contact Us | Get a Manufacturing Quote | Illuminious', description: 'Contact Illuminious for electronics manufacturing quotes, NPI consultations, and partnership inquiries.', keywords: 'contact illuminious, manufacturing quote, NPI consultation', h1: 'Contact Us', content: 'Get in touch for manufacturing quotes, NPI consultations, and partnership inquiries. US headquarters in Palo Alto, California. Email: info@illuminious.com' },
  { path: '/privacy', title: 'Privacy Policy | Illuminious', description: 'Illuminious privacy policy describing how we collect, use, and protect your personal information.', keywords: 'privacy policy, data protection', h1: 'Privacy Policy', content: 'This privacy policy describes how Illuminious LLC collects, uses, and protects your personal information.' },
  { path: '/terms', title: 'Terms of Service | Illuminious', description: 'Illuminious terms of service for using our website and services.', keywords: 'terms of service, terms and conditions', h1: 'Terms of Service', content: 'Terms of service governing your use of the Illuminious website and services.' },
];

function generateHTML(page) {
  const siteUrl = 'https://illuminious.com';
  const fullUrl = `${siteUrl}${page.path}`;
  const fullTitle = page.title;

  const baseHTML = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  let html = baseHTML.replace(/<title>[^<]*<\/title>/, `<title>${fullTitle}</title>`);
  html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${page.description}" />`);
  html = html.replace(/<meta name="keywords"[^>]*>/, `<meta name="keywords" content="${page.keywords}" />`);
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${fullUrl}" />`);
  html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${fullUrl}" />`);
  html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${fullTitle}" />`);
  html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${page.description}" />`);
  html = html.replace(/<meta name="twitter:url"[^>]*>/, `<meta name="twitter:url" content="${fullUrl}" />`);
  html = html.replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${fullTitle}" />`);
  html = html.replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${page.description}" />`);

  const linksHTML = page.links
    ? `<nav><ul>${page.links.map(l => `<li><a href="${l.href}">${l.text}</a></li>`).join('')}</ul></nav>`
    : '';

  const noscriptContent = `
    <noscript>
      <div style="max-width:1200px;margin:0 auto;padding:40px 20px;">
        <header>
          <a href="/">Illuminious - Electronics Manufacturing Services</a>
          <nav>
            <a href="/services">Services</a> |
            <a href="/industries">Industries</a> |
            <a href="/capabilities">Capabilities</a> |
            <a href="/case-studies">Case Studies</a> |
            <a href="/about">About</a> |
            <a href="/blog">Blog</a> |
            <a href="/news">News</a> |
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>
          <h1>${page.h1}</h1>
          <p>${page.content}</p>
          ${linksHTML}
        </main>
        <footer>
          <p>&copy; 2026 Illuminious LLC. All rights reserved.</p>
          <p>Headquarters: Palo Alto, CA | Factories: Shenzhen, China &amp; Batam FTZ, Indonesia</p>
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </footer>
      </div>
    </noscript>`;

  html = html.replace('<div id="root"></div>', `${noscriptContent}\n  <div id="root"></div>`);

  return html;
}

console.log('Generating static HTML pages for SEO...');

let count = 0;
for (const page of pages) {
  const html = generateHTML(page);
  const dirPath = path.join(distDir, page.path);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'index.html'), html);
  count++;
  console.log(`  ✓ ${page.path}`);
}

console.log(`\nGenerated ${count} static HTML pages.`);
console.log('Static page generation complete!');
