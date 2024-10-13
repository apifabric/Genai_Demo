import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ADDRESS_MODULE_DECLARATIONS, AddressRoutingModule} from  './Address-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AddressRoutingModule
  ],
  declarations: ADDRESS_MODULE_DECLARATIONS,
  exports: ADDRESS_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddressModule { }