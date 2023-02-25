import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    PaginasComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    MatToolbarModule,
    MatIconModule 
  ],
  exports:[
    PaginasComponent
  ]
  
})
export class PaginasModule { }
