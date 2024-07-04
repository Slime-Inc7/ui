export function escapeDollarNumber(text) {
  var escapedText = '';
  for (var i = 0; i < text.length; i += 1) {
    var char = text[i];
    var nextChar = text[i + 1] || ' ';
    if (char === '$' && nextChar >= '0' && nextChar <= '9') {
      char = '\\$';
    }
    escapedText += char;
  }
  return escapedText;
}
export function escapeBrackets(text) {
  var pattern = /(```[\S\s]*?```|`.*?`)|\\\[([\S\s]*?[^\\])\\]|\\\((.*?)\\\)/g;
  return text.replaceAll(pattern, function (match, codeBlock, squareBracket, roundBracket) {
    if (codeBlock) {
      return codeBlock;
    } else if (squareBracket) {
      return "$$".concat(squareBracket, "$$");
    } else if (roundBracket) {
      return "$".concat(roundBracket, "$");
    }
    return match;
  });
}
export function escapeMhchem(text) {
  return text.replaceAll('$\\ce{', '$\\\\ce{').replaceAll('$\\pu{', '$\\\\pu{');
}