import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {REVIEW_MODULE_DECLARATIONS, ReviewRoutingModule} from  './Review-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ReviewRoutingModule
  ],
  declarations: REVIEW_MODULE_DECLARATIONS,
  exports: REVIEW_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReviewModule { }