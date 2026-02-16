import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2 text-sm font-body uppercase tracking-[0.3em] text-muted-foreground"
        >
          Welcome to
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-black mb-4 text-foreground text-glow-green"
        >
          PG Survival Kit
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl font-body text-muted-foreground mb-2 max-w-md"
        >
          Everything you need before moving out.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm font-body text-muted-foreground mb-10"
        >
          Are you ready?
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-10 py-4 rounded-full font-display font-bold text-lg bg-primary text-primary-foreground box-glow-green hover:brightness-110 transition-all uppercase tracking-wider"
        >
          Start Mission
        </motion.button>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex gap-3"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-primary/30 border border-primary/50"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
