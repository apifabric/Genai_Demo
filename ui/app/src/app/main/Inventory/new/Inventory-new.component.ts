import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Inventory-new',
  templateUrl: './Inventory-new.component.html',
  styleUrls: ['./Inventory-new.component.scss']
})
export class InventoryNewComponent {
  @ViewChild("InventoryForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}