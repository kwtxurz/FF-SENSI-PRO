import { motion } from "motion/react";
import { CHARACTER_COMBOS } from "../constants";
import { ChevronLeft, Zap, Target, Shield, Users, Crosshair, Sparkles, LayoutGrid } from "lucide-react";

interface CharacterCombosProps {
  onBack: () => void;
}

const roleIcons: Record<string, any> = {
  Rusher: <Zap className="text-cyan-400" />,
  Sniper: <Crosshair className="text-slate-200" />,
  Assaulter: <Target className="text-cyan-600" />,
  Support: <Users className="text-blue-200" />,
  "Long Range": <Shield className="text-slate-400" />,
  Freestyle: <Sparkles className="text-cyan-300" />,
  Hybrid: <LayoutGrid className="text-white" />
};

export const CharacterCombos = ({ onBack }: CharacterCombosProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 pt-24 pb-32">
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 text-slate-500 font-black uppercase tracking-widest text-[10px] mb-8 group hover:text-white transition-colors"
      >
        <div className="p-2 rounded-full border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
          <ChevronLeft size={16} />
        </div>
        Return to Dashboard
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic mb-4 leading-none">
          Tactical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">Assemblages</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">
          Deploy premium character mapping optimized for Tier-S competitive performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {CHARACTER_COMBOS.map((combo, i) => (
          <motion.div
            key={combo.role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black/40 flex items-center justify-center border border-white/5 group-hover:border-cyan-500/20 transition-all">
                  {roleIcons[combo.role]}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{combo.role}</h3>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500">Operation: {combo.bestMode}</span>
                </div>
              </div>
              <div className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
                Protocol Tier S
              </div>
            </div>

            {/* Content Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Characters */}
              <div className="grid grid-cols-2 gap-4">
                {combo.characters.map((char) => (
                  <div key={char.name} className="bg-black/40 rounded-2xl p-4 border border-white/5 flex items-center gap-4 hover:border-cyan-500/10 transition-all">
                    <img src={char.image} alt={char.name} className="w-12 h-12 rounded-xl bg-cyan-500/10 object-cover" />
                    <div className="overflow-hidden">
                      <p className="text-white font-black text-[10px] uppercase truncate tracking-widest">{char.name}</p>
                      <p className="text-slate-500 text-[8px] uppercase truncate font-bold">{char.skill}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Explanation */}
              <div className="flex flex-col justify-center bg-black/20 rounded-2xl p-6 border border-white/5">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Tactical Overview</h4>
                <p className="text-slate-300 text-sm italic leading-relaxed font-medium">"{combo.explanation}"</p>
                
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(0,242,255,1)]" />
                   <span className="text-[9px] font-black text-cyan-500 uppercase tracking-widest">Quantum Engine recommendation</span>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Ad Space */}
      <div className="mt-16 w-full h-32 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-700 font-black uppercase tracking-widest text-sm">
         Premium Ad Space - Meta Tips
      </div>
    </div>
  );
};
