import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Packs from "./components/packs";
import ServicesSection from "./components/servicesSection";
import Home from "./pages/home";


function App() {
  return (
    <div className=" flex flex-col ">
      <Navbar />
      <Home />
      <ServicesSection />
      <Packs />
      <Footer />
    </div>
  );
}

export default App;
