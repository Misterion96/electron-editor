import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit} from '@angular/core';
import {showcaseValue} from '../../shared/showcase.value';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {parseStringToMarked} from '../../shared/marked';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {
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
}
