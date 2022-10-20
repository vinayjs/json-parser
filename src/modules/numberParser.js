// Number Parser - returns parsed output for a number input.

export const parseNumber = (input) => {
    if (isNaN(Number(input)) === false) {
      return Number(input);
    }
  };
  