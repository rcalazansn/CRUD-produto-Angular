import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private endpoint: string = 'https://crudproduto.azurewebsites.net/api/v1/Produto';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Produto[]>(this.endpoint);
  }

  getById(id: number) {
    return this.http.get<Produto>(`${this.endpoint}/${id}`);
  }

  insert(produto: Produto) {
    return this.http.post<Produto>(this.endpoint, produto);
  }

  update(produto: Produto) {
    return this.http.put<Produto>(this.endpoint, produto);
  }

  remove(id: number) {
    return this.http.delete<Produto>(`${this.endpoint}/${id}`);
  }
}
