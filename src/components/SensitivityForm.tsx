import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RAM_OPTIONS, ROM_OPTIONS, FPS_OPTIONS, AIM_LEVELS, GAMEPLAY_TYPES, COMPETITIVE_ROLES } from "../constants";
import { UserSettings, GameplayRole, GameplayType } from "../types";
import { Check, ChevronLeft, ChevronRight, Monitor, Cpu, Target, Zap, MousePointer2, Smartphone } from "lucide-react";

interface SensitivityFormProps {
  onComplete: (settings: UserSettings) => void;
  onBack: () => void;
}

export const SensitivityForm = ({ onComplete, onBack }: SensitivityFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<UserSettings>({
    device: "",
    ram: "4GB",
    rom: "64GB",
    gameplayType: "Freestyle",
    fps: "60 FPS",
    aimLevel: "Intermediate",
    dpi: ""
  });

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else onComplete(formData);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else onBack();
  };

  const updateData = (key: keyof UserSettings, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Device Hardware</h2>
              <p className="text-gray-400">Enter your phone model for precision calibration.</p>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500">
                <Smartphone size={20} />
              </div>
              <input
                type="text"
                placeholder="Example: Realme P1, Samsung S23..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-colors backdrop-blur-md"
                value={formData.device}
                onChange={(e) => updateData("device", e.target.value)}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Memory Profile</h2>
              <p className="text-gray-400">Hardware specs directly affect rendering latency.</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-3 font-black">RAM Capacity</label>
                <div className="grid grid-cols-3 gap-3">
                  {RAM_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      onClick={() => updateData("ram", opt)}
                      className={`py-3 rounded-lg font-bold border transition-all ${
                        formData.ram === opt 
                        ? "bg-cyan-500 border-cyan-500 text-[#0f1115] shadow-[0_0_20px_rgba(0,242,255,0.4)]" 
                        : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-3 font-black">ROM Storage</label>
                <div className="grid grid-cols-2 gap-3">
                  {ROM_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      onClick={() => updateData("rom", opt)}
                      className={`py-3 rounded-lg font-bold border transition-all ${
                        formData.rom === opt 
                        ? "bg-cyan-500 border-cyan-500 text-[#0f1115] shadow-[0_0_20px_rgba(0,242,255,0.4)]" 
                        : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 text-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Combat Signature</h2>
              <p className="text-gray-400">How do you move in the battlefield?</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {GAMEPLAY_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => updateData("gameplayType", type as GameplayType)}
                  className={`relative p-6 rounded-2xl border transition-all flex flex-col items-center gap-3 backdrop-blur-xl ${
                    formData.gameplayType === type 
                    ? "bg-cyan-500/10 border-cyan-500/50 text-white shadow-[0_0_30px_rgba(0,242,255,0.1)]" 
                    : "bg-white/5 border-white/10 text-slate-400"
                  }`}
                >
                  <div className={`p-3 rounded-full ${formData.gameplayType === type ? "bg-cyan-500 text-[#0f1115]" : "bg-white/10"}`}>
                    {type === "Freestyle" ? <Zap size={24} /> : <Target size={24} />}
                  </div>
                  <span className="font-black uppercase tracking-tight">{type}</span>
                </button>
              ))}
            </div>

            <AnimatePresence>
              {formData.gameplayType === "Competitive" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pt-4"
                >
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 block text-center font-black">Tactical Role</label>
                  <div className="grid grid-cols-3 gap-2">
                    {COMPETITIVE_ROLES.map(role => (
                      <button
                        key={role}
                        onClick={() => updateData("role", role)}
                        className={`py-2 px-1 rounded-lg text-[10px] font-black border transition-all uppercase tracking-tighter ${
                          formData.role === role 
                          ? "bg-white border-white text-[#0f1115] shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                          : "bg-white/5 border-white/10 text-slate-500 hover:text-white"
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Motion Clarity</h2>
              <p className="text-gray-400">Higher FPS requires dynamic sensitivity adjustments.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {FPS_OPTIONS.map(opt => (
                <button
                  key={opt}
                  onClick={() => updateData("fps", opt)}
                  className={`relative p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 backdrop-blur-xl ${
                    formData.fps === opt 
                    ? "bg-cyan-500 border-cyan-500 text-[#0f1115] shadow-[0_0_25px_rgba(0,242,255,0.3)]" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Monitor size={24} className={formData.fps === opt ? "text-[#0f1115]" : "text-slate-500"} />
                    <span className="font-black text-lg">{opt}</span>
                  </div>
                  {formData.fps === opt && <Check className="text-[#0f1115]" strokeWidth={4} />}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">DPI Resolution</h2>
              <p className="text-gray-400">Optional: Enter your developer option DPI (if set).</p>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500">
                <MousePointer2 size={20} />
              </div>
              <input
                type="number"
                placeholder="Example: 411, 480, 560..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-colors backdrop-blur-md"
                value={formData.dpi}
                onChange={(e) => updateData("dpi", e.target.value)}
              />
            </div>
            <div className="text-center pt-4">
              <button onClick={handleNext} className="text-slate-500 hover:text-cyan-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
                Skip this Module
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Skill Proficiency</h2>
              <p className="text-gray-400">Be honest about your recoil control skills.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {AIM_LEVELS.map(level => (
                <button
                  key={level}
                  onClick={() => updateData("aimLevel", level)}
                  className={`relative p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 backdrop-blur-xl ${
                    formData.aimLevel === level 
                    ? "bg-cyan-500 border-cyan-500 text-[#0f1115] shadow-[0_0_30px_rgba(0,242,255,0.4)]" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${formData.aimLevel === level ? "bg-white/20" : "bg-white/10"}`}>
                      <Cpu size={20} />
                    </div>
                    <span className="font-black text-lg">{level}</span>
                  </div>
                  {formData.aimLevel === level && <Check className="text-[#0f1115]" strokeWidth={4} />}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 flex flex-col min-h-screen pt-12 pb-32">
      <motion.button
        onClick={handleBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 text-slate-500 font-black uppercase tracking-widest text-[10px] mb-8 group self-start hover:text-cyan-400 transition-colors"
      >
        <div className="p-2 rounded-full border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
          <ChevronLeft size={14} />
        </div>
        {step === 1 ? "Exit Calibration" : "Previous Phase"}
      </motion.button>

      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-3 font-black">
          <span>Neural Calibration</span>
          <span className="text-cyan-500">P-{step} / {totalSteps}</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-600 via-white to-cyan-400 shadow-[0_0_20px_rgba(0,242,255,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "circOut" }}
          />
        </div>
      </div>

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-50 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={step === 1 && !formData.device}
            className={`group relative w-full py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all overflow-hidden ${
              step === 1 && !formData.device 
              ? "bg-slate-900 text-slate-700 cursor-not-allowed border border-white/5" 
              : "bg-cyan-500 text-[#0f1115] shadow-[0_0_40px_rgba(0,242,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {/* Shimmer */}
            {!(step === 1 && !formData.device) && (
              <motion.div 
                className="absolute inset-0 w-[40%] h-full bg-white/40 -skew-x-20 -translate-x-full"
                animate={{ translateX: ["-200%", "500%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            )}
            
            <span className="relative z-10 flex items-center gap-2">
              {step === totalSteps ? "Generate Configuration" : "Next Protocol"}
              <ChevronRight size={20} />
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
