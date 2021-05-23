import {NgModule} from '@angular/core';
import {PreviewContainerComponent} from './preview-container.component';
import { ResizeDividerDirective } from './resize-divider.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    PreviewContainerComponent,
    ResizeDividerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreviewContainerComponent
  ]
})
export class PreviewContainerModule {}
