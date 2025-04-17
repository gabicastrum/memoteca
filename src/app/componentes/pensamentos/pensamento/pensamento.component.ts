import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
//componente filho, dados não utilizados
  @Input() pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento() {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false) {
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe()
    console.log(this.pensamento.favorito)
  }
}
