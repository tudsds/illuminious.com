import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceNPI from "./pages/services/NPI";
import ServicePCBA from "./pages/services/PCBA";
import ServiceSMTAssembly from "./pages/services/SMTAssembly";
import ServiceThroughHole from "./pages/services/ThroughHole";
import ServiceTestingInspection from "./pages/services/TestingInspection";
import ServiceBoxBuild from "./pages/services/BoxBuild";
import ServiceInjection from "./pages/services/Injection";
import ServiceSupplyChain from "./pages/services/SupplyChain";
import ServiceDFM from "./pages/services/DFM";
import ServiceUSFulfillment from "./pages/services/USFulfillment";
import ServiceODM from "./pages/services/ODM";
import ServiceEMS from "./pages/services/EMS";
import ServiceOEM from "./pages/services/OEM";
import ServiceRapidPrototyping from "./pages/services/RapidPrototyping";
import FactoryTour from "./pages/FactoryTour";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Industries from "./pages/Industries";
import IndustryIoT from "./pages/industries/IoT";
import IndustryConsumer from "./pages/industries/Consumer";
import IndustryAutomotive from "./pages/industries/Automotive";
import IndustryMedical from "./pages/industries/Medical";
import IndustryIndustrial from "./pages/industries/Industrial";
import Capabilities from "./pages/Capabilities";
import CapabilitiesQuality from "./pages/capabilities/Quality";
import CapabilitiesIoT from "./pages/capabilities/IoTSpecialization";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Startups from "./pages/Startups";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      {/* Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      
      {/* Services */}
      <Route path="/services" component={Services} />
      <Route path="/services/npi-engineering" component={ServiceNPI} />
      <Route path="/services/pcb-assembly" component={ServicePCBA} />
      <Route path="/services/smt-assembly" component={ServiceSMTAssembly} />
      <Route path="/services/through-hole" component={ServiceThroughHole} />
      <Route path="/services/testing-inspection" component={ServiceTestingInspection} />
      <Route path="/services/box-build" component={ServiceBoxBuild} />
      <Route path="/services/injection-molding" component={ServiceInjection} />
      <Route path="/services/supply-chain" component={ServiceSupplyChain} />
      <Route path="/services/dfm" component={ServiceDFM} />
      <Route path="/services/us-fulfillment" component={ServiceUSFulfillment} />
      <Route path="/services/odm" component={ServiceODM} />
      <Route path="/services/ems" component={ServiceEMS} />
      <Route path="/services/oem" component={ServiceOEM} />
      <Route path="/services/rapid-prototyping" component={ServiceRapidPrototyping} />
      
      {/* Factory Tour */}
      <Route path="/factory-tour" component={FactoryTour} />
      
      {/* Case Studies */}
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/case-studies/:slug" component={CaseStudyDetail} />
      
      {/* Industries */}
      <Route path="/industries" component={Industries} />
      <Route path="/industries/iot" component={IndustryIoT} />
      <Route path="/industries/consumer" component={IndustryConsumer} />
      <Route path="/industries/automotive" component={IndustryAutomotive} />
      <Route path="/industries/medical" component={IndustryMedical} />
      <Route path="/industries/industrial" component={IndustryIndustrial} />
      
      {/* Capabilities */}
      <Route path="/capabilities" component={Capabilities} />
      <Route path="/capabilities/quality" component={CapabilitiesQuality} />
      <Route path="/capabilities/iot" component={CapabilitiesIoT} />
      
      {/* Blog & News */}
      <Route path="/news" component={News} />
      <Route path="/news/:slug" component={NewsDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogDetail} />
      
      {/* Other Pages */}
      <Route path="/startups" component={Startups} />
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();

  // Track virtual pageviews for GTM and GA4 on every route change
  useEffect(() => {
    // Small delay to ensure document.title is updated by SEO component
    const timer = setTimeout(() => {
      // GTM dataLayer push for virtual pageview
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "virtual_page_view",
          page: {
            path: location,
            url: window.location.href,
            title: document.title,
          },
        });
      }

      // GA4 pageview tracking
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "page_view", {
          page_path: location,
          page_title: document.title,
          page_location: window.location.href,
        });
      }

      // Meta Pixel pageview tracking
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "PageView");
      }
    }, 100);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
