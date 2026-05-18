import { motion } from "motion/react";

export const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Moving Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? "bg-cyan-500/40" : i % 3 === 1 ? "bg-white/30" : "bg-slate-400/20"}`}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{
            y: [null, "-100%"],
            opacity: [0, 1, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Large Glowing Bursts */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-slate-600/5 blur-[150px] rounded-full"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,242,255,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[#0f1115] opacity-50 pointer-events-none" />
    </div>
  );
};
