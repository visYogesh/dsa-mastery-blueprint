import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemCategories from "@/components/Problems";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar always at the top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <ProblemCategories />
        <Features />
        <Outlet /> {/* For nested routes if needed */}
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
};

export default Index;
