import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";
import {SidebarComponent} from "./sidebar/sidebar.component";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent,
    UserListComponent,
    SidebarComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
