import * as marked from 'marked';

const MARKED_OPTIONS: marked.MarkedOptions = {
  headerIds: true,
  silent: false,
  gfm: true,
}
export const lexer = marked.lexer
export const parserToken = marked.parser
export function parser (
  value: string,
  options = MARKED_OPTIONS) {
  return marked.parser(marked.lexer(value, options))
}
export const parse = marked.parse
