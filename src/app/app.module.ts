import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ListaComponent } from './produtos/lista/lista.component';
import { ManutencaoComponent } from './produtos/manutencao/manutencao.component';
import { VitriniComponent } from './produtos/vitrini/vitrini.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ManutencaoComponent,
    VitriniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
