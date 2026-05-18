import { motion } from "motion/react";

export const Footer = ({ onPageSelect }: { onPageSelect: (page: string) => void }) => {
  return (
    <footer className="relative z-10 py-16 px-6 border-t border-white/5 bg-[#0f1115]/80 backdrop-blur-3xl">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center font-black text-[#0f1115] italic shadow-[0_0_20px_rgba(0,242,255,0.3)]">
            FF
          </div>
          <div>
            <h3 className="text-white font-black uppercase tracking-tighter text-xl leading-tight">Neural Sensitivity</h3>
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black">Quantum Calibration Engine</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <button onClick={() => onPageSelect("About")} className="text-slate-500 hover:text-cyan-400 text-[10px] uppercase tracking-widest font-black transition-colors">Manifesto</button>
          <button onClick={() => onPageSelect("Privacy")} className="text-slate-500 hover:text-cyan-400 text-[10px] uppercase tracking-widest font-black transition-colors">Privacy Encryption</button>
          <button onClick={() => onPageSelect("Contact")} className="text-slate-500 hover:text-cyan-400 text-[10px] uppercase tracking-widest font-black transition-colors">Neural Support</button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-slate-700 text-[10px] uppercase tracking-[0.3em] font-black">
          &copy; 2026 FF Neural Protocol. Distributed by AI Studio.
        </p>
      </div>
    </footer>
  );
};

export const StaticPage = ({ title, content, onBack }: { title: string, content: string, onBack: () => void }) => {
   return (
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="fixed inset-0 z-[100] bg-[#0f1115] overflow-y-auto pt-24 pb-20 px-6 backdrop-blur-xl"
      >
         <div className="max-w-2xl mx-auto">
            <button onClick={onBack} className="text-slate-500 font-black uppercase tracking-widest text-[10px] mb-12 flex items-center gap-2 group hover:text-cyan-400 transition-colors">
               <div className="p-2 rounded-full border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                  <ChevronLeft size={14} />
               </div>
               Return to Core
            </button>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic mb-10 tracking-tighter">
               {title}
            </h1>
            <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed font-medium space-y-8">
               {content.split("\n\n").map((p, i) => (
                  <motion.p 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  >
                     {p}
                  </motion.p>
               ))}
            </div>
         </div>
      </motion.div>
   )
}

const ChevronLeft = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
