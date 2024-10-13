import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewHomeComponent } from './home/Review-home.component';
import { ReviewNewComponent } from './new/Review-new.component';
import { ReviewDetailComponent } from './detail/Review-detail.component';

const routes: Routes = [
  {path: '', component: ReviewHomeComponent},
  { path: 'new', component: ReviewNewComponent },
  { path: ':id', component: ReviewDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Review-detail-permissions'
      }
    }
  }
];

export const REVIEW_MODULE_DECLARATIONS = [
    ReviewHomeComponent,
    ReviewNewComponent,
    ReviewDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }