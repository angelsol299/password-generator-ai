interface GeneratePasswordFunctionProps {
  length: number;
  upperCase: boolean;
  lowerCase?: boolean;
  numbers: boolean;
  symbols: boolean;
}

export const generatePasswordFunction = ({
  length = 10,
  lowerCase = true,
  upperCase = false,
  numbers = false,
  symbols = false,
}: GeneratePasswordFunctionProps) => {
  const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersStr = "0123456789";
  const symbolsStr = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  let pool = "";
  const password = [];

  const getRandomChar = (str: string) => Math.floor(Math.random() * str.length);

  if (lowerCase) {
    password.push(lowerCaseStr[getRandomChar(lowerCaseStr)]);
    pool += lowerCaseStr;
  }
  if (upperCase) {
    password.push(upperCaseStr[getRandomChar(upperCaseStr)]);
    pool += upperCaseStr;
  }

  if (numbers) {
    password.push(numbersStr[getRandomChar(numbersStr)]);
    pool += numbersStr;
  }

  if (symbols) {
    password.push(symbolsStr[getRandomChar(symbolsStr)]);
    pool += symbolsStr;
  }

  for (let i = password.length; i < length; i++) {
    password.push(pool[getRandomChar(pool)]);
  }

  let i = 0;

  while (i < password.length - 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
    i++;
  }

  return password.join("");
};
