import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PROMOTION_MODULE_DECLARATIONS, PromotionRoutingModule} from  './Promotion-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PromotionRoutingModule
  ],
  declarations: PROMOTION_MODULE_DECLARATIONS,
  exports: PROMOTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PromotionModule { }