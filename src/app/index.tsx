import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { Card } from "@/components/ui/Card";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { Design } from "@/namespaces/Design";

import {
  SplineSansMono_400Regular,
  SplineSansMono_700Bold,
  useFonts,
} from "@expo-google-fonts/spline-sans-mono";

import {
  SourceSerif4_400Regular,
  SourceSerif4_600SemiBold,
} from "@expo-google-fonts/source-serif-4";

import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    SplineSansMono_400Regular,
    SplineSansMono_700Bold, // load only the weights you use
    SourceSerif4_400Regular,
    SourceSerif4_600SemiBold,
    Inter_400Regular, // system-ui equivalent for UI/body text
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.subTitle}>Secure Generator</Text>
        <Text style={styles.title}>Password</Text>
        <Card>
          <Text>hellow world</Text>
        </Card>
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
    fontFamily: "SplineSansMono_400Regular",
    fontSize: 16,
    color: Design.color.darkGold,
    marginTop: 24,
    letterSpacing: 2,
  },
  title: {
    fontFamily: "Inter_600SemiBold",
    fontSize: Design.fontSize.xxLarge,
    color: Design.color.blue,
    letterSpacing: -2.5,
  },
});
