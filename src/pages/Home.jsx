import { AboutUs } from "../components/home/AboutUs";
import { Header } from "../components/general/Header";
import { Hero } from "../components/home/Hero";
import { HowItWorks } from "../components/home/HowItWorks";
import { Section } from "../components/general/Section";
import { Testimonials } from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section title="About Us" content={<AboutUs />} bgColor="bg-[#F9F9F9]" />
      <Section
        title="Getting Started Could Not Be More Simple"
        content={<HowItWorks />}
        bgColor="bg-[#EAF6FF]"
      />
      <Section title="Testimonials" content={<Testimonials />} bgColor="bg-[#FFF9F0]" />
    </>
  );
}

export { Home };
