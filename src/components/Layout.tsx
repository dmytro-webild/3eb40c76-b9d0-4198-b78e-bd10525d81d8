import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Product Grid",
    "href": "#product-grid"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="default" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Wohland Digital"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Wohland Digital"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
      ]}
      copyright="© 2024 Wohland Digital. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-working-environment-projects_23-2148829255.jpg?_wi=2"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
