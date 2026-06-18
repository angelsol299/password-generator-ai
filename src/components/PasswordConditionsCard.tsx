import { Design } from "@/namespaces/Design";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { Card } from "./ui/Card";

interface ValueState {
  upperCase: boolean;
}

export const PasswordConditionsCard = () => {
  const [values, setValues] = useState<ValueState>({ upperCase: false });

  const setValueFunc = (val: ConstrainBoolean) => {
    console.log({ val });
    setValues((prev) => ({ ...values, upperCase: !prev.upperCase }));
  };

  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.upperCaseContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Uppercase</Text>
            <Text style={styles.subTitle}>A-Z</Text>
          </View>
          <Switch
            value={values.upperCase}
            onValueChange={setValueFunc}
            trackColor={{ true: Design.color.blue }}
          />
        </View>
        <View style={styles.divider} />
        <View />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  divider: { height: 1, backgroundColor: Design.color.lightGray },
  upperCaseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    gap: Design.space.medium,
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
