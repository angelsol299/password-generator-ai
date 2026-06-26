import { passwordStrength } from "@/lib/passwordStrengthhelper";
import { Design } from "@/namespaces/Design";
import { GeneratePasswordFunctionProps, Score } from "@/types";

export const usePasswordScore = (
  passwordConditionsObj: GeneratePasswordFunctionProps,
) => {
  const strength = passwordStrength(passwordConditionsObj);
  const result = (): {
    score: Score;
    color: (typeof Design.color)[keyof typeof Design.color];
  } => {
    switch (strength) {
      case 2:
        return {
          score: Score.VERY_WEAK,
          color: Design.color.red,
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
        return { score: Score.N_A, color: Design.color.lightBrown };
    }
  };

  return {
    score: result().score,
    color: result().color,
  };
};
