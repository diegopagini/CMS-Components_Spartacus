import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLinkComponent } from './custom-link.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomLinkComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MolinosFooterComponent: {
          component: CustomLinkComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomLinkModule {}
