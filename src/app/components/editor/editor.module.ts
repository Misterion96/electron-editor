import {NgModule} from '@angular/core';
import {EditorComponent} from './editor.component';
import {MonacoEditorModule, NgxMonacoEditorConfig} from 'ngx-monaco-editor';
import {FormsModule} from '@angular/forms';
const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets', // configure base path cotaining monaco-editor directory after build default: './assets'
  defaultOptions: {
    scrollBeyondLastLine: false,

  }, // pass default options to be used
  onMonacoLoad: () => { console.log((<any>window).monaco); } // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};
@NgModule({
  imports: [
    MonacoEditorModule.forRoot(monacoConfig),
    FormsModule
  ],
  exports: [
    EditorComponent
  ],
  declarations: [
    EditorComponent
  ]
})
export class EditorModule {}
