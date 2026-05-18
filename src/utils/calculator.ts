import { UserSettings, SensitivityResults } from "../types";
import { SENSITIVITY_LOGIC } from "../constants";

export function calculateSensitivity(settings: UserSettings): SensitivityResults {
  const { fps, ram, gameplayType, role, aimLevel } = settings;

  // 1. Base from FPS
  let base = SENSITIVITY_LOGIC.BASE_FPS[fps as keyof typeof SENSITIVITY_LOGIC.BASE_FPS] || 140;

  // 2. RAM modifier
  const ramBonus = SENSITIVITY_LOGIC.RAM_MODIFIER[ram as keyof typeof SENSITIVITY_LOGIC.RAM_MODIFIER] || 0;
  base += ramBonus;

  // 3. Gameplay/Role modifier
  let gameplayBonus = 0;
  if (gameplayType === "Freestyle") {
    gameplayBonus = SENSITIVITY_LOGIC.GAMEPLAY_MODIFIER["Freestyle"];
  } else if (role) {
    gameplayBonus = SENSITIVITY_LOGIC.GAMEPLAY_MODIFIER[role as keyof typeof SENSITIVITY_LOGIC.GAMEPLAY_MODIFIER] || 0;
  }
  base += gameplayBonus;

  // 4. Aim modifier
  const aimBonus = SENSITIVITY_LOGIC.AIM_MODIFIER[aimLevel as keyof typeof SENSITIVITY_LOGIC.AIM_MODIFIER] || 0;
  base += aimBonus;

  // Clamp General
  const general = Math.min(200, Math.max(0, base));

  // Derived values for other scopes
  // We add some deterministic random-ish variance based on device string to make it feel "processed" for that device
  const deviceSeed = settings.device.length % 5;
  
  return {
    general,
    redDot: Math.min(200, Math.max(0, general - (10 + deviceSeed))),
    scope2x: Math.min(200, Math.max(0, general - (20 + deviceSeed))),
    scope4x: Math.min(200, Math.max(0, general - (30 + deviceSeed))),
    sniper: Math.min(200, Math.max(0, Math.floor(general * 0.45) + deviceSeed)),
    freeLook: Math.min(200, Math.max(0, general + 5))
  };
}
