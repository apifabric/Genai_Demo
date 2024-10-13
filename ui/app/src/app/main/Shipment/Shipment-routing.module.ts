import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentHomeComponent } from './home/Shipment-home.component';
import { ShipmentNewComponent } from './new/Shipment-new.component';
import { ShipmentDetailComponent } from './detail/Shipment-detail.component';

const routes: Routes = [
  {path: '', component: ShipmentHomeComponent},
  { path: 'new', component: ShipmentNewComponent },
  { path: ':id', component: ShipmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Shipment-detail-permissions'
      }
    }
  }
];

export const SHIPMENT_MODULE_DECLARATIONS = [
    ShipmentHomeComponent,
    ShipmentNewComponent,
    ShipmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }