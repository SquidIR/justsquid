import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import WavyBackground from "./components/WavyBackground";
import Footer from "./components/Footer";
import CursorEffect from "./components/CursorEffect";
import Home from "./pages/Home";
import About from "./pages/About";
import MusicPage from "./pages/Music";
import Subscribers from "./pages/Subscribers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CursorEffect />
      <BrowserRouter>
        <div className="relative min-h-screen bg-background">
          <WavyBackground />
          <Navigation />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/subscribers" element={<Subscribers />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
