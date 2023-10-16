import { isLetter, isNumber, isParenthesis, isQuote, isWhitespace } from "./utils";

export function tokenize (input){
  const tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    const char = input[cursor];

    if(isWhitespace(char)){
      cursor++;
      continue;
    }

    if(isParenthesis(char)){
      tokens.push({ type: 'Parenthesis', value: char });
      cursor++;
      continue;
    }

    if(isNumber(char)){
      let num = char;
      while(isNumber(input[++cursor])){
        num += input[cursor];
      }
      tokens.push({ type: 'Number', value: Number(num) });
      continue;
    }

    if(isLetter(char)){
      let name = char;
      while(isLetter(input[++cursor])){
        name += input[cursor];
      }
      tokens.push({ type: 'Name', value: name });
      continue;
    }

    if(isQuote(char)){
      let str = '';
      while(!isQuote(input[++cursor])){
        str += input[cursor];
      }
      tokens.push({ type: 'String', value: str });
      cursor++;
      continue;
    }

    throw new Error(`Invalid token <${char}> at position ${cursor}.`)
  }

  return tokens;
}