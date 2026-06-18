import { Design } from "@/namespaces/Design";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SwitchComponent } from "./SwitchComponent";
import { Card } from "./ui/Card";

export interface ValueState {
  upperCase: boolean;
}

export const PasswordConditionsCard = () => {
  const [values, setValues] = useState<ValueState>({ upperCase: false });

  const setValueFunc = (val: boolean) => {
    console.log({ val });
    setValues((prev) => ({ ...values, upperCase: !prev.upperCase }));
  };

  return (
    <Card>
      <View style={styles.container}>
        <SwitchComponent
          setValueFunc={setValueFunc}
          values={values}
          title={"Uppercase"}
          subTitle={"A-Z"}
        />
        <View style={styles.divider} />
        <SwitchComponent
          setValueFunc={setValueFunc}
          values={values}
          title={"Lowercase"}
          subTitle={"a-z"}
        />
        <View style={styles.divider} />
        <SwitchComponent
          setValueFunc={setValueFunc}
          values={values}
          title={"Numbers"}
          subTitle={"0-9"}
        />
        <View style={styles.divider} />
        <SwitchComponent
          setValueFunc={setValueFunc}
          values={values}
          title={"Symbols"}
          subTitle={"!&^$"}
        />
        <View />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  divider: { height: 1, backgroundColor: Design.color.lightGray },
  container: {
    gap: Design.space.medium,
  },
});
