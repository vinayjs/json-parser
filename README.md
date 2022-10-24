# JSON Parser

![Json parser](/src/image/JavaScript-Parse-String.jpg.jpg)


### JSON basic overview

JSON (JavaScript Object Notation) is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays. It is a common data format with diverse uses in electronic data interchange, including that of web applications with servers.
www.json.org

### Data Types

Supported data types.

- Null
- Boolean
- Number
- String
- Object
- Array

### Null parser

Checks if the input contains null value, the parser will return 'null' as output.

```JavaScript
input === null || input === "null"
```

The above code shows the initial point of our json parser. The `valueParser` collects data from the `fileReader`.

### Boolean parser

Checks whether the input contains boolean datatype or a stringed boolean value and returns a respective boolean output.

```JavaScript
input === "boolean" || input === "true" || input === "false"

### Number parser

Checks whether the input contains Number datatype or a stringed number value and returns the corresponding number datatype as output.

```Javascript
isNaN(Number(input)) === false

```

### String parser

Checks whether the input is of a string datatype and if true calls the replacer function on the input and throws the string output.

```JavaScript

 if (isNaN(Number(input)) === false) {
      return parseNumber(input);
    } else {
      result += `${replacer(input)}`;
    }

```

### Array parser

Checks whether the input starts with [, calls the replacer function for special charcters and extacts the values of the array which will then be checked by the repective parsers for the datatype and the result will be pushed to the result array

```JavaScript

typeof input === "string" && input[0] === "["

```

### Object parser

Object parser identifies object and it's key, values from the JSON. Like the same in array parser it checks for the first character.


```JavaScript

typeof input === "string" && input[0] === "{"

```

### Replacer Function

Replacer function identifies the special characters of the json input and replaces it to the corresponding replacers to facilitate other parsers.