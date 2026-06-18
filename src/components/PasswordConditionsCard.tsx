import { Design } from "@/namespaces/Design";
import { StyleSheet, Switch, Text, View } from "react-native";
import { Card } from "./ui/Card";

export const PasswordConditionsCard = () => {
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.upperCaseContainer}>
          <View>
            <Text>Uppercase</Text>
            <Text>A-Z</Text>
          </View>
          <Switch />
        </View>
        <View style={styles.divider} />
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
});
