import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { IsAuthGuard } from './guard/is-auth.guard';
import { ConsultebookComponent } from './Books/consultebook/consultebook.component';
import { InfoBookComponent } from './Books/info-book/info-book.component';
import { AddBookComponent } from './Books/add-book/add-book.component';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path:"profile",component:ProfileComponent,canActivate:[IsAuthGuard]},
  {path:"books",component:ConsultebookComponent,canActivate:[IsAuthGuard]},
  {path:"AddBook/:id",component:AddBookComponent,canActivate:[IsAuthGuard]},
  {path:"infoBook/:id",component:InfoBookComponent,canActivate:[IsAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
