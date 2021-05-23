import {NgModule, SecurityContext} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {HttpClientModule} from '@angular/common/http';
import {EditorModule} from './components/editor/editor.module';
import {PreviewContainerModule} from './components/preview-container/preview-container.module';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';

const options: MarkedOptions = new MarkedOptions()
options.headerIds = true
options.silent = false

@NgModule({
  declarations: [
    AppComponent,
    MarkdownEditorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClientModule,
      markedOptions: {
        provide: MarkedOptions, useValue: options
      },
      sanitize: SecurityContext.HTML
    }),
    EditorModule,
    PreviewContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
