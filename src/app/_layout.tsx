import { Stack } from "expo-router";

if (__DEV__) {
  // Connect to Reactotron in development only; no-op in production builds.
  require("@/config/ReactotronConfig");
}

export default function TabLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
