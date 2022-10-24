// Object Parser - returns parsed output for a object data type.

export const parserObject = (input) => {
    let obj = {};
    let value = replacer(input);
    let temp = value.split(", ");
    for (let i = 0; i < temp.length; i++) {
      let value = temp[i].split(":");
      obj[value[0]] = parser(value[1]);
    }
    return obj;
  };