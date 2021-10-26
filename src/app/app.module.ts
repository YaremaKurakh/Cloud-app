import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PublicFolderComponent } from './public-folder/public-folder.component';
import { TaskFolderComponent } from './task-folder/task-folder.component';
import { ProtectedFolderComponent } from './protected-folder/protected-folder.component';
import {SharedModule} from "./shared/shared.module";
import {AuthService} from "./protected/auth.service";
import {AuthGuard} from "./protected/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PublicFolderComponent,
    TaskFolderComponent,
    ProtectedFolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
