import ExpoModulesCore

public class ExpoSettingsModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoSettings")
    
    Function("setTheme") { (value: String) -> Void in
      UserDefaults.standard.set(value, forKey:"theme")
    }

    Function("getTheme") { () -> String in
      UserDefaults.standard.string(forKey: "theme") ?? "system"
    }
  }
}