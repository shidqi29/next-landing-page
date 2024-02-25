import {
  AboutUs,
  Achievements,
  FeaturePost,
  HeroSection,
  OurFeatures,
  OurGallery,
} from "@/components/layouts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <FeaturePost />
      <OurFeatures />
      <Achievements />
      <OurGallery />
    </>
  );
}
