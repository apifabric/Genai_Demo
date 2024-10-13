import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Shipment-new',
  templateUrl: './Shipment-new.component.html',
  styleUrls: ['./Shipment-new.component.scss']
})
export class ShipmentNewComponent {
  @ViewChild("ShipmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}