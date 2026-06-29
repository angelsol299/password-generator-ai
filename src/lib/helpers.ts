import { Design } from "@/namespaces/Design";

type ColorProps = (typeof Design.color)[keyof typeof Design.color];

export const getColor = (char: string): ColorProps => {
  const numbers = /[0-9]/;
  const symbols = /[^a-zA-Z0-9]/;

  let color: ColorProps = Design.color.black;
  if (numbers.test(char) || symbols.test(char)) {
    color = Design.color.blue;
  }

  return color;
};
