import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INVENTORY_MODULE_DECLARATIONS, InventoryRoutingModule} from  './Inventory-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InventoryRoutingModule
  ],
  declarations: INVENTORY_MODULE_DECLARATIONS,
  exports: INVENTORY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryModule { }