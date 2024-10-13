import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressHomeComponent } from './home/Address-home.component';
import { AddressNewComponent } from './new/Address-new.component';
import { AddressDetailComponent } from './detail/Address-detail.component';

const routes: Routes = [
  {path: '', component: AddressHomeComponent},
  { path: 'new', component: AddressNewComponent },
  { path: ':id', component: AddressDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Address-detail-permissions'
      }
    }
  }
];

export const ADDRESS_MODULE_DECLARATIONS = [
    AddressHomeComponent,
    AddressNewComponent,
    AddressDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }