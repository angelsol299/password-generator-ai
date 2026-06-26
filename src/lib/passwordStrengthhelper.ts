import { GeneratePasswordFunctionProps } from "@/types";

export const passwordStrength = (
  passwordConditionsObj: GeneratePasswordFunctionProps,
) => {
  const conditionArr = Object.values(passwordConditionsObj).filter(
    (cond) => cond,
  );

  const minLengthStrong = passwordConditionsObj.length > 15;

  if (
    minLengthStrong &&
    passwordConditionsObj.lowerCase &&
    passwordConditionsObj.numbers &&
    passwordConditionsObj.upperCase &&
    !passwordConditionsObj.symbols
  ) {
    return 4;
  }

  if (conditionArr.length === 5 && minLengthStrong) {
    return 5;
  }

  if (passwordConditionsObj.symbols && minLengthStrong) {
    return 5;
  }

  if (passwordConditionsObj.symbols) {
    return 4;
  }

  if (
    (passwordConditionsObj.lowerCase && passwordConditionsObj.numbers) ||
    (passwordConditionsObj.numbers && passwordConditionsObj.upperCase) ||
    (passwordConditionsObj.upperCase && passwordConditionsObj.lowerCase)
  ) {
    return 3;
  }

  if (
    minLengthStrong &&
    (passwordConditionsObj.lowerCase ||
      passwordConditionsObj.numbers ||
      passwordConditionsObj.upperCase)
  ) {
    return 3;
  }

  if (
    passwordConditionsObj.lowerCase ||
    passwordConditionsObj.numbers ||
    passwordConditionsObj.upperCase
  ) {
    return 2;
  }
};
