"use client";

import Headers from "./Headers";
import HeroSections from "./HeroSections";
import LogoClouds from "./LogoClouds";
import FeatureSections from "./FeatureSections";
import Testimonial from "./Testimonial";
import PricingSections from "./PricingSections";
import FAQs from "./FAQs";
import CTASections from "./CTASections";
import Footer from "./Footers";

export default function Example() {
  return (
    <div>
      <Headers />

      <main className="isolate">
        <HeroSections />

        <LogoClouds />

        <FeatureSections />

        <Testimonial />

        <PricingSections />

        <FAQs />

        <CTASections />
      </main>

      <Footer />
    </div>
  );
}
