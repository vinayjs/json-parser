const parse = (input) => {
  if (input === null) return parseNull(input);
  else if (typeof input === "boolean") return parseBoolean(input);
  else if (input === 'true') return parseBoolean(input);
  else if (input === 'false') return parseBoolean(input);
  else if (typeof input === "string") return parseString(input);
  else if (Array.isArray(input)) return parseArray(input);
}

const parseNull = (input) => {
  if (input === null) {
    return input;
  }
}

//   console.log(parseNull(null));
//   console.log(JSON.parse(null));

const parseBoolean = (input) => {
  let booleanTrue = true;
  let booleanFalse = false;
  if (typeof input === "boolean"){
    return input;
  }
  else if (input === 'true'){
    return booleanTrue;
  }
  else if (input === 'false'){
    return booleanFalse;
  }
}

// console.log(parseBoolean(true));
// console.log(JSON.parse(true));
// console.log(JSON.stringify(true));

const parseNumber = (input) => {
  if (isNaN(Number(input))=== false) {
    return Number(input);
  }

}

// console.log(parseNumber(23));
// console.log(JSON.parse(23));

const parseString = (input) => {
  let result = "";
  if (isNaN(Number(input)) === false) {
    return parseNumber(input);
  }
  else {
    result += `${replacer(input)}`
  }
  return result
}


const parseArray = (input) => {
  let result = []
  let value = replacer(input)
  let xyz = value.split(",");
  let empty = null;
  let booleanTrue = true;
  let booleanFalse = false;
   for (let i = 0; i < xyz.length; i++){
      if (isNaN(Number(xyz[i]))=== false) {
        result.push(Number(xyz[i]));
      }
      else if (typeof xyz[i]=== "string" &&  xyz[i] === 'null'){
          result.push(empty)
      }
      else if (typeof xyz[i]=== "string" &&  xyz[i] === 'true'){
          result.push(booleanTrue)
      }
      else if (typeof xyz[i]=== "string" &&  xyz[i] === 'false'){
          result.push(booleanFalse)
      }
      else {
        result.push(`${replacer(xyz[i])}`)
      }
  }
  return result
};

const replacer = (string) => {
  let str = "";
  if (typeof string === "string") {
      str += string
      .replace("[", "")               
      .replace("]", "")               
      .replace(/["]/g, "'")  
      .replace(/[']/g, "") 
      .replace(/\s+/g, '') 
      .replace("{", "")               
      .replace("}", "")  
      
  }
  return str;
}

const parserObject = (input) => {
  let obj = {};
  let value = replacer(input)
  let temp = value.split(",");  
  for(let i = 0; i < temp.length; i++){
    // console.log(temp[i])
    let value =temp[i].split(':');
    // console.log(value[1])
    obj[value[0]] = parse(value[1]);
    // console.log(parse(value[1]))
  }
  return obj
  
};




const val = '{"x":"vinay","y":true, "z":32}'
const input = "8"
console.log(parserObject(val));
console.log(JSON.parse(val));
console.log(typeof input);
console.log(parse(input));
// console.log(JSON.stringify(val));
