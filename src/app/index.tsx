import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { Card } from "@/components/ui/Card";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { Design } from "@/namespaces/Design";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

import {
  SplineSansMono_400Regular,
  useFonts,
} from "@expo-google-fonts/spline-sans-mono";

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
        <Card>
          <Text style={styles.password}>{"8213jhsj032190][pqwe"}</Text>
          <View style={styles.divider} />
          <View style={styles.iconsContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="refresh" size={18} color="black" />
            </View>
            <View style={styles.iconContainer}>
              <Feather name="copy" size={18} color="black" />
            </View>
          </View>
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
  divider: {
    height: 1,
    backgroundColor: Design.color.lightGray,
  },
  password: {
    fontSize: Design.fontSize.large,
    marginBottom: 42,
  },

  iconContainer: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: "#e5e5e5",
  },
  iconsContainer: {
    gap: Design.space.medium,
    paddingTop: Design.space.large,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
