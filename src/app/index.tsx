import { HomeScreen } from "@/screens/HomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ToastProvider } from "react-native-pretty-toast";

export default function MainScreen() {
  return (
    <GestureHandlerRootView>
      <ToastProvider>
        <HomeScreen />
      </ToastProvider>
    </GestureHandlerRootView>
  );
}
