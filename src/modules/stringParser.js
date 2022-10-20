// String Parser - returns parsed output for a string data type.

export const parseString = (input) => {
    let result = "";
    if (isNaN(Number(input)) === false) {
      return parseNumber(input);
    } else {
      result += `${replacer(input)}`;
    }
    return result;
  };