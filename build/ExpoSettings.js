import { EventEmitter } from "expo-modules-core";
import ExpoSettingsModule from "./ExpoSettingsModule";
const emitter = new EventEmitter(ExpoSettingsModule);
export function addThemeListener(listener) {
    return emitter.addListener("onChangeTheme", listener);
}
export function getTheme() {
    return ExpoSettingsModule.getTheme();
}
export function setTheme(theme) {
    return ExpoSettingsModule.setTheme(theme);
}
//# sourceMappingURL=ExpoSettings.js.map