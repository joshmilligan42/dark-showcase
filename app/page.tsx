import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TrustedBy from "@/components/TrustedBy";
import Marquee from "@/components/Marquee";
import Showcase from "@/components/Showcase";
import FloatingTalk from "@/components/FloatingTalk";
import Platforms from "@/components/Platforms";
import Technology from "@/components/Technology";
import Specs from "@/components/Specs";
import Process from "@/components/Process";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <TrustedBy />
      <Marquee />
      <Showcase />
      <Platforms />
      <Technology />
      <Specs />
      <Process />
      <Cta />
      <Footer />
      <FloatingTalk />
    </main>
  );
}
