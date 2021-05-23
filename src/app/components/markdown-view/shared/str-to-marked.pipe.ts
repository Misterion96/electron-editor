import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {parser, parserToken} from './marked';

@Pipe({
  name: 'strToMarked'
})
export class StrToMarkedPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) {
  }
  transform(value: string, ...args: unknown[]): unknown {
    const html = parser(value || '')
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

}
