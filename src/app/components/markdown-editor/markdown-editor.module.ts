import {NgModule, SecurityContext} from '@angular/core';
import {MarkdownEditorComponent} from './markdown-editor.component';
import {PreviewContainerModule} from '../preview-container/preview-container.module';
import {EditorModule} from '../editor/editor.module';

import {HttpClientModule} from '@angular/common/http';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MarkdownPreviewModule} from '../markdown-preview/markdown-preview.module';
const options: MarkedOptions = new MarkedOptions()
options.headerIds = true
options.silent = false
@NgModule({
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClientModule,
      markedOptions: {
        provide: MarkedOptions, useValue: options
      },
      sanitize: SecurityContext.HTML
    }),
    EditorModule,
    PreviewContainerModule,
    ReactiveFormsModule,
    CommonModule,
    MarkdownPreviewModule
  ],
  exports: [
    MarkdownEditorComponent
  ],
  declarations: [
    MarkdownEditorComponent
  ]
})
export class MarkdownEditorModule {}
