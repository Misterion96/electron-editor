import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MarkdownViewModule} from './components/markdown-view/markdown-view.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        MarkdownViewModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
