import { HeroSection } from "../components/Hero";
import { ContactusSection } from "../components/Contactus";
import { ServiceSection } from "../components/Service";
import { Officesection } from "../components/Office";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContactusSection />
      <ServiceSection />
      <Officesection />
    </>
  );
}