import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SidebarComponent} from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, SidebarComponent]
})
export class AppComponent { }
