import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPrintComponent } from './ngx-print/ngx-print.component';
import { ImageStyleComponent } from './image-style/image-style.component';

const routes: Routes = [
  {
    path:'print',
    component:NgxPrintComponent
  },
  {
    path:'image',
    component:ImageStyleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
