import {ChangeDetectionStrategy, Component, HostBinding, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-preview-container',
  templateUrl: './preview-container.component.html',
  styleUrls: ['./preview-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PreviewContainerComponent implements OnInit {
  @HostBinding('class.preview-container') class = true
  constructor(
    private readonly r2: Renderer2
  ) { }

  ngOnInit(): void {
  }

  public onMove($event: {top: number, left: number}, leftSide: HTMLDivElement, rightSide: HTMLDivElement): void {
    const {top, left} = $event
    const leftRect = leftSide.getBoundingClientRect()
    const rightRect = rightSide.getBoundingClientRect()


    this.r2.setStyle(leftSide, 'width', leftRect.width - left + 'px')
    this.r2.setStyle(rightSide, 'width', rightRect.width + left + 'px')

    // console.log(leftRect.width, rightRect.width)
  }
}
