import { generatePasswordFunction } from "./generatePasswordFunction";

describe("generatePasswordFunction", () => {
  it("returns 10 digits", () => {
    expect(generatePasswordFunction({ length: 10 }).length).toBe(10);
  });

  it("returns 6 digits whenever the length is less than 6 digits", () => {
    expect(generatePasswordFunction({ length: 2 }).length).toBe(6);
  });

  it("returns only a lowerCase password as default", () => {
    const password = generatePasswordFunction({});
    expect(password).toBe(password.toLowerCase());
  });

  it("returns only an upperCase password", () => {
    const password = generatePasswordFunction({
      lowerCase: false,
      upperCase: true,
    });
    expect(password).toBe(password.toUpperCase());
  });

  it("returns only  numbers as password", () => {
    const password = generatePasswordFunction({
      lowerCase: false,
      upperCase: false,
      numbers: true,
    });
    const numbersStr = "0123456789";
    const hasOnlyNumbers = () => {
      for (let char of password) {
        if (numbersStr.indexOf(char) === -1) return false;
      }
      return true;
    };

    expect(hasOnlyNumbers()).toBeTruthy();
  });

  it("returns only symbols as password", () => {
    const password = generatePasswordFunction({
      lowerCase: false,
      upperCase: false,
      numbers: false,
      symbols: true,
    });

    const specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/~`\\";

    const hasOnlySymbols = () => {
      for (let char of password) {
        if (specialChars.indexOf(char) === -1) return false;
      }
      return true;
    };

    expect(hasOnlySymbols()).toBeTruthy();
  });
});
