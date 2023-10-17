import { isClosingParenthesis, isOpeningParenthesis } from "./utils";

function parenthesize(tokens){
  const token = tokens.shift();

  if(isOpeningParenthesis(token.value)){
    const expression = [];
    while(!isClosingParenthesis(token.value)){
      expression.push(parenthesize(token));
    }

    tokens.shift();

    return expression;
  }

  return tokens;
}

export function parse(tokens){
  let ast = [];

  const token = tokens.shift();

  if(token.type === 'Number'){
    return {
      type: 'NumericLiteral',
      value: token.value
    }
  }

  if(token.type === 'String'){
    return {
      type: 'StringLiteral',
      value: token.value
    }
  }

  if(token.type === 'Name'){
    return {
      type: 'Identifier',
      name: token.value
    }
  }


  return ast;
}