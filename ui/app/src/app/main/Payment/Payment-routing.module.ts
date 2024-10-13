import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentHomeComponent } from './home/Payment-home.component';
import { PaymentNewComponent } from './new/Payment-new.component';
import { PaymentDetailComponent } from './detail/Payment-detail.component';

const routes: Routes = [
  {path: '', component: PaymentHomeComponent},
  { path: 'new', component: PaymentNewComponent },
  { path: ':id', component: PaymentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Payment-detail-permissions'
      }
    }
  }
];

export const PAYMENT_MODULE_DECLARATIONS = [
    PaymentHomeComponent,
    PaymentNewComponent,
    PaymentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }