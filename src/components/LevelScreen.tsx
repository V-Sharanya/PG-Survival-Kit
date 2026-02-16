import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LevelData } from "@/data/gameData";

interface LevelScreenProps {
  level: LevelData;
  levelNumber: number;
  onNext: () => void;
}

const themeConfig = {
  level1: {
    bg: "bg-level1-bg",
    card: "bg-level1-card",
    accent: "text-neon-orange",
    border: "border-neon-orange/30",
    glow: "box-glow-orange",
    textGlow: "text-glow-orange",
    progressGlow: "shadow-[0_0_10px_hsl(25,100%,55%,0.4)]",
    gradientFrom: "from-neon-orange",
  },
  level2: {
    bg: "bg-level2-bg",
    card: "bg-level2-card",
    accent: "text-neon-cyan",
    border: "border-neon-cyan/30",
    glow: "box-glow-cyan",
    textGlow: "text-glow-cyan",
    progressGlow: "shadow-[0_0_10px_hsl(185,100%,55%,0.4)]",
    gradientFrom: "from-neon-cyan",
  },
  level3: {
    bg: "bg-level3-bg",
    card: "bg-level3-card",
    accent: "text-neon-purple",
    border: "border-neon-purple/30",
    glow: "box-glow-purple",
    textGlow: "text-glow-purple",
    progressGlow: "shadow-[0_0_10px_hsl(280,100%,65%,0.4)]",
    gradientFrom: "from-neon-purple",
  },
};

const LevelScreen = ({ level, levelNumber, onNext }: LevelScreenProps) => {
  const [checkedItems, setCheckedItems] = useState<string[]>(() => {
    const saved = localStorage.getItem(level.key);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(level.key, JSON.stringify(checkedItems));
  }, [checkedItems, level.key]);

  const toggleItem = (itemName: string) => {
    setCheckedItems((prev) =>
      prev.includes(itemName) ? prev.filter((i) => i !== itemName) : [...prev, itemName]
    );
  };

  const requiredItems = level.items.filter((i) => !i.optional);
  const requiredChecked = requiredItems.filter((i) => checkedItems.includes(i.name)).length;
  const progress = Math.round((checkedItems.length / level.items.length) * 100);
  const canProceed = requiredItems.every((i) => checkedItems.includes(i.name));
  const t = themeConfig[level.theme];

  return (
    <motion.div
      key={level.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${t.bg} transition-colors duration-500`}
    >
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Header with icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-5 mb-6"
        >
          <img
            src={level.icon}
            alt={level.title}
            className={`w-20 h-20 rounded-xl border ${t.border} ${t.glow} object-cover`}
          />
          <div>
            <p className={`text-xs font-display uppercase tracking-[0.2em] ${t.accent} mb-1`}>
              Level {levelNumber}
            </p>
            <h1 className={`text-2xl md:text-3xl font-display font-bold text-foreground ${t.textGlow}`}>
              {level.title}
            </h1>
            <p className="text-sm font-body text-muted-foreground mt-1">{level.subtitle}</p>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-2"
        >
          <div className="flex justify-between text-xs font-display mb-2">
            <span className={t.accent}>{progress}%</span>
            <span className="text-muted-foreground">{checkedItems.length}/{level.items.length} items</span>
          </div>
          <div className="w-full bg-progress-track rounded-full h-2 overflow-hidden">
            <motion.div
              className={`h-full rounded-full bg-progress-fill ${t.progressGlow}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Items grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {level.items.map((item, i) => {
            const isChecked = checkedItems.includes(item.name);
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => toggleItem(item.name)}
                className={`relative cursor-pointer p-5 rounded-xl border text-center font-body font-medium text-sm transition-all duration-300 select-none
                  ${
                    isChecked
                      ? "bg-checked/20 border-checked/50 box-glow-checked text-foreground"
                      : `${t.card} ${t.border} hover:border-opacity-60 text-muted-foreground`
                  }
                  ${item.optional && !isChecked ? "border-dashed" : ""}`}
              >
                {/* Optional badge */}
                {item.optional && (
                  <span className="absolute top-2 right-2 text-[10px] font-display uppercase tracking-wider bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                    Buy Later
                  </span>
                )}
                {/* Emoji background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] text-6xl pointer-events-none select-none">
                  {item.emoji}
                </div>

                <AnimatePresence mode="wait">
                  {isChecked ? (
                    <motion.div
                      key="checked"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mb-1 text-2xl relative z-10"
                    >
                      ✅
                    </motion.div>
                  ) : (
                    <motion.div
                      key="unchecked"
                      className="mb-1 text-2xl relative z-10"
                    >
                      {item.emoji}
                    </motion.div>
                  )}
                </AnimatePresence>
                 <span className="relative z-10">{item.name}</span>
                {isChecked && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-primary mt-1 font-display relative z-10"
                  >
                    ACQUIRED
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Next level button */}
        <AnimatePresence>
          {canProceed && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="mt-12 text-center"
            >
              {!level.items.every((i) => checkedItems.includes(i.name)) && (
                <p className="text-xs text-muted-foreground font-body mb-3">
                  Optional items can be bought later — you're good to go!
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="px-10 py-4 rounded-full font-display font-bold text-base bg-primary text-primary-foreground box-glow-green uppercase tracking-wider hover:brightness-110 transition-all"
              >
                {level.next ? "Unlock Next Level →" : "🎉 All Complete!"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LevelScreen;
