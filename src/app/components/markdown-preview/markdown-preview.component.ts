import {Component, OnInit, ChangeDetectionStrategy, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownPreviewComponent implements OnInit {
  @Input() value: string
  @HostBinding('class.markdown-body') markdownBody = true
  constructor() { }

  ngOnInit(): void {
  }

}
