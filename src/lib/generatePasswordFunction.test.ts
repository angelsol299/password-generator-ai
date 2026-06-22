import { generatePasswordFunction } from "./generatePasswordFunction";

describe("generatePasswordFunction", () => {
  it("returns 10 digits", () => {
    expect(generatePasswordFunction({ length: 10 }).length).toBe(10);
  });
});
