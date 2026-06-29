import { Design } from "@/namespaces/Design";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useToast } from "react-native-pretty-toast";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ColoredPassword } from "./ColoredPassword";
import { Card } from "./ui/Card";

interface PasswordCardProps {
  generatedPassword: string;
  refetchPassword: () => void;
}

export const PasswordCard = ({
  generatedPassword,
  refetchPassword,
}: PasswordCardProps) => {
  const toast = useToast();
  const rotationVal = useSharedValue(45);

  const { icon, copyToClipboard } = useCopyToClipboard(generatedPassword);

  const handleRefresh = () => {
    rotationVal.value = withTiming(rotationVal.value + 360, { duration: 300 });
    refetchPassword();
  };

  const handleCopy = () => {
    copyToClipboard();

    toast.show({
      icon: "checkmark.seal.fill",
      title: "Password copied!",
      message: "Your password has been copied to the Clipboard successfully",
      duration: 2500,
    });
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
            <ColoredPassword generatedPassword={generatedPassword} />
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
            <Feather name={icon.name} size={18} color={icon.color} />
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
    fontFamily: Design.fontFamily.interSemiBold,
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
