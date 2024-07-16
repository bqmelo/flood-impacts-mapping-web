import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserService} from "../service/user.service";
import {UserTypeDropdownComponent} from "./user-type-dropdown.component";
import {UserTypeService} from "../service/user-type.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, UserTypeDropdownComponent]
})
export class UserFormComponent {
  @Input()
  user = {
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    idTipoUsuario: {
      idTipoUsuario: 1
    },
    aprovado: false
  };

  loading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  selectedUserTypeId: number = 0;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.loading = true;
    this.errorMessage = null;
    this.successMessage = null;
    this.user.idTipoUsuario.idTipoUsuario = this.selectedUserTypeId;

    this.userService.createUser(this.user).subscribe({
      next: response => {
        this.loading = false;
        this.successMessage = 'Usuário criado com sucesso!';
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 2000);
      },
      error: err => {
        this.loading = false;
        this.errorMessage = 'Erro ao criar usuário. Por favor, tente novamente.';
        console.error('Erro ao criar usuário!', err);
      }
    });
  }

  onUserTypeSelected(userTypeId: number): void {
    this.selectedUserTypeId = userTypeId;
  }
}
