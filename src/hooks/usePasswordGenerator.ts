import { generatePasswordFunction } from "@/lib/generatePasswordFunction";
import { GeneratePasswordFunctionProps } from "@/types";
import { useMemo, useState } from "react";

export const usePasswordGenerator = ({
  length,
  lowerCase,
  upperCase,
  numbers,
  symbols,
}: GeneratePasswordFunctionProps) => {
  const [refetch, setRefetch] = useState<boolean>(false);

  const MAX_CHARACTERS = 94;

  const generatedPassword = useMemo(() => {
    return generatePasswordFunction({
      length,
      lowerCase,
      upperCase,
      numbers,
      symbols,
    });
  }, [refetch]);

  const bits = Math.floor(generatedPassword.length * Math.log2(MAX_CHARACTERS));

  const refetchPassword = () => setRefetch((prev) => !prev);

  return { generatedPassword, refetchPassword, bits };
};
