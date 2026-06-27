import { usePasswordScore } from "@/hooks/usePasswordScore";
import { useScoreLineStyles } from "@/hooks/useScoreLineStyles";
import { Design } from "@/namespaces/Design";
import { GeneratePasswordFunctionProps, Score } from "@/types";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface PasswordScoreProps {
  passwordConditionsObj: GeneratePasswordFunctionProps;
  generatedPassword: string;
  bits: number;
}

export const PasswordScore = ({
  passwordConditionsObj,
  generatedPassword,
  bits,
}: PasswordScoreProps) => {
  const [strength, setStrength] = useState({
    veryWeak: {},
    weak: {},
    strong: {},
    veryStrong: {},
  });
  const [textStyles, setTextStyles] = useState<{ color: string; score: Score }>(
    { color: "", score: Score.N_A },
  );
  const { score, color } = usePasswordScore(passwordConditionsObj);

  const { veryWeak, weak, strong, veryStrong } = useScoreLineStyles(
    color,
    score,
  );

  useEffect(() => {
    if (veryWeak && weak && strong && veryStrong) {
      setStrength({ veryWeak, weak, strong, veryStrong });
    }

    if (score && color) {
      setTextStyles({ score, color });
    }
  }, [generatedPassword]);

  const texStyles = [styles.text, { color: textStyles.color }];

  return (
    <View style={styles.container}>
      <View style={styles.containerLines}>
        <View style={strength.veryWeak} />
        <View style={strength.weak} />
        <View style={strength.strong} />
        <View style={strength.veryStrong} />
      </View>
      <View style={styles.textContainer}>
        <Text style={texStyles}>{textStyles.score}</Text>
        <Text style={styles.bits}>{`${bits} bits`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Design.space.small,
    flexDirection: "column",
    gap: Design.space.medium,
  },
  containerLines: { flexDirection: "row", gap: Design.space.xSmall },
  line: {
    flex: 1,
    height: 5,
    backgroundColor: Design.color.green,
    borderRadius: Design.borderRadius,
  },
  text: {
    color: Design.color.green,
    fontFamily: Design.fontFamily.interSemiBold,
  },
  bits: {
    color: Design.color.darkGold,
    fontFamily: Design.fontFamily.splineRegular,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
