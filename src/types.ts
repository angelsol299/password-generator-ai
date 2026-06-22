export interface ConditionsState {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export interface GeneratePasswordFunctionProps {
  length: number;
  upperCase: boolean;
  lowerCase?: boolean;
  numbers: boolean;
  symbols: boolean;
}

export enum Score {
  WEAK = "Weak",
  VERY_WEAK = "Very Weak",
  STRONG = "Strong",
  VERY_STRONG = "Very Strong",
  N_A = "N/A",
}
