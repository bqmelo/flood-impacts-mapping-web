import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UserTypeService} from "../service/user-type.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

export interface UserType {
  idTipoUsuario: number;
  descricao: string;
}

@Component({
  selector: 'app-user-type-dropdown',
  templateUrl: './user-type-dropdown.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./user-type-dropdown.component.css']
})

export class UserTypeDropdownComponent implements OnInit {
  userTypes: UserType[] = [];

  @Output() userTypeSelected = new EventEmitter<number>();

  constructor(private userTypeService: UserTypeService) { }

  ngOnInit(): void {
    this.loadUserTypes();
  }

  private loadUserTypes(): void {
    this.userTypeService.getUserTypes()
      .subscribe(
        (data) => {
          this.userTypes = data;
        },
        (error) => {
          console.error('Erro ao carregar tipos de usuário', error);
        }
      );
  }

  onUserTypeSelected(event: any): void {
    const selectedValue = event.target.value;
    if (selectedValue !== null && selectedValue !== undefined) {
      this.userTypeSelected.emit(+selectedValue);
    }
  }
}
