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
