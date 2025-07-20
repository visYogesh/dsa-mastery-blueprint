import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemCategories from "@/components/ProblemCategories";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemCategories />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
