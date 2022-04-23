import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "sandy.game.gamehub",
  appName: "Game Hub",
  webDir: "www",
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 0,
    },
  },
};

export default config;
