import * as marked from 'marked';

export function parseStringToMarked(value){
  return marked.parser(marked.lexer(value, {headerIds: true}))
}
