import {Component, OnInit, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {editor} from 'monaco-editor';
import IEditorOptions = editor.IEditorOptions;
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;
export interface EditorOptions extends IEditorOptions {
  theme: string,
  language: string
}
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => EditorComponent)
    },
  ]
})
export class EditorComponent implements OnInit, ControlValueAccessor {
  public standaloneCodeEditor!: IStandaloneCodeEditor
  disabled = false;
  onChange = (value: string) => {
  };
  onTouched = () => {
  };
  public value: any;
  public editorOptions: EditorOptions = {
    language: 'markdown',
    theme: 'vs-light',
    quickSuggestions: false,
    snippetSuggestions: 'bottom',
    suggestSelection: 'first',
    acceptSuggestionOnEnter: 'on',
    suggest: {
      shareSuggestSelections: true,
      snippetsPreventQuickSuggestions: false,
    },
    automaticLayout: true,
    scrollBeyondLastLine: false,
    // noSemanticValidation: false,
    // noSyntaxValidation: false,
    renderLineHighlight: 'none',
    hideCursorInOverviewRuler: true,
    overviewRulerLanes: 0,
    minimap: {
      enabled: false
    },
    lineNumbers: 'off',
    wordWrap: 'on',
    wordWrapColumn: 140,
    lineDecorationsWidth: 10,
    lineNumbersMinChars: 2,
    glyphMargin: false,
    folding: false,
    quickSuggestionsDelay: 100,
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 13,
    lineHeight: 20,
  };
  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public onInit($event: any): void {
    this.standaloneCodeEditor = $event
  }
}

