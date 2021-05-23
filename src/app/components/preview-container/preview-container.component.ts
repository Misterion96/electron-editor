import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ElementRef, EventEmitter,
  HostBinding,
  OnInit, Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-preview-container',
  templateUrl: './preview-container.component.html',
  styleUrls: ['./preview-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PreviewContainerComponent implements OnInit {
  @Output() onStart = new EventEmitter()
  @Output() onMove = new EventEmitter()
  @Output() onStop = new EventEmitter()

  @HostBinding('class.preview-container') class = true
  constructor(
    private readonly r2: Renderer2,
    private readonly elRef: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  get leftContainer() {
    return this.leftSide.nativeElement
  }
  get rightContainer() {
    return this.rightSide.nativeElement
  }

  @ViewChild('leftSide', {read: ElementRef}) leftSide: ElementRef<HTMLElement>
  @ViewChild('rightSide', {read: ElementRef}) rightSide: ElementRef<HTMLElement>

  public move($event: {diffTop: number, diffLeft: number}): void {
    const {diffTop, diffLeft} = $event
    const leftRect = this.leftContainer.getBoundingClientRect()
    const rightRect = this.rightContainer.getBoundingClientRect()


    this.r2.setStyle(this.leftContainer, 'width', leftRect.width - diffLeft + 'px')
    this.r2.setStyle(this.rightContainer, 'width', rightRect.width + diffLeft + 'px')

    this.onMove.emit($event)
  }
}
