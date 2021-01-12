import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNotFoundComponent } from './custom-not-found.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomNotFoundComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MolinosMiniCarouselComponent: {
          component: CustomNotFoundComponent,
        },
      },
    } as CmsConfig),
  ],
  exports: [CustomNotFoundComponent],
})
export class CustomNotFoundModule {}
