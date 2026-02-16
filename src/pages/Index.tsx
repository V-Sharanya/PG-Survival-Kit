import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/WelcomeScreen";
import LevelScreen from "@/components/LevelScreen";
import VictoryScreen from "@/components/VictoryScreen";
import { levels } from "@/data/gameData";

type Screen = "welcome" | "level1" | "level2" | "level3" | "victory";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("welcome");

  if (screen === "welcome") {
    return <WelcomeScreen onStart={() => setScreen("level1")} />;
  }

  if (screen === "victory") {
    return <VictoryScreen onRestart={() => setScreen("welcome")} />;
  }

  const levelIndex = levels.findIndex((l) => l.key === screen);
  const currentLevel = levels[levelIndex];

  return (
    <AnimatePresence mode="wait">
      <LevelScreen
        key={currentLevel.key}
        level={currentLevel}
        levelNumber={levelIndex + 1}
        onNext={() => {
          if (currentLevel.next) {
            setScreen(currentLevel.next as Screen);
          } else {
            setScreen("victory");
          }
        }}
      />
    </AnimatePresence>
  );
};

export default Index;
