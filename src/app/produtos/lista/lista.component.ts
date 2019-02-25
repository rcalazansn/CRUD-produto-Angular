import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  public produtos: Produto[];

  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.service.getAll().subscribe(resp => {
      this.produtos = resp;
    });
  }

}
