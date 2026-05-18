export type GameplayRole = "Rusher" | "Sniper" | "Assaulter" | "Support" | "Long Range" | "Hybrid";
export type GameplayType = "Freestyle" | "Competitive";

export interface UserSettings {
  device: string;
  ram: string;
  rom: string;
  gameplayType: GameplayType;
  role?: GameplayRole;
  fps: string;
  dpi?: string;
  aimLevel: string;
}

export interface SensitivityResults {
  general: number;
  redDot: number;
  scope2x: number;
  scope4x: number;
  sniper: number;
  freeLook: number;
}
