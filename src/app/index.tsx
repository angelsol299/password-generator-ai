import { HomeScreen } from "@/screens/HomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function MainScreen() {
  return (
    <GestureHandlerRootView>
      <HomeScreen />
    </GestureHandlerRootView>
  );
}
