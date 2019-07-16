import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductContainerComponent, GroupItemComponent, GroupShortListComponent, ProductAmountComponent, ConfirmOrderComponent, PaymentComponent } from './components';
import { ProductVariantDialogComponent } from './components/product-variant-dialog';
import { DialogModule } from '../dialog';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent, 
    ConfirmOrderComponent,
    PaymentComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    DialogModule
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }
