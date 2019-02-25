import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-vitrini',
  templateUrl: './vitrini.component.html'
})
export class VitriniComponent implements OnInit {

  public produtos: Produto[];

  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.service.getAll().subscribe(resp=>{
      this.produtos = resp;
    }, error => {
      console.log(`ERRO: ${JSON.stringify(error)}`);
      ;
    });
  }

}
