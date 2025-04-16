import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Eu amo gatos',
      autoria: 'Gabie',
      modelo: 'modelo1'
    },
    {
      conteudo: 'comunicação entre componentes',
      autoria: 'Gabie',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Passo informações para o meu filho componente',
      autoria: 'componente pai',
      modelo: 'modelo3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
