import { Subscription } from "expo-modules-core";
export declare type ThemeChangeEvent = {
    theme: string;
};
export declare function addThemeListener(listener: (event: ThemeChangeEvent) => void): Subscription;
export declare function getTheme(): string;
export declare function setTheme(theme: string): void;
//# sourceMappingURL=ExpoSettings.d.ts.map