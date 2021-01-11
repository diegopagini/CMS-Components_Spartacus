import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { GenericLinkComponent, MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [CustomBannerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        },
      },
    } as CmsConfig),
  ],
  exports: [CustomBannerComponent],
  entryComponents: [CustomBannerComponent],
})
export class CustomBannerModule {}
