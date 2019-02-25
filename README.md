Adicionar bootstrap
NPM bootstrap

-------------------------------

https://www.npmjs.com/package/bootstrap


angular.json
"styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],

https://getbootstrap.com/docs/4.3/components/navbar/

https://medium.com/@tiboprea/build-a-responsive-bootstrap-4-navbar-in-angular-5-without-jquery-c59ad35b007

-------------------------------------

"show"
<div class="collapse navbar-collapse show">

"(click)="toggleNavbar()""
 <button class="navbar-toggler" type="button" (click)="toggleNavbar()">


"[ngClass]="{ 'show': navbarOpen }"
 <div class="collapse navbar-collapse" [ngClass]="{ 'show': navbarOpen }">

"toggleNavbar() {    this.navbarOpen = !this.navbarOpen;  }"
component.ts

-------------------------------------
ng g c produtos/lista
ng g c produtos/manutencao
ng g class produtos/produto
ng g service produtos/produto
ng g c produtos/vitrini

---------------------------------------

Remover aquiso css e testes

---------------------------------------

Criar rotas "app-routing.module.ts"

  {
    path: 'vitrini',
    component: VitriniComponent
  },
  {
    path: 'produtos',
    component: ListaComponent
  },
  {
    path: 'produtos/novo',
    component: ManutencaoComponent
  },
  {
      path: 'produtos/editar/:id',
      component: ManutencaoComponent
  }

  Criar  "app.component.html"
  
  <div class="container p-2">
  <router-outlet></router-outlet>
</div>

  routerLink="/produtos"
  routerLink="/produtos/novo"
  routerLink="/vitrini"
  ------------------------

  adiconar tags

--Manutenção
<div class="container p-5">
  <div class="card">
    <h2 class="text-center"> {{titulo}} </h2>

    <div class="card-body">

    </div>
  </div>
</div>

--lista
 <div class="card">
  <div class="card-body">

  </div>
</div>

--vitrini
<div class="card-columns">

 <div class="card ">
    <div class="card-body">
      <p class="card-text">One</p>
    </div>
  </div>
  
</div>

----------------------

adiconar Manutenção - para obter id (manuteção) alterar titulo (NOVO/EDITAR)
  private route: ActivatedRoute 

  ngOnInit
    let id = this.route.snapshot.paramMap.get('id');
    //parseInt()

---------------------

adicionar formgroup (manutenção)

app.module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

imports:
   FormsModule,
  ReactiveFormsModule,

HTML
[formGroup]="form"
formControlName="username"

TS
public form: FormGroup;
constructor(private fb: FormBuilder,

---------------------------------
Criar CRUD Service

app.module.ts
imports:
  HttpClientModule

construtor
  private http: HttpClient

  private endpoint: string = 'localhost:1500/api/v1/produtos';

  getAll() {
    return this.http.get<Produto[]>(this.endpoint);
  }

  --------------------------------------------
Manutenção adicioanr service

construtor
  private service: ProdutoService

  ngOnInit(){
    if (id >0){
     let produto = this.service.getById(this.id)
      this.form.setValue(produto);
    }
  }

adicionar  
  subscribe(resp => {});

adicionar construtor
  private router: Router
    navegar para pagina de produtos

  -----------------------------

adicionar service lista
  private service: ProdutoService

  this.service.getAll().subscribe(resp => {
      this.produtos = resp;
    });

---------------------------------   

DEPLOY

https://myview.rahulnivi.net/build-deploy-angular-app-azure-via-kuduscriptgithub/

npm install kuduscript -g
npm install kuduscript -g

----------------------------------

