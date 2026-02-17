import level1Icon from "@/assets/level1-icon.png";
import level2Icon from "@/assets/level2-icon.png";
import level3Icon from "@/assets/level3-icon.png";
import level4Icon from "@/assets/level4-icon.jpeg";
import level5Icon from "@/assets/level5-icon.jpeg";
import level6Icon from "@/assets/level6-icon.jpeg";
import level7Icon from "@/assets/level7-icon.jpeg";


export interface ItemData {
  name: string;
  emoji: string;
  optional?: boolean;
}
export interface LevelData {
  key: string;
  title: string;
  subtitle: string;
  items: ItemData[];
  icon: string;
  theme: "level1" | "level2" | "level3";
  next: string | null;
}

export const levels: LevelData[] = [
  {
    key: "level1",
    title: "Survive the Night",
    subtitle: "Set up your sleeping zone.",
    items: [
      { name: "Bedsheets (2–3)", emoji: "🛏️" },
      { name: "Pillow", emoji: "🛋️", optional: true },
      { name: "Blanket (1 Thick & 1 Thin)", emoji: "🧣" },
      { name: "Laundry Bag", emoji: "👜" },
      { name: "AllOut" + "(or any mosquito repellent)", emoji: "🦟" },
      { name: "Small Lamp", emoji: "💡", optional: true },
    ],
    icon: level1Icon,
    theme: "level1",
    next: "level2",
  },
  {
    key: "level2",
    title: "Hygiene Hero Mode",
    subtitle: "Don't let PG life defeat your cleanliness.",
    items: [
      { name: "Towel", emoji: "🧼" },
      { name: "Soap", emoji: "🧴" },
      { name: "Toothbrush", emoji: "🪥" },      
      { name: "Toothpaste", emoji: "🦷" },
      { name: "Toothbrush Holder or Pouch ( better for travelling )", emoji: "🏺", optional: true },
      { name: "Bucket & Mug", emoji: "🪣", optional: true },
      { name: "Bathroom Slippers", emoji: "🩴" },
      { name: "Nail Cutter", emoji: "✂️" },
    ],
    icon: level2Icon,
    theme: "level2",
    next: "level3",
  },
  {
    key: "level3",
    title: "Adulting Activated",
    subtitle: "Power, laundry, hydration. Handle it.",
    items: [
      { name: "Hangers", emoji: "🪝" },
      { name: "Clips(for drying clothes)", emoji: "📎" },
      { name: "Extension Board", emoji: "🔌" },
      { name: "Water Bottle", emoji: "💧" },
      { name: "Laundry Detergent", emoji: "🧼" },
      { name: "Iron Box", emoji: "👔", optional: true },
      { name: "Tissues & Newspaper", emoji: "📰", optional: true },
    ],
    icon: level3Icon,
    theme: "level3",
    next: "level4",
  },
  {
    key: "level4",
    title: "Cosmetics & Self-Care",
    subtitle: "Stay fresh. Stay confident.",
    items: [
      { name: "Hair Oil", emoji: "🧴" },
      { name: "Comb", emoji: "🪞" },
      { name: "Mirror", emoji: "🪞", optional: true },
      { name: "Shampoo", emoji: "🧴" },
      { name: "Body Lotion", emoji: "🧼" },
      { name: "Deodorant", emoji: "🧴" },
      { name: "Body Wash", emoji: "🧼" }
    ],
    icon: level4Icon,
    theme: "level1",
    next: "level5",
  },
  {
    key: "level5",
    title: "Outfit & Essentials",
    subtitle: "Clothes for campus and beyond.",
    items: [
      { name: "Office Shirt", emoji: "👕" },
      { name: "Office Pants & Belts", emoji: "👖" },
      { name: "Casual Outfits (2-3)( for outings)", emoji: "👕" },
      { name: "Night Dress(5-6)", emoji: "🧥" },
      { name: "Sports Wear(2-3)", emoji: "🎽", optional: true },
      { name: "Extra Socks (5-6)", emoji: "🧦" },
    ],
    icon: level5Icon,
    theme: "level2",
    next: "level6",
  },
  {
    key: "level6",
    title: "Medicines & First Aid",
    subtitle: "Because health comes first.",
    items: [
      { name: "First Aid Kit", emoji: "🩹" },
      { name: "Pain Relievers", emoji: "💊" },
      { name: "Cold & Flu Medicine", emoji: "🤧" },
      { name: "Thermometer", emoji: "🌡️" },
      { name: "Mask & Hand Sanitizer", emoji: "😷" },
      { name: "Move Spray", emoji: "🧴" },
    ],
    icon: level6Icon,
    theme: "level3",
    next: "level7",
  },
  {
    key: "level7",
    title: "Electronics & Kitchen Essentials",
    subtitle: "Very Very Important for PG life.",
    items: [
      { name: "Charger(Phone, Laptop, Pods)", emoji: "🔌" },
      { name: "Spoons(2 forks & 2 spoons)", emoji: "🥄" },
      { name: "Plates(2)", emoji: "🍽️" },
      { name: "Bowls(1)", emoji: "🍜", optional:true },
      { name: "Mugs(1)", emoji: "☕",optional:true },
      { name: "Knife", emoji: "🔪", optional: true },
    ],
    icon: level7Icon,
    theme: "level1",
    next: null,
  },
]