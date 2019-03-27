import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html'
})
export class ManutencaoComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  public titulo: string = "Novo Produto";
  private id: number;
  public form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: ProdutoService,
    private router: Router) {
    this.form = this.fb.group({
      id: [0, Validators.compose([])],
      codigo: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(10), Validators.required])],
      descricao: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(100), Validators.required])],
      detalhes: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(200), Validators.required])],
      valor: ['', Validators.required],
      inclusao: [],
      alteracao: [],
      foto: [],
    });
  }

  ngOnInit() {

    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    if (this.id > 0) {
      this.titulo = "Editar Produto";
      this.service.getById(this.id).subscribe(resp => {
        this.form.setValue(resp);
      });
    }
  }

  salvar() {
    console.log(this.form.value);

    let modelo: Produto = this.form.value;

    if (this.id > 0) {
      this.service.update(modelo).subscribe(resp => {
        this.router.navigate(['/produtos']);
      });
    } else {
      this.service.insert(modelo).subscribe(resp => {
        this.router.navigate(['/produtos']);
      });
    }
  }

  onFileChange(event) {
    console.log('A ', this.form.value);

    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('foto').setValue(file);
    }

    console.log('B ', this.form.value);
  }
}
