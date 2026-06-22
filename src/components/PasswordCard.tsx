import { Design } from "@/namespaces/Design";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Card } from "./ui/Card";

interface PasswordCardProps {
  generatedPassword: string;
  refetchPassword: () => void;
}

export const PasswordCard = ({
  generatedPassword,
  refetchPassword,
}: PasswordCardProps) => {
  const rotationVal = useSharedValue(45);
  const [wasCopied, setWasCopied] = useState<boolean>(false);

  const handleRefresh = () => {
    rotationVal.value = withTiming(rotationVal.value + 360, { duration: 300 });
    refetchPassword();
  };

  const handleCopy = () => {
    setWasCopied((prev) => !prev);
    setTimeout(() => {
      setWasCopied((prev) => !prev);
    }, 700);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationVal.value}deg` }],
  }));

  const smallerPasswordSize = generatedPassword.length > 25;

  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.passwordContainer}>
          <Text
            style={[
              styles.password,
              smallerPasswordSize && styles.largerPassword,
            ]}
          >
            {generatedPassword}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.iconsContainer}>
          <Pressable onPress={handleRefresh} style={styles.iconContainer}>
            <Animated.View style={animatedStyles}>
              <Ionicons
                name="refresh"
                size={18}
                color={Design.color.lightBrown}
              />
            </Animated.View>
          </Pressable>
          <Pressable onPress={handleCopy} style={styles.iconContainer}>
            {wasCopied ? (
              <Feather name="check" size={18} color="green" />
            ) : (
              <Feather name="copy" size={18} color={Design.color.lightBrown} />
            )}
          </Pressable>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: Design.borderRadius,
    borderWidth: 0.5,
    borderColor: "#e5e5e5",
  },
  refreshIcon: {
    transform: [{ rotate: "45deg" }],
  },
  iconsContainer: {
    gap: Design.space.small,
    paddingTop: Design.space.medium,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  largerPassword: {
    fontSize: Design.fontSize.small + Design.fontSize.xSmall,
  },
  passwordContainer: {
    flex: 1,
  },
  container: {
    height: 130,
  },
});
