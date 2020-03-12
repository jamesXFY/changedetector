import { NgModule } from '@angular/core';
import { RoutLoadComponent } from './rout-load.component';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './CustomRouting.module';

@NgModule(
  {
    imports: [
      CommonModule,
      CustomersRoutingModule
    ],
    declarations: [RoutLoadComponent]
  }
)

export class CustomRoutModule { }
