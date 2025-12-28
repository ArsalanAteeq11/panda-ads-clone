import React from "react";
import HeroSection from "../components/Solutions/HeroSection";
import DisplayAdsSection from "../components/Solutions/DisplayAdsSection";
import BoostConversionsSection from "../components/Solutions/BoostConversionsSection";
import OffAppSection from "../components/Solutions/OffAppSection";
import MediaKitSection from "../components/Solutions/MediaKitSection";
import FooterCTA from "../components/Solutions/FooterCTA";

const Solutions = () => {
  return (
    <>
      <HeroSection
        title="Boost your brand with our retail media solutions"
        desc="Harness the power of first-party retail data to connect with millions
          of high-value customers within and beyond the app."
      />
      <DisplayAdsSection />
      <BoostConversionsSection />
      <OffAppSection />
      <MediaKitSection />
      <FooterCTA
        text="Start advertising with panda ads today!"
        button="Get in touch"
      />
    </>
  );
};

export default Solutions;
