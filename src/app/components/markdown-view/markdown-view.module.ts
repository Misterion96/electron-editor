import {NgModule} from '@angular/core';
import { StrToMarkedPipe } from './shared/str-to-marked.pipe';
import {MarkdownViewComponent} from './markdown-view.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MarkdownViewComponent,
    StrToMarkedPipe
  ],
  exports: [
    MarkdownViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarkdownViewModule {}
