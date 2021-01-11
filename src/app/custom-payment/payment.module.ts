import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MolinosShippingPaymentBannerComponent: {
          component: PaymentComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomPaymentModule {}
