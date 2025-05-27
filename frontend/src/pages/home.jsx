
import Navbar from "../components/navbar"
import Apropo from "../components/apropo";
import ServicesSection from "../components/servicesSection";
import Packs from "../components/packs";
import TestimonialsSection from "../components/testimonials-section";
import Footer from "../components/footer";
import HomeComponent from "../components/homeComponent";

export default function Home() {

  return (
    <>
        <Navbar />
        <HomeComponent />
        <Apropo />
        <ServicesSection />
        <Packs />
        <TestimonialsSection  />
        <Footer />
    </>
  )
}
