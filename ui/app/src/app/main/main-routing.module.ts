import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Address', loadChildren: () => import('./Address/Address.module').then(m => m.AddressModule) },
    
        { path: 'Category', loadChildren: () => import('./Category/Category.module').then(m => m.CategoryModule) },
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'Inventory', loadChildren: () => import('./Inventory/Inventory.module').then(m => m.InventoryModule) },
    
        { path: 'Item', loadChildren: () => import('./Item/Item.module').then(m => m.ItemModule) },
    
        { path: 'Order', loadChildren: () => import('./Order/Order.module').then(m => m.OrderModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'Product', loadChildren: () => import('./Product/Product.module').then(m => m.ProductModule) },
    
        { path: 'Promotion', loadChildren: () => import('./Promotion/Promotion.module').then(m => m.PromotionModule) },
    
        { path: 'Review', loadChildren: () => import('./Review/Review.module').then(m => m.ReviewModule) },
    
        { path: 'Shipment', loadChildren: () => import('./Shipment/Shipment.module').then(m => m.ShipmentModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }