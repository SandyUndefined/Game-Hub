import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "sandy.game.hypergames",
  appName: "Hyper Games",
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
