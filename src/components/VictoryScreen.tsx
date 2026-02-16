import { motion } from "framer-motion";

interface VictoryScreenProps {
  onRestart: () => void;
}

const VictoryScreen = ({ onRestart }: VictoryScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="text-7xl mb-6"
      >
        🏆
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-5xl font-display font-black text-foreground text-glow-green mb-4"
      >
        Mission Complete
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-lg font-body text-muted-foreground mb-10 max-w-md"
      >
        You've unlocked all survival items. You're officially PG-ready. Go conquer the world!
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="px-8 py-3 rounded-full font-display font-bold text-sm bg-secondary text-secondary-foreground border border-border hover:bg-muted transition-all uppercase tracking-wider"
      >
        Play Again
      </motion.button>
    </div>
  );
};

export default VictoryScreen;
