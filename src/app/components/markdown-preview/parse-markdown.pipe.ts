import { Pipe, PipeTransform } from '@angular/core';
import {parseStringToMarked} from '../../shared/marked';

@Pipe({
  name: 'parseMarkdown'
})
export class ParseMarkdownPipe implements PipeTransform {

  transform(value: string): unknown {
    return parseStringToMarked(value)
  }

}
