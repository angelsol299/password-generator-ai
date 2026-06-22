import { generatePasswordFunction } from "@/lib/generatePasswordFunction";
import { GeneratePasswordFunctionProps } from "@/types";
import { useMemo, useState } from "react";

export const usePasswordGen = ({
  length,
  lowerCase,
  upperCase,
  numbers,
  symbols,
}: GeneratePasswordFunctionProps) => {
  const [refetch, setRefetch] = useState<boolean>(false);

  const generatedPassword = useMemo(() => {
    return generatePasswordFunction({
      length,
      lowerCase,
      upperCase,
      numbers,
      symbols,
    });
  }, [refetch]);

  const refetchPassword = () => setRefetch((prev) => !prev);

  return { generatedPassword, refetchPassword };
};
