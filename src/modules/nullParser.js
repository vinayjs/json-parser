// null parser - returns parsed output for a null input.

export const parseNull = (input) => {
    let empty = null;
    if (input === null || input === "null") {
      return empty;
    }
  };