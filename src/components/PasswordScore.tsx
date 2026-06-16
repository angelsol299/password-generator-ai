import { Design } from "@/namespaces/Design";
import { StyleSheet, Text, View } from "react-native";

export const PasswordScore = ({ score }: { score: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLines}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
      <Text style={styles.text}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: Design.space.medium,
  },
  containerLines: { flexDirection: "row", gap: Design.space.small },
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
