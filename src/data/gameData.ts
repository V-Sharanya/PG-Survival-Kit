import level1Icon from "@/assets/level1-icon.png";
import level2Icon from "@/assets/level2-icon.png";
import level3Icon from "@/assets/level3-icon.png";

export interface LevelData {
  key: string;
  title: string;
  subtitle: string;
  items: string[];
  icon: string;
  theme: "level1" | "level2" | "level3";
  next: string | null;
}

export const levels: LevelData[] = [
  {
    key: "level1",
    title: "Survive the Night",
    subtitle: "Set up your sleeping zone.",
    items: ["Bedsheets (2–3)", "Pillow", "Blanket", "Mattress Protector", "Laundry Bag", "Small Lamp"],
    icon: level1Icon,
    theme: "level1",
    next: "level2",
  },
  {
    key: "level2",
    title: "Hygiene Hero Mode",
    subtitle: "Don't let PG life defeat your cleanliness.",
    items: ["Towel", "Toiletries", "Toothbrush Holder", "Bucket & Mug", "Bathroom Slippers", "Nail Cutter"],
    icon: level2Icon,
    theme: "level2",
    next: "level3",
  },
  {
    key: "level3",
    title: "Adulting Activated",
    subtitle: "Power, laundry, hydration. Handle it.",
    items: ["Hangers", "Extension Board", "Water Bottle", "Laundry Detergent", "Iron", "Storage Box"],
    icon: level3Icon,
    theme: "level3",
    next: null,
  },
];
