import { Design } from "@/namespaces/Design";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Card } from "./ui/Card";

export const PasswordCard = () => {
  const rotationVal = useSharedValue(45);

  const refreshHandle = () => {
    console.log("PRESSED");
    rotationVal.value = withTiming(rotationVal.value + 360, { duration: 300 });
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationVal.value}deg` }],
  }));

  return (
    <Card>
      <Text style={styles.password}>{"8213jhsj032190][pqwe"}</Text>
      <View style={styles.divider} />
      <View style={styles.iconsContainer}>
        <Pressable onPress={refreshHandle} style={styles.iconContainer}>
          <Animated.View style={animatedStyles}>
            <Ionicons name="refresh" size={18} color="black" />
          </Animated.View>
        </Pressable>
        <View style={styles.iconContainer}>
          <Feather name="copy" size={18} color="black" />
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
    gap: Design.space.medium,
    paddingTop: Design.space.large,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
