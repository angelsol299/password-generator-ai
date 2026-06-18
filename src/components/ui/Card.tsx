import { PropsWithChildren } from "react";

import { Design } from "@/namespaces/Design";
import { StyleSheet, View } from "react-native";

export const Card = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.color.white,
    borderRadius: Design.borderRadius,
    width: "100%",
    paddingVertical: Design.space.medium,
    paddingHorizontal: Design.space.medium,
  },
});
