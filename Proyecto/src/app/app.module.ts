import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';


import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFlatModule } from './modules/material/material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { ConcatenarPipe } from './pipes/concatenar.pipe';
import { Tam20Directive } from './directives/tam20.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavBarComponent,
    ToolBarComponent,
    ListStudentsComponent,
    ConcatenarPipe,
    Tam20Directive
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MaterialFlatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
