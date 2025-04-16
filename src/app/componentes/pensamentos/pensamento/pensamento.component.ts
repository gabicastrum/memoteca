import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
//componente filho
  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Gabie',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento() {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
