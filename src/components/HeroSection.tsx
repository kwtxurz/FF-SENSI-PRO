import { motion, AnimatePresence } from "motion/react";
import { MoveRight, Zap, Users } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  onStart: () => void;
  onShowCombos: () => void;
}

export const HeroSection = ({ onStart, onShowCombos }: HeroSectionProps) => {
  const [isActivating, setIsActivating] = useState(false);

  const handleStart = () => {
    window.open("https://www.effectivecpmnetwork.com/q1fyr7e5b?key=d27d5b0d4f46c4f760eba3a82aadd91e", "_blank", "noopener,noreferrer");
    setIsActivating(true);
    setTimeout(() => {
      onStart();
    }, 1500);
  };

  const handleTacticalCombos = () => {
    window.open("https://www.effectivecpmnetwork.com/hf4pjcynn?key=df05d5fc7b60cbfe98da0cb3e3c152eb", "_blank", "noopener,noreferrer");
    onShowCombos();
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-16">
      <AnimatePresence>
        {isActivating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0f1115]/90 backdrop-blur-xl flex items-center justify-center"
          >
             <motion.div 
               initial={{ scale: 0, rotate: 0 }}
               animate={{ scale: [1, 1.5, 1], rotate: 360 }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
               className="w-24 h-24 border-t-2 border-cyan-500 rounded-full shadow-[0_0_50px_rgba(0,242,255,0.3)]"
             />
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="absolute text-cyan-500 font-bold text-xl uppercase tracking-widest"
             >
               CALIBRATING
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
          alt="Gaming Background" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115]/20 via-[#0f1115]/80 to-[#0f1115]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-500 text-xs font-black tracking-widest mb-6 backdrop-blur-md"
        >
          <Zap size={14} className="fill-cyan-500" />
          <span>v3.0 QUANTUM ENGINE</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Advanced <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-slate-400 drop-shadow-[0_0_15px_rgba(0,242,255,0.3)] italic">
            Precision
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Generate clinical-grade sensitivity configurations through our proprietary neural-mapping algorithm.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            onClick={handleStart}
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,242,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 bg-cyan-500 rounded-2xl font-black text-lg text-[#0f1115] uppercase tracking-widest overflow-hidden transition-all duration-500"
          >
            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out opacity-20" />
            
            {/* Shimmer Effect */}
            <motion.div 
              className="absolute inset-0 w-[40%] h-full bg-white/30 -skew-x-20 -translate-x-full"
              animate={{ translateX: ["-200%", "600%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <span className="relative z-10 flex items-center gap-3">
              MACRO SENSI
              <MoveRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </motion.button>

          <motion.button
            onClick={handleTacticalCombos}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 bg-white/5 border border-white/10 rounded-2xl font-black text-lg text-white uppercase tracking-widest overflow-hidden backdrop-blur-xl transition-all duration-500"
          >
             {/* Shimmer Effect */}
             <motion.div 
              className="absolute inset-0 w-[40%] h-full bg-cyan-500/10 -skew-x-20 -translate-x-full"
              animate={{ translateX: ["-200%", "600%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            <span className="relative z-10 flex items-center gap-3 group-hover:text-cyan-400 transition-colors">
              Tactical Combos
              <Users size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </span>
          </motion.button>
        </div>

        {/* Floating Stats */}
        <div className="mt-24 grid grid-cols-3 gap-12 border-t border-white/5 pt-12">
           <div className="flex flex-col items-center">
              <span className="text-white font-black text-3xl mb-1 tracking-tighter">99.9%</span>
              <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black">Neural Accuracy</span>
           </div>
           <div className="flex flex-col items-center border-x border-white/10">
              <span className="text-cyan-500 font-black text-3xl mb-1 tracking-tighter">0.8ms</span>
              <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black">Compute Speed</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-white font-black text-3xl mb-1 tracking-tighter">A++</span>
              <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black">Stability Index</span>
           </div>
        </div>
      </div>
    </div>
  );
};
