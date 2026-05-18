import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "motion/react";
import { SensitivityResults } from "../types";
import { Copy, RefreshCcw, Share2, ShieldCheck, Zap, Target, ChevronLeft, Check } from "lucide-react";

interface ResultScreenProps {
  results: SensitivityResults;
  onReset: () => void;
}

const CountUp = ({ value, delay = 0 }: { value: number; delay?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { 
      duration: 2, 
      delay,
      ease: "easeOut" 
    });
    return controls.stop;
  }, [value, delay]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return <span>{displayValue}</span>;
};

export const ResultScreen = ({ results, onReset }: ResultScreenProps) => {
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [showSlash, setShowSlash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSlash(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    const text = `
FF AI Sensitivity Pro Results:
General: ${results.general}
Red Dot: ${results.redDot}
2x Scope: ${results.scope2x}
4x Scope: ${results.scope4x}
Sniper Scope: ${results.sniper}
Free Look: ${results.freeLook}
    `.trim();
    navigator.clipboard.writeText(text);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 2000);
  };

  const items = [
    { label: "General", value: results.general, icon: <Zap className="text-cyan-400" /> },
    { label: "Red Dot", value: results.redDot, icon: <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" /> },
    { label: "2x Scope", value: results.scope2x, icon: <div className="text-cyan-500 font-black">2X</div> },
    { label: "4x Scope", value: results.scope4x, icon: <div className="text-slate-300 font-black">4X</div> },
    { label: "Sniper Scope", value: results.sniper, icon: <Target className="text-cyan-600" /> },
    { label: "Free Look", value: results.freeLook, icon: <ShieldCheck className="text-slate-400" /> },
  ];

  return (
    <div className="w-full max-w-lg mx-auto p-4 pt-12 pb-32">
      <AnimatePresence>
        {showSlash && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-white/10 backdrop-blur-[2px]"
          >
            <motion.div 
              initial={{ width: 0, height: 2, rotate: -45, scaleX: 0 }}
              animate={{ width: "200%", scaleX: 1 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="bg-white shadow-[0_0_50px_white]"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={onReset}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 text-slate-500 font-black uppercase tracking-widest text-[10px] mb-8 group hover:text-white transition-colors"
      >
        <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/5 transition-all">
          <ChevronLeft size={16} />
        </div>
        Return to Terminal
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-10"
      >
        <div className="inline-block p-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 backdrop-blur-md">
          <ShieldCheck size={48} className="text-cyan-500 drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]" />
        </div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Calibration Optimized</h2>
        <p className="text-slate-400 mt-2">Neural configuration successfully mapped to hardware.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="group relative overflow-hidden flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:border-cyan-500/30 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-black/40 flex items-center justify-center border border-white/5 group-hover:border-cyan-500/20">
                {item.icon}
              </div>
              <span className="font-black uppercase tracking-widest text-[10px] text-slate-500 group-hover:text-white transition-colors">{item.label}</span>
            </div>
            <div className="relative z-10">
              <span className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <CountUp value={item.value} delay={0.8 + i * 0.1} />
              </span>
            </div>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-all" />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 space-y-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          onClick={copyToClipboard}
          className="group w-full py-5 rounded-2xl bg-cyan-500 font-black uppercase tracking-widest text-[#0f1115] shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.5)] active:scale-95 transition-all flex items-center justify-center gap-3 overflow-hidden"
        >
          {/* Shimmer */}
          <motion.div 
            className="absolute inset-0 w-[40%] h-full bg-white/40 -skew-x-20 -translate-x-full"
            animate={{ translateX: ["-200%", "500%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <Copy size={20} className="relative z-10" />
          <span className="relative z-10">Export Profile</span>
        </motion.button>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="grid grid-cols-2 gap-4"
        >
          <button
            onClick={onReset}
            className="py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <RefreshCcw size={18} />
            Reset
          </button>
          <button
            className="py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Share2 size={18} />
            Share
          </button>
        </motion.div>
      </div>

      <div className="mt-12 p-10 border-2 border-dashed border-white/5 flex items-center justify-center text-gray-700 font-black uppercase tracking-[0.2em] text-sm">
        Premium Ad Space
      </div>

      {showCopyToast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-cyan-500 text-[#0f1115] rounded-full font-black shadow-2xl z-50 flex items-center gap-2 uppercase tracking-widest text-xs"
        >
          <Check size={18} strokeWidth={4} />
          Profile Copied
        </motion.div>
      )}
    </div>
  );
};
