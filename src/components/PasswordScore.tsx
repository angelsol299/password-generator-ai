import { usePasswordScore } from "@/hooks/usePasswordScore";
import { Design } from "@/namespaces/Design";
import { GeneratePasswordFunctionProps, Score } from "@/types";
import { StyleSheet, Text, View } from "react-native";

export const PasswordScore = ({
  passwordConditionsObj,
}: {
  passwordConditionsObj: GeneratePasswordFunctionProps;
}) => {
  const { score, color } = usePasswordScore(passwordConditionsObj);

  const lineStyleVeryWeak = [styles.line, { backgroundColor: color }];
  const lineStyleWeak = [
    styles.line,
    { backgroundColor: score === Score.VERY_WEAK ? Design.color.gray : color },
  ];
  const lineStyleStrong = [
    styles.line,
    {
      backgroundColor:
        score === Score.VERY_WEAK || score === Score.WEAK
          ? Design.color.gray
          : color,
    },
  ];
  const lineStyleVeryStrong = [
    styles.line,
    {
      backgroundColor:
        score === Score.VERY_WEAK ||
        score === Score.WEAK ||
        score === Score.STRONG
          ? Design.color.gray
          : color,
    },
  ];

  const texStyles = [styles.text, { color: color }];

  return (
    <View style={styles.container}>
      <View style={styles.containerLines}>
        <View style={lineStyleVeryWeak} />
        <View style={lineStyleWeak} />
        <View style={lineStyleStrong} />
        <View style={lineStyleVeryStrong} />
      </View>
      <Text style={texStyles}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Design.space.small,
    flexDirection: "column",
    gap: Design.space.xSmall,
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
});
