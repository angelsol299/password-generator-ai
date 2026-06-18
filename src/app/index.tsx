import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { MaxContentWidth, Spacing } from "@/constants/theme";
import { Design } from "@/namespaces/Design";

import {
  SplineSansMono_400Regular,
  useFonts,
} from "@expo-google-fonts/spline-sans-mono";

import { PasswordCard } from "@/components/PasswordCard";
import { PasswordConditionsCard } from "@/components/PasswordConditionsCard";
import { PasswordScore } from "@/components/PasswordScore";
import { SliderComponent } from "@/components/SliderComponent";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button } from "../components/ui/Button";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    SplineSansMono_400Regular,
    Inter_600SemiBold,
  });

  const [passwordLength, setPasswordLength] = useState<number>(0);

  const passwordLengthHandler = (value: number) => {
    console.log(value);

    const wholeValue = Math.floor(value);

    setPasswordLength(wholeValue);
  };

  if (!fontsLoaded) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.subTitle}>Secure Generator</Text>
            <View>
              <Text style={styles.title}>Password</Text>
            </View>
            <PasswordCard />
            <PasswordScore score={"Excellent"} />
            <SliderComponent
              passwordLengthHandler={passwordLengthHandler}
              passwordLength={passwordLength}
            />
            <PasswordConditionsCard />
            <Button text={"Generate new password"} />
          </ScrollView>
        </SafeAreaView>
      </ThemedView>
    </GestureHandlerRootView>
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
    gap: Design.space.small,
    maxWidth: MaxContentWidth,
  },
  subTitle: {
    fontFamily: Design.fontFamily.splineRegular,
    fontSize: 16,
    color: Design.color.darkGold,
    marginTop: 24,
    letterSpacing: 2,
  },
  title: {
    fontFamily: Design.fontFamily.interSemiBold,
    fontSize: Design.fontSize.xxLarge,
    color: Design.color.blue,
    letterSpacing: -2.5,
  },
  scrollViewContainer: {
    flex: 1,
    gap: Design.space.large,
  },
});
