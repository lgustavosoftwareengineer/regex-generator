/**
 *
 * @param {string} layout the default layout with the `value` word indicating the replaced value
 * @param {*} value the value which go replace
 *
 *
 */
function formatter(layout, value) {
  return layout.replace("value", value);
}

/**
 *
 * @param {string | string[]} begin
 * @returns string
 */
function getRegexBegin(begin) {
  let regexBegin = "";
  const formatterWithBeginSymbol = (value) => formatter("^(value)", value);

  if (Array.isArray(begin)) {
    begin.map((element, index, list) => {
      if (index === list.length - 1) {
        return (regexBegin += `${element}`);
      }
      regexBegin += `${element}|`;
    });

    return formatterWithBeginSymbol(regexBegin);
  }

  return formatterWithBeginSymbol(begin);
}

/**
 *
 * @param {string | string[]} middle
 * @returns string
 */
function getRegexMiddle(middle) {
  let regexMiddle = "";
  const formatterWithBrackets = (value) => formatter("(value)", value);

  if (Array.isArray(middle)) {
    middle.map((element, index, list) => {
      if (index === list.length - 1) {
        return (regexMiddle += `${element}`);
      }
      regexMiddle += `${element}|`;
    });

    return formatterWithBrackets(regexMiddle);
  }

  return formatterWithBrackets(middle);
}
/**
 *
 * @param {string | string[]} end
 * @returns string
 */
function getRegexEnd(end) {
  let regexEnd = "";
  const formatterWithEndSymbol = (value) => formatter("(value)$", value);

  if (Array.isArray(end)) {
    end.map((element, index, list) => {
      if (index === list.length - 1) {
        return (regexEnd += `${element}`);
      }
      regexEnd += `${element}|`;
    });

    return formatterWithEndSymbol(regexEnd);
  }

  return formatterWithEndSymbol(end);
}

/**
 * @param {string | string[]} beginWith
 * @param {string | string[]} middle
 * @param {string | string[]} endWith
 */
function buildRegex(beginWith, middle, endWith) {
  // ^(luiz|gustavo).*(gustavo).*(gomes)$

  return RegExp(
    `${getRegexBegin(beginWith)}.*${getRegexMiddle(middle)}.*${getRegexEnd(
      endWith
    )}`
  );
}

console.log(buildRegex(["luiz", "gustavo"], ["gustavo", "maria"], "gomes"));
