import { Design } from "@/namespaces/Design";
import { GeneratePasswordFunctionProps } from "@/types";

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
        return { score: "Weak", color: Design.color.red };
      case 3:
        return { score: "Very weak", color: Design.color.orange };
      case 4:
        return { score: "Strong", color: Design.color.yellow };
      case 5:
        return { score: "Very strong", color: Design.color.green };
      default:
        return { score: "N/A", color: Design.color.lightBrown };
    }
  };

  return { score: result().score, color: result().color };
};
