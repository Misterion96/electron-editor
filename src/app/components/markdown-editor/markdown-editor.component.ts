import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import {showcaseValue} from '../../shared/showcase.value';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {parseStringToMarked} from '../../shared/marked';
import {EditorComponent} from '../editor/editor.component';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor: EditorComponent
  public onStartCoords
  public readonly inputControl = new FormControl('')
  input$ = this.inputControl.valueChanges.pipe(
    map(v => parseStringToMarked(v))
  )

  constructor() {
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.inputControl.setValue(showcaseValue, {emitEvent: true})
    }, 1000)
  }
  private onMove($event: any): void {

  }

  public onStop($event: any): void {
    setTimeout(() =>  this.editor.standaloneCodeEditor.layout())

  }
}
