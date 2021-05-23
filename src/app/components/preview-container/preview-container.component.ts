import {
  ChangeDetectionStrategy,
  Component, ElementRef, EventEmitter,
  HostBinding, Input,
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

  public startPos: { top: number, left: number }
  @HostBinding('class.preview-container') class = true
  @Input() live = false
  @ViewChild('leftSide', {read: ElementRef}) leftSide: ElementRef<HTMLElement>
  @ViewChild('rightSide', {read: ElementRef}) rightSide: ElementRef<HTMLElement>

  constructor(
    private readonly r2: Renderer2,
    private readonly elRef: ElementRef,
  ) {
  }
  get container(): HTMLElement {
    return this.elRef.nativeElement
  }

  get leftContainer() {
    return this.leftSide.nativeElement
  }

  get rect() {
    return this.container.getBoundingClientRect()
  }

  get rightContainer() {
    return this.rightSide.nativeElement
  }

  public move($event: any): void {
    this.onMove.emit($event)
    if(this.live){

    }
  }

  ngOnInit(): void {
  }

  public start($event: { top: number, left: number }): void {
    this.startPos = $event
    this.onStart.emit($event)
  }

  public stop($event: { top: number, left: number }): void {
    this.onStop.emit($event)

    const diffTop = this.startPos.top - $event.top
    const diffLeft = this.startPos.left - $event.left

    this.setSize(diffTop, diffLeft)

    this.startPos = {top: 0, left: 0}
  }

  private setSize(diffTop: number, diffLeft: number): void {
    const leftRect = this.leftContainer.getBoundingClientRect()
    const rightRect = this.rightContainer.getBoundingClientRect()
    const {height, width} = this.rect

    const widthLeft = ((leftRect.width - diffLeft )/ width) * 100
    const widthRight = 100 - widthLeft

    this.r2.setStyle(this.leftContainer, 'width', widthLeft + '%')
    this.r2.setStyle(this.rightContainer, 'width', widthRight + '%')
    //
    // this.r2.setStyle(this.leftContainer, 'height', leftRect.height - diffTop + 'px')
    // this.r2.setStyle(this.rightContainer, 'height', rightRect.height + diffTop + 'px')
  }

}
