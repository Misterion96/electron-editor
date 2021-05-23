import {NgModule} from '@angular/core';
import {MarkdownPreviewComponent} from './markdown-preview.component';
import {CommonModule} from '@angular/common';
import { ParseMarkdownPipe } from './parse-markdown.pipe';

@NgModule({
  declarations: [
    MarkdownPreviewComponent,
    ParseMarkdownPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MarkdownPreviewComponent
  ]
})
export class MarkdownPreviewModule {}
