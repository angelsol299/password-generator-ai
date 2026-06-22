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

  if (length < 6) length = 6;

  let pool = "";
  const password = [];

  const getRandomChar = (str: string) => Math.floor(Math.random() * str.length);

  const handlePassword = (str: string) => {
    password.push(str[getRandomChar(str)]);
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
