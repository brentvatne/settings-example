import { NativeModulesProxy, EventEmitter } from 'expo-modules-core';
// Import the native module. On web, it will be resolved to ExpoSettings.web.ts
// and on native platforms to ExpoSettings.ts
import ExpoSettings from './ExpoSettingsModule';
import ExpoSettingsView from './ExpoSettingsView';
// Get the native constant value.
export const PI = ExpoSettings.PI;
export function hello() {
    return ExpoSettings.hello();
}
export async function setValueAsync(value) {
    return await ExpoSettings.setValueAsync(value);
}
// For now the events are not going through the JSI, so we have to use its bridge equivalent.
// This will be fixed in the stable release and built into the module object.
// Note: On web, NativeModulesProxy.ExpoSettings is undefined, so we fall back to the directly imported implementation
const emitter = new EventEmitter(NativeModulesProxy.ExpoSettings ?? ExpoSettings);
export function addChangeListener(listener) {
    return emitter.addListener('onChange', listener);
}
export { ExpoSettingsView };
//# sourceMappingURL=ExpoSettings.js.map