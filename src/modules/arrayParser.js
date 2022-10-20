// Array Parser - returns parsed output for a array input.

export const parseArray = (input) => {
    let result = [];
    let value = replacer(input);
    let xyz = value.split(",");
    for (let i = 0; i < xyz.length; i++) {
      if (isNaN(Number(xyz[i])) === false) {
        result.push(Number(xyz[i]));
      } else if (typeof xyz[i] === "string" && xyz[i] === "null") {
        result.push(parseNull(xyz[i]));
      } else if (typeof xyz[i] === "string" && xyz[i] === "true") {
        result.push(parseBoolean(xyz[i]));
      } else if (typeof xyz[i] === "string" && xyz[i] === "{") {
        result.push(parserObject(xyz[i]));
      } else {
        result.push(parseString(xyz[i]));
      }
    }
    return result;
  };