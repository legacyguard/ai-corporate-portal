
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import AILab from "./pages/AILab";
import Career from "./pages/Career";
import Events from "./pages/Events";
import Request from "./pages/Request";
import Safety from "./pages/Safety";
import Guides from "./pages/Guides";
import Newsletter from "./pages/Newsletter";
import Help from "./pages/Help";
import UseCases from "./pages/UseCases";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/lab" element={<AILab />} />
            <Route path="/career" element={<Career />} />
            <Route path="/events" element={<Events />} />
            <Route path="/request" element={<Request />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/help" element={<Help />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
