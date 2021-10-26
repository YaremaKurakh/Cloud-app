import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MainLayoutComponent} from "../shared/components/main-layout/main-layout.component";
import {TaskFolderComponent} from "../task-folder/task-folder.component";
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {SharedModule} from "../shared/shared.module";
import {ProtectedFolderComponent} from "../protected-folder/protected-folder.component";
import {AuthGuard} from "./auth.guard";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: MainLayoutComponent, children: [
          {path: '', redirectTo: 'protected/login', pathMatch: 'full'},
          {path: 'protected', component: ProtectedFolderComponent},
          {path: 'task', component: TaskFolderComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})

export class ProtectedModule {

}
