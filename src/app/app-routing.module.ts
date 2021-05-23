import {NgModule} from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./components/markdown-editor/markdown-editor.module').then(m => m.MarkdownEditorModule),
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
