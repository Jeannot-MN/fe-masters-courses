const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

export const isLetter = character => LETTER.test(character);

export const isWhitespace = character => WHITESPACE.test(character);

export const isNumber = character => NUMBER.test(character);

export const isOpeningParenthesis = character => character === '(';

export const isClosingParenthesis = character => character === ')';

export const isParenthesis = character =>
  isOpeningParenthesis(character) || isClosingParenthesis(character);

export const isQuote = character => character === '"';

export const isOperator = character => OPERATORS.includes(character);