"use client";

import Headers from "@/features/marketing/components/Headers";
import HeroSections from "@/features/marketing/components/HeroSections";
import LogoClouds from "@/features/marketing/components/LogoClouds";
import FeatureSections from "@/features/marketing/components/FeatureSections";
import Testimonial from "@/features/marketing/components/Testimonial";
import PricingSections from "@/features/marketing/components/PricingSections";
import FAQs from "@/features/marketing/components/FAQs";
import CTASections from "@/features/marketing/components/CTASections";
import Footer from "@/features/marketing/components/Footers";

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
