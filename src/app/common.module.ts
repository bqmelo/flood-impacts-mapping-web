import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {NgModule} from "@angular/core";
import {SidebarComponent} from "./sidebar/sidebar.component";

@NgModule({
  imports: [
    CommonModule,
    UserListComponent,
    SidebarComponent
  ],
  declarations: [

  ]
})
export class UserTypeDropdownModule { }
