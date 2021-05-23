import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {parseStringToMarked} from './shared/marked';
import {showcaseValue} from './shared/showcase.value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{
  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }
  public readonly inputControl = new FormControl('')
  input$ = this.inputControl.valueChanges.pipe(
    map(v => parseStringToMarked(v))
  )
  title = 'electron-angular';

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.inputControl.setValue(showcaseValue, {emitEvent: true})
    }, 1000)
  }

  public onMove($event: any): void {
    // this.cdr.markForCheck()
  }
}
