import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPrintComponent } from './ngx-print/ngx-print.component';

const routes: Routes = [
  {
    path:'print',
    component:NgxPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
