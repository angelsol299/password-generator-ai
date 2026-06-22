import { Design } from "@/namespaces/Design";
import { Score } from "@/types";

export const useScoreLineStyles = (
  color: (typeof Design.color)[keyof typeof Design.color],
  score: Score,
) => {
  const line = {
    flex: 1,
    height: 5,
    borderRadius: Design.borderRadius,
  };

  const lineStyles = {
    VERY_WEAK: [
      line,
      {
        backgroundColor: color,
      },
    ],

    WEAK: [
      line,
      {
        backgroundColor: score === Score.VERY_WEAK ? Design.color.gray : color,
      },
    ],

    STRONG: [
      line,
      {
        backgroundColor:
          score === Score.VERY_WEAK || score === Score.WEAK
            ? Design.color.gray
            : color,
        fontFamily: Design.fontFamily.interSemiBold,
      },
    ],

    VERY_STRONG: [
      line,
      {
        backgroundColor:
          score === Score.VERY_WEAK ||
          score === Score.WEAK ||
          score === Score.STRONG
            ? Design.color.gray
            : color,
        fontFamily: Design.fontFamily.interSemiBold,
      },
    ],
  };

  return {
    veryWeak: lineStyles.VERY_WEAK,
    weak: lineStyles.WEAK,
    strong: lineStyles.STRONG,
    veryStrong: lineStyles.VERY_STRONG,
  };
};
