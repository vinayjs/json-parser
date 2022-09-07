const parse = (input) => {
  let output = ""
  if (input === null) return  output += parseNull(input);
  else if (typeof input === "boolean") return output +=  parseBoolean(input);
  else if (typeof input === "string") return output +=  parseString(input);
  else if (Array.isArray(input)) return output += parseArray(input);
 return output
}

const replacer = (string) => {
  let str = "";
  if (typeof string === "string") {
      str += string
      .replace(/['{]/g, "{")
      .replace(/[}']/g, "}")
      .replace(/['[]/g, "[")
      .replace(/[]']/g, "]")
      .replace(/['"']/g, '')
      .replace(/["'"]/g, "");
  }
  return str;
};

const parseNull = (input) => {
  if (input === null) {
    return input;
  }
}
// console.log(parseNull(null));
// console.log(JSON.parse(null))

const parseBoolean = (input) => {
  if (typeof input === "boolean") {
   return input;
  }
}
// console.log(parseBoolean(true));
// console.log(JSON.parse(true))

const parseNumber = (input) => {
  if (typeof input === "number"){
    return input
  }
}

// console.log(parseNumber(42));
// console.log(JSON.parse(42))

const parseString = (input) => {
  let output = ""
  if (typeof input === "string"){
  output += `${replacer(input)}`  
  }
 return output
}

  const input = true
  console.log(parse(input))
  console.log(JSON.parse(input));