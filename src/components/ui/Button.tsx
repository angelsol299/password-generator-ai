import { Design } from "@/namespaces/Design";
import { Pressable, StyleSheet, Text } from "react-native";

export const Button = ({ text }: { text: string }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.color.blue,
    alignItems: "center",
    paddingVertical: Design.space.medium,
    borderRadius: Design.borderRadius,
  },
  text: {
    color: Design.color.white,
    fontFamily: Design.fontFamily.interSemiBold,
    fontSize: Design.fontSize.medium,
  },
  pressed: {
    backgroundColor: Design.color.lightBlue,
  },
});
