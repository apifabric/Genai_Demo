import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Promotion-new',
  templateUrl: './Promotion-new.component.html',
  styleUrls: ['./Promotion-new.component.scss']
})
export class PromotionNewComponent {
  @ViewChild("PromotionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}