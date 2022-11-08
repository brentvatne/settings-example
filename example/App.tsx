import * as Settings from "expo-settings";
import { Button, Text, View } from "react-native";

export default function App() {
  const theme = Settings.getTheme();
  // Toggle between dark and light theme
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Theme: {Settings.getTheme()}</Text>
      <Button
        title={`Set theme to ${nextTheme}`}
        onPress={() => Settings.setTheme(nextTheme)}
      />
    </View>
  );
}
