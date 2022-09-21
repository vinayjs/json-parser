const parseNull = (input) => {
  if (input === null) {
    return input;
  }
}

//   console.log(parseNull(null));
//   console.log(JSON.parse(null));

const parseBoolean = (input) => {
  if (typeof input === "boolean"){
    return input;
  }
}

// console.log(parseBoolean(true));
// console.log(JSON.parse(true));
// console.log(JSON.stringify(true));

const parseNumber = (input) => {
  if (typeof input === "number"){
      return input;
  }
}

// console.log(parseNumber(23));
// console.log(JSON.parse(23));

const parseString = (input) => {
  let result = "";
  if (isNaN(Number(input)) === false) {
    result += Number(input);
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
      
  }
  return str;
}




const val = '["vinay", 22, true]'
console.log(parseArray(val));
console.log(JSON.parse(val));
