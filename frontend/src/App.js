import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Differentials } from "./components/Differentials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy").then((module) => ({ default: module.PrivacyPolicy })));
import { LanguageProvider } from "./LanguageContext";

const HomePage = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Process />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-privacidade" element={<Suspense fallback={null}><PrivacyPolicy /></Suspense>} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
    </LanguageProvider>
  );
}

export default App;
