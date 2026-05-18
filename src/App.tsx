import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { SensitivityForm } from "./components/SensitivityForm";
import { ResultScreen } from "./components/ResultScreen";
import { CharacterCombos } from "./components/CharacterCombos";
import { BackgroundParticles } from "./BackgroundParticles";
import { Footer, StaticPage } from "./components/Footer";
import { UserSettings, SensitivityResults } from "./types";
import { calculateSensitivity } from "./utils/calculator";
import { AnimatePresence, motion } from "motion/react";

type View = "hero" | "form" | "result" | "combos" | "static-about" | "static-privacy" | "static-contact";

export default function App() {
  const [view, setView] = useState<View>("hero");
  const [results, setResults] = useState<SensitivityResults | null>(null);

  const handleStart = () => setView("form");
  const handleShowCombos = () => setView("combos");

  const handleComplete = (settings: UserSettings) => {
    const calculated = calculateSensitivity(settings);
    setResults(calculated);
    setView("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setResults(null);
    setView("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const STATIC_PAGES: Record<string, string> = {
    "static-about": "FF AI Sensitivity Pro is the world's most advanced configuration engine for Free Fire players. Our mission is to provide every player with the optimal hardware-based sensitivity settings they need to dominate the battlefield.\n\nOur algorithm takes into account your specific device hardware, RAM capacity, display refresh rate, and professional role to calculate the most accurate response curves possible within the Free Fire sensitivity ecosystem.",
    "static-privacy": "We value your privacy. FF AI Sensitivity Pro does not store personal identifiable information on our servers. Your device model and hardware specs are processed locally within your browser to generate sensitivity settings. We do not track your gameplay or identity.",
    "static-contact": "For business inquiries, support, or feedback, please contact our team at support@ffaisensipro.io. We are constantly updating our database to include the latest gaming phones and hardware optimizations."
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#cfd8dc] selection:bg-cyan-500/30 selection:text-white font-sans">
      <BackgroundParticles />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {view === "hero" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HeroSection onStart={handleStart} onShowCombos={handleShowCombos} />
              <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="w-full h-32 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-slate-700 font-black uppercase tracking-[0.3em] text-xs backdrop-blur-md">
                  Premium Advertisement Module
                </div>
              </div>
            </motion.div>
          )}

          {view === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SensitivityForm 
                onComplete={handleComplete} 
                onBack={() => setView("hero")} 
              />
            </motion.div>
          )}

          {view === "result" && results && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ResultScreen results={results} onReset={handleReset} />
            </motion.div>
          )}

          {view === "combos" && (
            <motion.div
              key="combos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CharacterCombos onBack={() => setView("hero")} />
            </motion.div>
          )}
        </AnimatePresence>

        {view.startsWith("static-") && (
           <StaticPage 
              title={view.replace("static-", "").toUpperCase()} 
              content={STATIC_PAGES[view]} 
              onBack={() => setView(results ? "result" : "hero")} 
           />
        )}
      </main>

      {view !== "form" && view !== "combos" && (
        <Footer onPageSelect={(p) => setView(`static-${p.toLowerCase()}` as View)} />
      )}
    </div>
  );
}
