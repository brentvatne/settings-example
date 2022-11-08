import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoSettings.web.ts
// and on native platforms to ExpoSettings.ts
import ExpoSettings from './ExpoSettingsModule';
import ExpoSettingsView from './ExpoSettingsView';
import { ChangeEventPayload, ExpoSettingsViewProps } from './ExpoSettings.types';

// Get the native constant value.
export const PI = ExpoSettings.PI;

export function hello(): string {
  return ExpoSettings.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoSettings.setValueAsync(value);
}

// For now the events are not going through the JSI, so we have to use its bridge equivalent.
// This will be fixed in the stable release and built into the module object.
// Note: On web, NativeModulesProxy.ExpoSettings is undefined, so we fall back to the directly imported implementation
const emitter = new EventEmitter(NativeModulesProxy.ExpoSettings ?? ExpoSettings);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoSettingsView, ExpoSettingsViewProps, ChangeEventPayload };
