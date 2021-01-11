import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarouselComponent } from './custom-carousel.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomCarouselComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MolinosMainCarouselComponent: {
          component: CustomCarouselComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomCarouselModule {}
