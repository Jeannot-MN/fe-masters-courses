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