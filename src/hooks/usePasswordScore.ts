import { Design } from "@/namespaces/Design";
import { GeneratePasswordFunctionProps, Score } from "@/types";

export const usePasswordScore = (
  passwordConditionsObj: GeneratePasswordFunctionProps,
) => {
  for (let key in passwordConditionsObj) {
    if (!passwordConditionsObj[key]) {
      delete passwordConditionsObj[key];
    }
  }

  const passwordConditionsLength = Object.keys(passwordConditionsObj).length;

  const result = () => {
    switch (passwordConditionsLength) {
      case 1:
      case 2:
        return {
          score: Score.VERY_WEAK,
          color: Design.color.red,
          label: "Weak",
        };
      case 3:
        return {
          score: Score.WEAK,
          color: Design.color.orange,
        };
      case 4:
        return {
          score: Score.STRONG,
          color: Design.color.emeraldGreen,
        };
      case 5:
        return {
          score: Score.VERY_STRONG,
          color: Design.color.green,
        };
      default:
        return { score: "N/A", color: Design.color.lightBrown };
    }
  };

  return {
    score: result().score,
    color: result().color,
    label: result().label,
  };
};
