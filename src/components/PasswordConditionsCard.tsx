import { Design } from "@/namespaces/Design";
import { ConditionsState } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";
import { SwitchComponent } from "./SwitchComponent";
import { Card } from "./ui/Card";

interface PasswordConditionsCardProps {
  conditionsValues: ConditionsState;
  setConditionsValues: Dispatch<SetStateAction<ConditionsState>>;
}

const initialState = {
  upperCase: false,
  lowerCase: false,
  numbers: false,
  symbols: false,
};

export const PasswordConditionsCard = ({
  conditionsValues,
  setConditionsValues,
}: PasswordConditionsCardProps) => {
  const setUpperCase = (val: boolean) => {
    setConditionsValues((prev) => ({ ...prev, upperCase: val }));
  };

  const setLowerCase = (val: boolean) => {
    setConditionsValues((prev) => ({ ...prev, lowerCase: val }));
  };

  const setNumbers = (val: boolean) => {
    setConditionsValues((prev) => ({ ...prev, numbers: val }));
  };

  const setSymbols = (val: boolean) => {
    setConditionsValues((prev) => ({ ...prev, symbols: val }));
  };

  return (
    <Card>
      <View style={styles.container}>
        <SwitchComponent
          setValueFunc={(val) => setUpperCase(val)}
          value={conditionsValues.upperCase}
          title={"Uppercase"}
          subTitle={"A-Z"}
        />
        <View style={styles.divider} />
        <SwitchComponent
          setValueFunc={(val) => setLowerCase(val)}
          value={conditionsValues.lowerCase}
          title={"Lowercase"}
          subTitle={"a-z"}
        />
        <View style={styles.divider} />
        <SwitchComponent
          setValueFunc={(val) => setNumbers(val)}
          value={conditionsValues.numbers}
          title={"Numbers"}
          subTitle={"0-9"}
        />
        <View style={styles.divider} />
        <SwitchComponent
          setValueFunc={(val) => setSymbols(val)}
          value={conditionsValues.symbols}
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
