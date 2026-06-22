interface GeneratePasswordFunctionProps {
  length?: number;
  upperCase?: boolean;
  lowerCase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
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

  const passwordLength = Math.max(length, 6);

  if (!lowerCase && !upperCase && !numbers && !symbols) {
    lowerCase = true;
  }

  let pool = "";
  const password = [];

  const getRandomCharIndex = (str: string) =>
    Math.floor(Math.random() * str.length);

  const handlePassword = (str: string) => {
    password.push(str[getRandomCharIndex(str)]);
    pool += str;
  };

  const conditions = [
    { str: lowerCaseStr, exists: lowerCase },
    { str: upperCaseStr, exists: upperCase },
    { str: numbersStr, exists: numbers },
    { str: symbolsStr, exists: symbols },
  ];

  conditions.forEach((item) => {
    if (item.exists) {
      handlePassword(item.str);
    }
  });

  for (let i = password.length; i < passwordLength; i++) {
    password.push(pool[getRandomCharIndex(pool)]);
  }

  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join("");
};
