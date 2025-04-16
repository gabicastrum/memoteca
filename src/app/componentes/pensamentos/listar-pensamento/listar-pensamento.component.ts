import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
//array vazio pois os pensamentos vão vir do back
  listaPensamentos: Pensamento[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
