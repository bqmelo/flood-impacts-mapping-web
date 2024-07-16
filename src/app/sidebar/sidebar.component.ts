import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {
}
