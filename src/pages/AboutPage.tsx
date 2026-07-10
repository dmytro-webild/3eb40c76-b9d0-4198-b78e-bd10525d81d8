import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Hunter Wohland"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Contact Me", href: "/contact" }}
      />
      
      <main className="flex-grow">
        <HeroSplit
          tag="About Me"
          title="Hi, I'm Hunter Wohland."
          description="A 19-year-old student at the University of Arizona, based in Phoenix, passionate about building digital solutions."
          primaryButton={{ text: "View Projects", href: "/projects" }}
          secondaryButton={{ text: "Get in Touch", href: "/contact" }}
          imageSrc="https://storage.googleapis.com/webild/users/user_3GKKiGEgn6dSjiwYQl6gdVyYK8s/uploaded-1783716595793-ymo2yyry.png"
          textAnimation="slide-up"
        />
        
        <AboutTextSplit
          title="Why I Started This Business"
          descriptions={[
            "Living in Phoenix and studying at the University of Arizona, I noticed a significant gap between local businesses and the modern digital presence they truly need to thrive in today's market.",
            "At 19, I decided not to wait until graduation to start making an impact. I launched this business to apply my skills in real-time, helping clients grow their online footprint while I continue to learn and evolve as a developer and entrepreneur."
          ]}
          textAnimation="fade-blur"
        />
      </main>

      <FooterMinimal
        brand="Hunter Wohland"
        copyright="© 2024 Hunter Wohland. All rights reserved."
      />
    </div>
  );
}