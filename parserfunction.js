// Parser Function
const parser = (input) => {
  if (input === null || input === "null") return parseNull(input);
  else if (typeof input === "boolean") return parseBoolean(input);
  else if (input === "true") return parseBoolean(input);
  else if (input === "false") return parseBoolean(input);
  else if (typeof input === "string" && input[0] === "[") return parseArray(input);  
  else if (typeof input === "string" && input[0] === "{") return parserObject(input); 
  else return parseString(input);
};

// null parser - returns parsed output for a null input.
const parseNull = (input) => {
  let empty = null;
  if (input === null || input === "null") {
    return empty;
  }
};

//Boolean Parser - returns parsed output for a boolean input.
const parseBoolean = (input) => {
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

// Number Parser - returns parsed output for a number input.
const parseNumber = (input) => {
  if (isNaN(Number(input)) === false) {
    return Number(input);
  }
};

// String Parser - returns parsed output for a string data type.
const parseString = (input) => {
  let result = "";
  if (isNaN(Number(input)) === false) {
    return parseNumber(input);
  } else {
    result += `${replacer(input)}`;
  }
  return result;
};

// Array Parser - returns parsed output for a array input.
const parseArray = (input) => {
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

// Object Parser - returns parsed output for a object data type.
const parserObject = (input) => {
  let obj = {};
  let value = replacer(input);
  let temp = value.split(", ");
  for (let i = 0; i < temp.length; i++) {
    let value = temp[i].split(":");
    obj[value[0]] = parser(value[1]);
  }
  return obj;
};

// Replacer Function
const replacer = (string) => {
  let str = "";
  if (typeof string === "string") {
    str += string
      .replace("[", "")
      .replace("]", "")
      .replace(/["]/g, "'")
      .replace(/[']/g, "")
      .replace(/\s+/g, " ")
      .replace("{", "")
      .replace("}", "");
  }
  return str;
};

const input = '[null]';
const myParser = parser(input);
const jsonParser = JSON.parse(input);

console.log("myParser", myParser);
console.log("jsParser", jsonParser);


