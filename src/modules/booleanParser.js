//Boolean Parser - returns parsed output for a boolean input.

export const parseBoolean = (input) => {
    let booleanTrue = true;
    let booleanFalse = false;
    if (typeof input === "boolean") {
      return input;
    } else if (input === "true") {
      return booleanTrue;
    } else if (input === "false") {
      return booleanFalse;
    }
  };