import ExpoSettingsModule from "./ExpoSettingsModule";

export function getTheme(): string {
  return ExpoSettingsModule.getTheme();
}

export function setTheme(theme: string): void {
  return ExpoSettingsModule.setTheme(theme);
}
