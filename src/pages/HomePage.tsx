import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import PricingHighlightedCards from '@/components/sections/pricing/PricingHighlightedCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardBrand
      brand="Wohland Digital"
      description="Professional websites for businesses ready to compete online. Fast, affordable, done right."
      primaryButton={{
        text: "Start Your Website",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Packages",
        href: "#pricing",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/woman-working-environment-projects_23-2148829255.jpg?_wi=1"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesRevealCards
      tag="How We Help"
      title="Your Business, Online"
      description="We bridge the technical gap so you can focus on your customers."
      items={[
        {
          title: "Rapid Development",
          description: "High-quality, responsive sites delivered in days, not weeks.",
          imageSrc: "http://img.b2bpic.net/free-photo/speed-meter-extreme-scale-fast_53876-120604.jpg",
        },
        {
          title: "SEO Optimized",
          description: "Get found by local customers looking for your services.",
          imageSrc: "http://img.b2bpic.net/free-photo/search-research-subject-terms-vocabulary_53876-120303.jpg",
        },
        {
          title: "Custom Designs",
          description: "Tailored aesthetics that reflect your specific brand values.",
          imageSrc: "http://img.b2bpic.net/free-photo/artistic-color-strokes-isolated_23-2151897722.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="product-grid" data-section="product-grid">
    <SectionErrorBoundary name="product-grid">
          <FeaturesRevealCardsBento
      tag="Capabilities"
      title="All-in-One Digital Solutions"
      description="We offer comprehensive services to elevate your online presence."
      items={[
        {
          title: "Custom Web Design",
          description: "Unique, high-converting layouts built for your brand identity.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/office-supplies-red-table_171337-13058.jpg",
        },
        {
          title: "Ecommerce Setup",
          description: "Full-featured online stores to scale your sales globally.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/virtual-shopping-experience_23-2151952991.jpg",
        },
        {
          title: "Local SEO",
          description: "Dominate local search results and reach neighborhood customers.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/mobile-app-location-digital-art_23-2151762909.jpg",
        },
        {
          title: "Cloud Hosting",
          description: "High-performance, secure hosting with 99.9% uptime guaranteed.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/security-cloud_1048-2442.jpg",
        },
        {
          title: "Content Strategy",
          description: "Professional copywriting and planning to engage your audience.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/detectives-using-investigation-board_1098-15949.jpg",
        },
        {
          title: "Domain Security",
          description: "SSL certificates and hardened security to protect your data.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/person-working-html-computer_23-2150038843.jpg",
        },
        {
          title: "Ongoing Support",
          description: "Dedicated technical support to keep your site running smoothly.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/standard-quality-control-collage-concept_23-2149595844.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingHighlightedCards
      tag="Transparent Pricing"
      title="Plans for Every Growth Stage"
      description="Clear, upfront pricing with no hidden costs."
      plans={[
        {
          tag: "Starter",
          price: "$1,499",
          description: "Perfect for new local service businesses.",
          features: [
            "Mobile Responsive",
            "5 Pages",
            "Basic SEO",
            "Contact Form",
          ],
          primaryButton: {
            text: "Select Starter",
            href: "#contact",
          },
        },
        {
          tag: "Growth",
          price: "$2,999",
          description: "Ideal for established retail and trade.",
          features: [
            "Advanced SEO",
            "10 Pages",
            "Blog Setup",
            "Booking Integration",
            "Priority Support",
          ],
          highlight: "Best Value",
          primaryButton: {
            text: "Select Growth",
            href: "#contact",
          },
        },
        {
          tag: "Pro",
          price: "$4,999",
          description: "Complete digital presence for teams.",
          features: [
            "Full Ecommerce",
            "Unlimited Pages",
            "Custom Branding",
            "Analytics Dashboard",
            "Monthly Maintenance",
          ],
          primaryButton: {
            text: "Select Pro",
            href: "#contact",
          },
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Client Results"
      title="Don't Just Take Our Word"
      description="Helping businesses reach their potential online."
      testimonials={[
        {
          name: "Alex Rivet",
          role: "Local Cafe Owner",
          quote: "Wohland Digital transformed my local reach in weeks.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-working-home_23-2148162643.jpg",
        },
        {
          name: "Jamie Lee",
          role: "Plumbing Expert",
          quote: "Finally found a partner that makes web design simple.",
          imageSrc: "http://img.b2bpic.net/free-photo/freight-parcel-inspiration-uniform-art_1134-1177.jpg",
        },
        {
          name: "Sarah Miller",
          role: "Startup founder",
          quote: "Speed and transparency were top tier. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-shy-young-asian-woman-standing-front-cafe-entrance-touching-her-neck_1258-199358.jpg",
        },
        {
          name: "David Park",
          role: "Landscaper",
          quote: "My new site paid for itself within two months of launch.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-potted-plants_23-2149412615.jpg",
        },
        {
          name: "Elena Ross",
          role: "Boutique Owner",
          quote: "Stunning design and zero technical headaches. Simply great.",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-man-buys-food-reusable-jars_482257-81582.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Proven Success"
      title="Our Impact in Numbers"
      description="Results that matter to your business."
      metrics={[
        {
          value: "150+",
          description: "Websites Built",
        },
        {
          value: "200%",
          description: "Average Traffic Increase",
        },
        {
          value: "48hrs",
          description: "Average Response Time",
        },
        {
          value: "99.9%",
          description: "Uptime Guarantee",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Questions Answered"
      title="Everything You Need To Know"
      categories={[
        {
          name: "General",
          items: [
            {
              question: "How long does it take?",
              answer: "Most projects are completed within 7-14 business days.",
            },
            {
              question: "Do I need to manage hosting?",
              answer: "We provide fully managed hosting for all our clients.",
            },
          ],
        },
        {
          name: "Payments",
          items: [
            {
              question: "Are there hidden costs?",
              answer: "No. Our quotes are transparent and comprehensive.",
            },
            {
              question: "Can I pay in installments?",
              answer: "Yes, we offer flexible payment plans for larger packages.",
            },
          ],
        },
      ]}
      cta={{
        name: "Marcus Wohland",
        role: "Lead Developer",
        buttonText: "Chat with Us",
        buttonHref: "#contact",
        imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-with-laptop_23-2149915909.jpg",
      }}
      textAnimation="slide-up"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Your business deserves an online home that converts. Let's talk about your goals today."
      primaryButton={{
        text: "Schedule Consultation",
        href: "mailto:hello@wohlanddigital.com",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:hello@wohlanddigital.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
