import { Design } from "@/namespaces/Design";
import { StyleSheet, Switch, Text, View } from "react-native";
import { ValueState } from "./PasswordConditionsCard";

interface SwitchComponentProps {
  setValueFunc: (val: boolean) => void;
  values: ValueState;
  title: string;
  subTitle: string;
}

export const SwitchComponent = ({
  setValueFunc,
  values,
  title,
  subTitle,
}: SwitchComponentProps) => {
  return (
    <View style={styles.upperCaseContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Switch
        value={values.upperCase}
        onValueChange={setValueFunc}
        trackColor={{ true: Design.color.blue }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: { height: 1, backgroundColor: Design.color.lightGray },
  upperCaseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: Design.fontFamily.interSemiBold,
    fontSize: Design.fontSize.medium,
    color: Design.color.lightBrown,
  },
  subTitle: {
    fontFamily: Design.fontFamily.splineRegular,
    fontSize: Design.fontSize.small,
    color: Design.color.lightBrown,
  },
  textContainer: {
    gap: Design.space.xSmall,
  },
});
