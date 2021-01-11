import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLogoComponent } from './custom-logo.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomLogoComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleBannerComponent: {
          component: CustomLogoComponent,
        },
      },
    } as CmsConfig),
  ],
  exports: [CustomLogoComponent],
})
export class CustomLogoModule {}
