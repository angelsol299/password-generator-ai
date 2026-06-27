import { Design } from "@/namespaces/Design";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PasswordCard } from "@/components/PasswordCard";
import { PasswordConditionsCard } from "@/components/PasswordConditionsCard";
import { PasswordScore } from "@/components/PasswordScore";
import { SliderComponent } from "@/components/SliderComponent";
import { Button } from "@/components/ui/Button";
import { usePasswordGenerator } from "@/hooks/usePasswordGenerator";
import { ConditionsState, GeneratePasswordFunctionProps } from "@/types";
import { useState } from "react";

const initialState = {
  upperCase: false,
  lowerCase: true,
  numbers: false,
  symbols: false,
};

export const HomeScreen = () => {
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [conditionsValues, setConditionsValues] =
    useState<ConditionsState>(initialState);

  const passwordConditionsObj: GeneratePasswordFunctionProps = {
    length: passwordLength,
    ...conditionsValues,
  };
  const { refetchPassword, generatedPassword, bits } = usePasswordGenerator(
    passwordConditionsObj,
  );

  const passwordLengthHandler = (value: number) => {
    const wholeValue = Math.floor(value);
    setPasswordLength(wholeValue);
  };

  const generatePassword = () => refetchPassword();

  const isButtonDisabled = (conditionsValues: ConditionsState) => {
    return Object.values(conditionsValues).every((item) => !item);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={styles.safeArea}
        edges={["top", "left", "right", "bottom"]}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.wrapper}>
            <Text style={styles.subTitle}>Secure Generator</Text>
            <Text style={styles.title}>Password</Text>
            <PasswordCard
              generatedPassword={generatedPassword}
              refetchPassword={refetchPassword}
            />
            <PasswordScore
              passwordConditionsObj={passwordConditionsObj}
              generatedPassword={generatedPassword}
              bits={bits}
            />
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
          </View>
        </ScrollView>

        <Button
          onPress={generatePassword}
          text={"Generate new password"}
          disabled={isButtonDisabled(conditionsValues)}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Design.color.beige,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Design.space.medium,
    gap: Design.space.small,
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
  },
  wrapper: {
    gap: Design.space.medium,
  },
  sliderWrapper: {
    paddingBottom: Design.space.small,
  },
});
