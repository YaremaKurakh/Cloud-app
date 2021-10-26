import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MainLayoutComponent} from "../shared/components/main-layout/main-layout.component";
import {TaskFolderComponent} from "../task-folder/task-folder.component";

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainLayoutComponent, children: [
          {path: 'task', component: TaskFolderComponent}
        ]
      }
    ])
  ],
  exports:[RouterModule]
})

export class PublicModule {

}
