import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTopHeaderComponent } from './custom-top-header.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomTopHeaderComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponets: {
        TopHeaderComponent: {
          component: CustomTopHeaderComponent,
        },
      },
    } as CmsConfig),
  ],
  exports: [CustomTopHeaderComponent],
})
export class CustomTopHeaderModule {}
