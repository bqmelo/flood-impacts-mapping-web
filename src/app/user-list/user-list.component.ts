import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: users => {
        this.users = users;
      },
      error: err => {
        console.error('Erro ao buscar usuários!', err);
      }
    });
  }

  editUser(): void {
  }

  formatPhoneNumber(phoneNumber: string): string {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }

    return phoneNumber;
  }
}
