import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import {
  SplineSansMono_400Regular,
  useFonts,
} from "@expo-google-fonts/spline-sans-mono";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

if (__DEV__) {
  // Connect to Reactotron in development only; no-op in production builds.
  require("@/config/ReactotronConfig");
}

// Keep the native splash screen visible until fonts (and any other startup
// resources) are ready. Called at module load, before the app renders.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    SplineSansMono_400Regular,
    Inter_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash once fonts have loaded (or failed) so the app isn't
      // stuck behind the splash forever.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Keep the splash up (render nothing) until fonts resolve.
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
