import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryTopics from "./components/CategoryTopics";
import TopicProblems from "./components/TopicProblems";
import Learn from "./components/Learn";
import Compete from "./components/Compete";
import Community from "./components/Community";
import ProblemCategories from "./components/Problems";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Main content with padding to avoid overlap */}
        <div className="pt-20">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Hero />} />

            {/* Main sections */}
            <Route path="/problems" element={<ProblemCategories />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/compete" element={<Compete />} />
            <Route path="/community" element={<Community />} />

            {/* Category -> topics */}
            <Route path="/problems/:category" element={<CategoryTopics />} />

            {/* Topic -> problems */}
            <Route path="/problems/:category/:topic" element={<TopicProblems />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
