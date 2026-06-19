import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

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
import { generatePasswordFunction } from "@/lib/generatePasswordFunction";
import { ConditionsState } from "@/types";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button } from "../components/ui/Button";

const initialState = {
  upperCase: false,
  lowerCase: true,
  numbers: false,
  symbols: false,
};

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    SplineSansMono_400Regular,
    Inter_600SemiBold,
  });

  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [conditionsValues, setConditionsValues] =
    useState<ConditionsState>(initialState);
  const [passwordGen, setPasswordGen] = useState<string>("");

  const insets = useSafeAreaInsets();

  useEffect(() => {
    setPasswordGen(
      generatePasswordFunction({
        length: 10,
        ...conditionsValues,
      }),
    );
  }, []);

  const passwordLengthHandler = (value: number) => {
    const wholeValue = Math.floor(value);

    setPasswordLength(wholeValue);
  };

  const generatePassword = () => {
    setPasswordGen(
      generatePasswordFunction({
        length: 10,
        ...conditionsValues,
      }),
    );
  };

  const isButtonDisabled = (conditionsValues: ConditionsState) => {
    return Object.values(conditionsValues).every((item) => !item);
  };

  if (!fontsLoaded) return null;
  return (
    <GestureHandlerRootView>
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
          <ScrollView
            contentContainerStyle={[
              styles.scrollViewContainer,
              { paddingBottom: insets.bottom + Design.space.small },
            ]}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.subTitle}>Secure Generator</Text>
            <Text style={styles.title}>Password</Text>
            <PasswordCard passwordGen={passwordGen} />
            <PasswordScore score={"Excellent"} />
            <View style={styles.sliderWrapper}>
              <SliderComponent
                passwordLengthHandler={passwordLengthHandler}
                passwordLength={passwordLength}
              />
            </View>
            <PasswordConditionsCard
              conditionsValues={conditionsValues}
              setConditionsValues={setConditionsValues}
            />
            <Button
              onPress={generatePassword}
              text={"Generate new password"}
              disabled={isButtonDisabled(conditionsValues)}
            />
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
    backgroundColor: Design.color.beige,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Design.space.small,
    maxWidth: MaxContentWidth,
  },
  subTitle: {
    fontFamily: Design.fontFamily.splineRegular,
    fontSize: Design.fontSize.medium,
    color: Design.color.darkGold,
    marginTop: 24,
    letterSpacing: 2,
  },
  title: {
    fontFamily: Design.fontFamily.interSemiBold,
    fontSize: Design.fontSize.xxLarge,
    color: Design.color.blue,
    letterSpacing: -2.5,
    lineHeight: Design.fontSize.xxLarge,
  },
  scrollViewContainer: {
    flexGrow: 1,
    gap: Design.space.medium,
  },
  sliderWrapper: {
    paddingBottom: Design.space.small,
  },
});
