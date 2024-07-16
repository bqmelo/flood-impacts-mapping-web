import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DanosService} from "../service/danos.service";

@Component({
  selector: 'app-danos',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './danos.component.html',
  styleUrl: './danos.component.css'
})
export class DanosComponent implements OnInit{

  danos: any[] = [];
  danosFiltrados: any[] = [];

  filtros = {
    agricultorId: undefined,
    isSolved: undefined,
    cultura: undefined,
  };

  constructor(private danosService: DanosService) { }

  ngOnInit(): void {
    this.loadDanos();
  }

  loadDanos(): void {
    this.danosService.getAllDanos(this.filtros).subscribe(
      data => {
        this.danos = data;
        this.danosFiltrados = data;
      },
      error => {
        console.error('Erro ao carregar agricultores', error);
      }
    );
  }

  aplicarFiltros(): void {
    this.loadDanos();
  }
}
