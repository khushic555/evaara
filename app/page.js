import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BestSellers from "../components/BestSellers";
import CurvedAnnouncementBar from "../components/CurvedAnnouncementBar";
import AboutSection from "../components/ShopByCollection";
import TaglineSection from "../components/TaglineSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";
import ChatBot from "../components/ChatBot";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BestSellers />
      <CurvedAnnouncementBar/>
      <AboutSection />
      <TaglineSection />
      <TestimonialsSection />
      <FooterSection />
      <ChatBot />
    </main>
  );
}
