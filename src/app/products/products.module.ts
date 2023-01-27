import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from '@products/products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { AgregarComponent } from './pages/agregar/agregar.component';


@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
