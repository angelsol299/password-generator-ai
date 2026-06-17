import { Design } from "@/namespaces/Design";
import { StyleSheet, Text, View } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";

export const SliderComponent = ({
  passwordLengthHandler,
  passwordLength,
}: {
  passwordLengthHandler: (value: number) => void;
  passwordLength: number;
}) => {
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(30);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{"Length"}</Text>
        <Text style={styles.textValue}>{passwordLength}</Text>
      </View>

      <Slider
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        onValueChange={passwordLengthHandler}
        theme={{
          disableMinTrackTintColor: "#fff",
          maximumTrackTintColor: "#fff",
          minimumTrackTintColor: Design.color.blue,
        }}
        thumbWidth={25}
        renderThumb={() => (
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
            }}
          />
        )}
        renderBubble={() => null}
        containerStyle={{
          borderRadius: Design.borderRadius,
          height: 6,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Design.space.large,
    gap: Design.space.large,
  },
  text: {
    fontFamily: Design.fontFamily.interSemiBold,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textValue: {
    fontFamily: Design.fontFamily.interSemiBold,
    color: Design.color.blue,
    fontSize: Design.fontSize.large,
  },
});
