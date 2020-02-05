import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSharedModule } from 'projects/admin/src/app/app.module';
import { ClientSharedModule } from 'projects/client/src/app/app.module';

// import {} from '../../projects/admin/src/app/app.module'
const routes: Routes = [
  {
    path:'admin',
    loadChildren:'../../projects/admin/src/app/app.module#AdminSharedModule'
  },
  {
    path:'client',
    loadChildren:'../../projects/client/src/app/app.module#ClientSharedModule'
  },
  {
    path:'**',
    redirectTo:'admin/one'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminSharedModule.forRoot(),
    ClientSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
