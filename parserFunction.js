import { parseNull } from "./src/modules/nullParser";
import { parseNumber } from "./src/modules/numberParser";
import { parseBoolean } from "./src/modules/booleanParser";
import { parseString } from "./src/modules/stringParser";
import { parseArray } from "./src/modules/arrayParser";
import { parserObject } from "./src/modules/objectParser";




// Parser Function
const parser = (input) => {
  if (input === null || input === "null") return parseNull(input);
  else if (typeof input === "boolean") return parseBoolean(input);
  else if (input === "true") return parseBoolean(input);
  else if (input === "false") return parseBoolean(input);
  else if (typeof input === "number") return parseNumber(input);
  else if (typeof input === "string" && input[0] === "[") return parseArray(input);  
  else if (typeof input === "string" && input[0] === "{") return parserObject(input); 
  else return parseString(input);
};
















const input = JSON.stringify('{"name":"John", "birth":"1986-12-14", "city":"New York"}')


const myParser = parser(input);
const jsonParser = JSON.parse(input);

console.log("myParser", myParser);
console.log("jsParser", jsonParser);
console.log("jsStringify", JSON.stringify([[[23]]]));




