import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-preview-container',
  templateUrl: './preview-container.component.html',
  styleUrls: ['./preview-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
