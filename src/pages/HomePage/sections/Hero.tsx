// Created by add_section_from_catalog (HeroSplitVerticalMarquee).

import React from 'react';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroSplitVerticalMarquee
        secondaryButton={{"text":"View Packages","href":"#pricing"}}
        leftItems={[{"imageSrc":"http://img.b2bpic.net/free-photo/woman-working-environment-projects_23-2148829255.jpg?_wi=1"},{"imageSrc":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"}]}
        rightItems={[{"imageSrc":"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"},{"imageSrc":"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"}]}
        description="Professional websites for businesses ready to compete online. Fast, affordable, done right."
        textAnimation="slide-up"
        title="Wohland Digital"
        tag="Wohland Digital"
        primaryButton={{"text":"Start Your Website","href":"#contact"}}
      />
    </div>
  );
}
