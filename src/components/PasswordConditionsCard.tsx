import { Design } from "@/namespaces/Design";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SwitchComponent } from "./SwitchComponent";
import { Card } from "./ui/Card";

export interface ValueState {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const initialState = {
  upperCase: false,
  lowerCase: false,
  numbers: false,
  symbols: false,
};

export const PasswordConditionsCard = () => {
  const [values, setValues] = useState<ValueState>(initialState);

  const setUpperCase = (val: boolean) => {
    setValues((prev) => ({ ...prev, upperCase: val }));
  };

  const setLowerCase = (val: boolean) => {
    setValues((prev) => ({ ...prev, lowerCase: val }));
  };

  const setNumbers = (val: boolean) => {
    setValues((prev) => ({ ...prev, numbers: val }));
  };

  const setSymbols = (val: boolean) => {
    setValues((prev) => ({ ...prev, symbols: val }));
  };

  return (
    <Card>
      <View style={styles.container}>
        <SwitchComponent
          setValueFunc={(val) => setUpperCase(val)}
          value={values.upperCase}
          title={"Uppercase"}
          subTitle={"A-Z"}
        />
        <View style={styles.divider} />
        <SwitchComponent
          setValueFunc={(val) => setLowerCase(val)}
          value={values.lowerCase}
          title={"Lowercase"}
          subTitle={"a-z"}
        />
        <View style={styles.divider} />
        <SwitchComponent
          setValueFunc={(val) => setNumbers(val)}
          value={values.numbers}
          title={"Numbers"}
          subTitle={"0-9"}
        />
        <View style={styles.divider} />
        <SwitchComponent
          setValueFunc={(val) => setSymbols(val)}
          value={values.symbols}
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
