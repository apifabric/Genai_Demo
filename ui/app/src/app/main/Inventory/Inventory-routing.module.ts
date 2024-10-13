import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryHomeComponent } from './home/Inventory-home.component';
import { InventoryNewComponent } from './new/Inventory-new.component';
import { InventoryDetailComponent } from './detail/Inventory-detail.component';

const routes: Routes = [
  {path: '', component: InventoryHomeComponent},
  { path: 'new', component: InventoryNewComponent },
  { path: ':id', component: InventoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Inventory-detail-permissions'
      }
    }
  }
];

export const INVENTORY_MODULE_DECLARATIONS = [
    InventoryHomeComponent,
    InventoryNewComponent,
    InventoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }