import { Design } from "@/namespaces/Design";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  disabled: boolean;
}

export const Button = ({ text, onPress, disabled }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{text}</Text>
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
  textDisabled: {
    color: Design.color.darkGray,
  },
  pressed: {
    backgroundColor: Design.color.lightBlue,
  },
  disabled: {
    backgroundColor: Design.color.gray,
  },
});
