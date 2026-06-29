import { Design } from "@/namespaces/Design";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";

interface IconProps {
  name: "copy" | "check";
  color: (typeof Design.color)[keyof typeof Design.color];
}

const iconInitialState: IconProps = {
  name: "copy",
  color: Design.color.lightBrown,
};

export const useCopyToClipboard = (generatedPassword: string) => {
  const [icon, setIcon] = useState<IconProps>(iconInitialState);

  const copyToClipboard = async () => {
    try {
      await Clipboard.setStringAsync(generatedPassword);
      setIcon({ name: "check", color: Design.color.green });
      setTimeout(() => {
        setIcon(iconInitialState);
      }, 1000);
    } catch (e) {
      console.log({ e });
    }
  };

  return { icon, copyToClipboard };
};
