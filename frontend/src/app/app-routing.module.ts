import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { IsAuthGuard } from './guard/is-auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path:"profile",component:ProfileComponent,canActivate:[IsAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
