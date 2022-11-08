import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
const NativeView = requireNativeViewManager('ExpoSettings');
export default function ExpoSettingsView(props) {
    return React.createElement(NativeView, { name: props.name });
}
//# sourceMappingURL=ExpoSettingsView.js.map