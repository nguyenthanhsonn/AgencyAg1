import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
