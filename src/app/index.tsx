import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { Design } from "@/namespaces/Design";

import {
  SplineSansMono_400Regular,
  useFonts,
} from "@expo-google-fonts/spline-sans-mono";

import { PasswordCard } from "@/components/PasswordCard";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    SplineSansMono_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.subTitle}>Secure Generator</Text>
        <Text style={styles.title}>Password</Text>
        <PasswordCard />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f2e9df",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Design.space.medium,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  subTitle: {
    fontFamily: Design.familyFont.splineRegular,
    fontSize: 16,
    color: Design.color.darkGold,
    marginTop: 24,
    letterSpacing: 2,
  },
  title: {
    fontFamily: Design.familyFont.interSemiBold,
    fontSize: Design.fontSize.xxLarge,
    color: Design.color.blue,
    letterSpacing: -2.5,
  },
});
