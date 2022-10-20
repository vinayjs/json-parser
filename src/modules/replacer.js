// Replacer Function

export const replacer = (string) => {
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
  