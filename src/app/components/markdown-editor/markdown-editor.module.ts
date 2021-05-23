import {NgModule} from '@angular/core';
import {MarkdownEditorComponent} from './markdown-editor.component';
import {PreviewContainerModule} from '../preview-container/preview-container.module';
import {EditorModule} from '../editor/editor.module';
import {MarkedOptions} from 'ngx-markdown';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MarkdownPreviewModule} from '../markdown-preview/markdown-preview.module';
import {RouterModule} from '@angular/router';
const options: MarkedOptions = new MarkedOptions()
options.headerIds = true
options.silent = false
@NgModule({
  imports: [
    EditorModule,
    PreviewContainerModule,
    ReactiveFormsModule,
    CommonModule,
    MarkdownPreviewModule,
    RouterModule.forChild([
      {
        path: '',
        component: MarkdownEditorComponent
      }
    ])
  ],
  exports: [
    MarkdownEditorComponent,
    RouterModule
  ],
  declarations: [
    MarkdownEditorComponent
  ]
})
export class MarkdownEditorModule {}
