import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitriniComponent } from './produtos/vitrini/vitrini.component';
import { ListaComponent } from './produtos/lista/lista.component';
import { ManutencaoComponent } from './produtos/manutencao/manutencao.component';

const routes: Routes =
  [
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
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
