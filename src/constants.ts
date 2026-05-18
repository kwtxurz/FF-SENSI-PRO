export const RAM_OPTIONS = ["2GB", "4GB", "6GB", "8GB", "12GB+"];
export const ROM_OPTIONS = ["32GB", "64GB", "128GB", "256GB+"];
export const FPS_OPTIONS = ["60 FPS", "90 FPS", "120 FPS"];
export const AIM_LEVELS = ["Beginner", "Intermediate", "Pro"];
export const GAMEPLAY_TYPES = ["Freestyle", "Competitive"];
export const COMPETITIVE_ROLES = ["Rusher", "Sniper", "Assaulter", "Support", "Long Range", "Hybrid"];

export const SENSITIVITY_LOGIC = {
  BASE_FPS: {
    "60 FPS": 140,
    "90 FPS": 165,
    "120 FPS": 185
  },
  RAM_MODIFIER: {
    "2GB": -20,
    "4GB": -10,
    "6GB": 0,
    "8GB": 5,
    "12GB+": 5
  },
  GAMEPLAY_MODIFIER: {
    "Freestyle": 12,
    "Rusher": 10,
    "Sniper": -15,
    "Assaulter": 5,
    "Long Range": -10,
    "Support": -5,
    "Hybrid": 0
  },
  AIM_MODIFIER: {
    "Beginner": -10,
    "Intermediate": 0,
    "Pro": 10
  }
};

export const CHARACTER_COMBOS = [
  {
    role: "Rusher",
    characters: [
      { name: "Tatsuya", skill: "Rebel Rush", image: "https://api.dicebear.com/7.x/bottts/svg?seed=tatsuya" },
      { name: "Jota", skill: "Sustained Raids", image: "https://api.dicebear.com/7.x/bottts/svg?seed=jota" },
      { name: "Hayato", skill: "Bushido", image: "https://api.dicebear.com/7.x/bottts/svg?seed=hayato" },
      { name: "Joseph", skill: "Nutty Movement", image: "https://api.dicebear.com/7.x/bottts/svg?seed=joseph" }
    ],
    explanation: "Maximum speed and HP recovery during close-range combat.",
    bestMode: "CS / BR"
  },
  {
    role: "Sniper",
    characters: [
      { name: "Skyler", skill: "Riptide Rhythm", image: "https://api.dicebear.com/7.x/bottts/svg?seed=skyler" },
      { name: "Laura", skill: "Sharp Shooter", image: "https://api.dicebear.com/7.x/bottts/svg?seed=laura" },
      { name: "Maro", skill: "Falcon Fervor", image: "https://api.dicebear.com/7.x/bottts/svg?seed=maro" },
      { name: "Rafael", skill: "Dead Silent", image: "https://api.dicebear.com/7.x/bottts/svg?seed=rafael" }
    ],
    explanation: "Perfect for long-range precision and silenced kills.",
    bestMode: "BR / Ranked"
  },
  {
    role: "Assaulter",
    characters: [
      { name: "K", skill: "Master of All", image: "https://api.dicebear.com/7.x/bottts/svg?seed=k" },
      { name: "Moco", skill: "Hacker's Eye", image: "https://api.dicebear.com/7.x/bottts/svg?seed=moco" },
      { name: "Shirou", skill: "Damage Delivered", image: "https://api.dicebear.com/7.x/bottts/svg?seed=shirou" },
      { name: "Jota", skill: "Sustained Raids", image: "https://api.dicebear.com/7.x/bottts/svg?seed=jota" }
    ],
    explanation: "Balanced build for mid-range sustainability and tracking.",
    bestMode: "BR / CS"
  },
  {
    role: "Support",
    characters: [
      { name: "Dimitri", skill: "Healing Heartbeat", image: "https://api.dicebear.com/7.x/bottts/svg?seed=dimitri" },
      { name: "Kapella", skill: "Healing Song", image: "https://api.dicebear.com/7.x/bottts/svg?seed=kapella" },
      { name: "Olivia", skill: "Healing Touch", image: "https://api.dicebear.com/7.x/bottts/svg?seed=olivia" },
      { name: "Thiva", skill: "Vital Vibes", image: "https://api.dicebear.com/7.x/bottts/svg?seed=thiva" }
    ],
    explanation: "Unbeatable squad revival and healing utility.",
    bestMode: "BR / CS Team"
  },
  {
    role: "Long Range",
    characters: [
      { name: "Chrono", skill: "Time Turner", image: "https://api.dicebear.com/7.x/bottts/svg?seed=chrono" },
      { name: "Maro", skill: "Falcon Fervor", image: "https://api.dicebear.com/7.x/bottts/svg?seed=maro" },
      { name: "Laura", skill: "Sharp Shooter", image: "https://api.dicebear.com/7.x/bottts/svg?seed=laura" },
      { name: "Moco", skill: "Hacker's Eye", image: "https://api.dicebear.com/7.x/bottts/svg?seed=moco" }
    ],
    explanation: "Defensive protection while dealing max damage at distance.",
    bestMode: "BR"
  },
  {
    role: "Freestyle",
    characters: [
      { name: "Alok", skill: "Drop the Beat", image: "https://api.dicebear.com/7.x/bottts/svg?seed=alok" },
      { name: "Dasha", skill: "Partying On", image: "https://api.dicebear.com/7.x/bottts/svg?seed=dasha" },
      { name: "Jota", skill: "Sustained Raids", image: "https://api.dicebear.com/7.x/bottts/svg?seed=jota" },
      { name: "Kelly", skill: "Dash", image: "https://api.dicebear.com/7.x/bottts/svg?seed=kelly" }
    ],
    explanation: "Highest mobility and recoil reduction for trickshots.",
    bestMode: "Lone Wolf / CS"
  },
  {
    role: "Hybrid",
    characters: [
      { name: "K", skill: "Master of All", image: "https://api.dicebear.com/7.x/bottts/svg?seed=k" },
      { name: "Jota", skill: "Sustained Raids", image: "https://api.dicebear.com/7.x/bottts/svg?seed=jota" },
      { name: "Moco", skill: "Hacker's Eye", image: "https://api.dicebear.com/7.x/bottts/svg?seed=moco" },
      { name: "Laura", skill: "Sharp Shooter", image: "https://api.dicebear.com/7.x/bottts/svg?seed=laura" }
    ],
    explanation: "Versatile build for players who adapt to any situation.",
    bestMode: "All Modes"
  }
];
