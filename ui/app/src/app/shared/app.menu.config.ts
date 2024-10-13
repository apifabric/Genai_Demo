import { MenuRootItem } from 'ontimize-web-ngx';

import { AddressCardComponent } from './Address-card/Address-card.component';

import { CategoryCardComponent } from './Category-card/Category-card.component';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { InventoryCardComponent } from './Inventory-card/Inventory-card.component';

import { ItemCardComponent } from './Item-card/Item-card.component';

import { OrderCardComponent } from './Order-card/Order-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { ProductCardComponent } from './Product-card/Product-card.component';

import { PromotionCardComponent } from './Promotion-card/Promotion-card.component';

import { ReviewCardComponent } from './Review-card/Review-card.component';

import { ShipmentCardComponent } from './Shipment-card/Shipment-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Address', name: 'ADDRESS', icon: 'view_list', route: '/main/Address' }
    
        ,{ id: 'Category', name: 'CATEGORY', icon: 'view_list', route: '/main/Category' }
    
        ,{ id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'Inventory', name: 'INVENTORY', icon: 'view_list', route: '/main/Inventory' }
    
        ,{ id: 'Item', name: 'ITEM', icon: 'view_list', route: '/main/Item' }
    
        ,{ id: 'Order', name: 'ORDER', icon: 'view_list', route: '/main/Order' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'Product', name: 'PRODUCT', icon: 'view_list', route: '/main/Product' }
    
        ,{ id: 'Promotion', name: 'PROMOTION', icon: 'view_list', route: '/main/Promotion' }
    
        ,{ id: 'Review', name: 'REVIEW', icon: 'view_list', route: '/main/Review' }
    
        ,{ id: 'Shipment', name: 'SHIPMENT', icon: 'view_list', route: '/main/Shipment' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AddressCardComponent

    ,CategoryCardComponent

    ,CustomerCardComponent

    ,InventoryCardComponent

    ,ItemCardComponent

    ,OrderCardComponent

    ,PaymentCardComponent

    ,ProductCardComponent

    ,PromotionCardComponent

    ,ReviewCardComponent

    ,ShipmentCardComponent

    ,SupplierCardComponent

];