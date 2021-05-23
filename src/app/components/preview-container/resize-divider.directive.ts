import {
  AfterViewInit, ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter, HostBinding,
  Inject,
  NgZone,
  Output
} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appResizeDivider]'
})
export class ResizeDividerDirective implements AfterViewInit {
  @Output() onStart = new EventEmitter()
  @Output() onMove = new EventEmitter()
  @Output() onStop = new EventEmitter()

  @HostBinding('style.left.px') left = null
  @HostBinding('style.top.px') top = null

  private startTop = 0
  private startLeft = 0

  private prefTick: {
    top: number,
    left: number
  }

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly zone: NgZone,
    private readonly er: ElementRef<HTMLElement>,
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  get divider(): HTMLElement {
    return this.er.nativeElement
  }

  get RECT(): DOMRect {
    return this.divider.getBoundingClientRect()
  }

  public ngAfterViewInit(): void {
    this.mousedown$(this.er.nativeElement)
      .subscribe(e => this.onDividerMove(e as MouseEvent))
  }

  public ngOnInit(): void {

  }

  private mousedown$(el: HTMLElement): Observable<Event> {
    return this.zone.runOutsideAngular(() => {
      return fromEvent(el, 'mousedown')
        .pipe(
          tap(event => {
            (event as MouseEvent).preventDefault()
            this.setStartCoords()
            this.onStart.emit(this.RECT);
            this.setStartStyle();
          }),
          switchMap(() => this.mousemove$())
        )
    })

  }

  private mousemove$(): Observable<Event> {
    return this.zone.runOutsideAngular(() => {
      return fromEvent(this.document, 'mousemove')
        .pipe(
          takeUntil(this.mouseUp$())
        )
    })
  }

  private mouseUp$(): Observable<Event> {
    return fromEvent(this.document, 'mouseup')
      .pipe(
        tap(event => {
          event.preventDefault();
          this.onStop.emit(this.RECT);

          this.resetCoords();
          this.setStopStyle();
        }),
      )
  }

  private onDividerMove(event: MouseEvent): void {
    event.preventDefault();
    this.setPosition(event.pageX, event.pageY);
  }

  private resetCoords(): void {
    this.startTop = 0;
    this.startLeft = 0;
    this.top = null
    this.left = null
    this.prefTick = {top: 0, left: 0}
  }

  private setPosition(x: number, y: number): void {
    const {top, left} = this.RECT
    const leftDif = x - this.startLeft
    const topDif = y - this.startTop

    this.left = this.startLeft + leftDif
    // this.top = this.startTop + topDif

    this.prefTick.top = top - this.top
    this.prefTick.left = left - this.left
    this.onMove.emit({diffTop: this.prefTick.top, diffLeft: this.prefTick.left})

    this.cdr.markForCheck()
  }

  private setStartCoords(): void {
    const {top, left} = this.RECT
    this.startTop = top
    this.startLeft = left

    this.prefTick = {top: 0, left: 0}
  }

  private setStartStyle(): void {
    this.divider.classList.add('divider-vt')
  }

  private setStopStyle(): void {
    this.divider.classList.remove('divider-vt')
  }
}
