import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Spotlight from "@/components/Spotlight";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[52px]">
        <Hero />
        <Spotlight />
        <Services />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
