import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PublicFolderComponent} from "./public-folder/public-folder.component";
import {LoginPageComponent} from "./protected/login-page/login-page.component";
import {ProtectedFolderComponent} from "./protected-folder/protected-folder.component";
import {AuthGuard} from "./protected/auth.guard";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'public', component: PublicFolderComponent},
      {path: 'protected', component: ProtectedFolderComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginPageComponent},
    ]
  },
  {
    path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'protected', loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
