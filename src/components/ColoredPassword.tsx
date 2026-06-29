import { getColor } from "@/lib/helpers";
import { Text } from "react-native";

export const ColoredPassword = ({
  generatedPassword,
}: {
  generatedPassword: string;
}) => (
  <>
    {generatedPassword.split("").map((char, i) => (
      <Text key={i} style={{ color: getColor(char) }}>
        {char}
      </Text>
    ))}
  </>
);
