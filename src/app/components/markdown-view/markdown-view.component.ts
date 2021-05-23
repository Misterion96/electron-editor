import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-markdown-view',
  templateUrl: './markdown-view.component.html',
  styleUrls: ['./markdown-view.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownViewComponent implements OnInit {
  @Input() rows: string[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
