import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {AgricultorService} from "../service/agricultor.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-agricultor-list',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    FormsModule
  ],
  templateUrl: './agricultor-list.component.html',
  styleUrl: './agricultor-list.component.css'
})
export class AgricultorListComponent implements OnInit {
  agricultores: any[] = [];
  agricultoresFiltrados: any[] = [];

  filtros = {
    razaoSocial: '',
  };

  constructor(private agricultorService: AgricultorService) { }

  ngOnInit(): void {
    this.loadAgricultores();
  }

  loadAgricultores(): void {
    this.agricultorService.getAllAgricultores(this.filtros).subscribe(
      data => {
        this.agricultores = data;
        this.agricultoresFiltrados = data;
      },
      error => {
        console.error('Erro ao carregar agricultores', error);
      }
    );
  }

  aplicarFiltros(): void {
    this.loadAgricultores();
  }
}
