import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartComponent } from './custom-cart.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomCartComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: CustomCartComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomCartModule {}
