import SplitSection from "../components/common/CommonSection";
import CarouselCards from "../components/HomePage/ImagesGallery";
import ScrollToTop from "../components/Layout/ScrollToTop";
import Hero from "../components/HomePage/Hero";
import TestimonialsSection from "../components/HomePage/TestimonialsSection";
import CTASection from "../components/HomePage/CTASection";
import ProvenImpactSection from "../components/HomePage/ProvenImpactSection";
import PowerUpSection from "../components/HomePage/PowerUpSection";
import HeroSection from "../components/HomePage/HeroSection";
import BrandsSection from "../components/HomePage/BrandsSection";

const Home = () => {
  return (
    <>
      <Hero
        type="image"
        src="/images/foodpanda-panda-ads.webp"
        heading={{
          text: <>Reach millions with panda ads</>,
          className:
            "text-white font-bold mb-4 ml-10 text-4xl md:text-6xl max-w-lg",
        }}
        desc="Advertise with foodpanda and connects with millions of ready-to-shop customers within and beyond tha foodpanda app."
        button="Get in touch"
      />
      <HeroSection />
      <PowerUpSection />

      <SplitSection
        title="Meet the next generation of delivery!"
        description="What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe. "
        image="/images/4.png"
        imagePosition="left"
        button="About"
      />
      <SplitSection
        title="Taste the convenience."
        description="Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now."
        image="/images/5.png"
        imagePosition="right"
        subImages={[
          {
            image: "/images/app-apple.png",
            link: "#",
            alt: "Join Us",
          },
          {
            image: "/images/app-google.png",
            link: "#",
            alt: "Join Us",
          },
          {
            image: "/images/app-huawei.png",
            link: "#",
            alt: "Join Us",
          },
        ]}
      />
      <SplitSection
        title="Find the job you’d love"
        description="Hungry to make a difference? There’s a seat at our table! "
        description2="Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda. "
        image="/images/6.png"
        imagePosition="left"
        button="Join us!"
      />
      <SplitSection
        title="Feed your team."
        description="Treat your talented team to their favourite meals. Let them pick! Explore flexible corporate food delivery options and tasty employee perks."
        image="/images/7.png"
        imagePosition="right"
        button="Explore"
      />
      <ProvenImpactSection />
      <TestimonialsSection />
      <CTASection />
      <BrandsSection />
    </>
  );
};

export default Home;
