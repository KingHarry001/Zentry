import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Features from "./componenets/Features";
import Footer from "./componenets/Footer";
import Hero from "./componenets/Hero";
import Navbar from "./componenets/Navbar";
import Story from "./componenets/Story";

const App = () => {
  
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
