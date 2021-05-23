import {AfterViewInit, Component} from '@angular/core';
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
}
