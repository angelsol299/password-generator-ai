import {
  SplineSansMono_400Regular,
  useFonts,
} from "@expo-google-fonts/spline-sans-mono";

import { HomeScreen } from "@/screens/HomeScreen";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function MainScreen() {
  const [fontsLoaded] = useFonts({
    SplineSansMono_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;
  return (
    <GestureHandlerRootView>
      <HomeScreen />
    </GestureHandlerRootView>
  );
}
