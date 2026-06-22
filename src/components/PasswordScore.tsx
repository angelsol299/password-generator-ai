import { usePasswordScore } from "@/hooks/usePasswordScore";
import { Design } from "@/namespaces/Design";
import { GeneratePasswordFunctionProps } from "@/types";
import { StyleSheet, Text, View } from "react-native";

export const PasswordScore = ({
  passwordConditionsObj,
}: {
  passwordConditionsObj: GeneratePasswordFunctionProps;
}) => {
  const { score, color } = usePasswordScore(passwordConditionsObj);

  const lineStyles = [styles.line, { backgroundColor: color }];

  return (
    <View style={styles.container}>
      <View style={styles.containerLines}>
        <View style={lineStyles} />
        <View style={lineStyles} />
        <View style={lineStyles} />
        <View style={lineStyles} />
      </View>
      <Text style={styles.text}>{score}</Text>
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
