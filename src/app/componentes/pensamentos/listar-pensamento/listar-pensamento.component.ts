import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
//array vazio pois os pensamentos vão vir do back
  listaPensamentos: Pensamento[] = []

  constructor(private service: PensamentoService) { }

  //ciclo de vida do componente, lógico que o ngOnInit é o primeiro a ser chamado
  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
