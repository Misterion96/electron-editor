import {NgModule} from '@angular/core';
import {PreviewContainerComponent} from './preview-container.component';
import { ResizeDividerDirective } from './resize-divider.directive';

@NgModule({
  declarations: [
    PreviewContainerComponent,
    ResizeDividerDirective
  ],
  exports: [
    PreviewContainerComponent
  ]
})
export class PreviewContainerModule {}
