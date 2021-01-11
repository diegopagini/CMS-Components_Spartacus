import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { CustomBannerModule } from './custom-banner/custom-banner.module';
import { CustomCartModule } from './custom-cart/custom-cart.module';
import { CustomLinkModule } from './custom-link/custom-link.module';
import { CustomCarouselModule } from './custom-carousel/custom-carousel.module';
import { CustomPaymentModule } from './custom-payment/payment.module';
import { CustomLogoModule } from './custom-logo/custom-logo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CustomBannerModule,
    CustomCartModule,
    CustomLinkModule,
    CustomCarouselModule,
    CustomPaymentModule,
    CustomLogoModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://molinos-ci.qubikdigital.com:9002/',
          prefix: '/occ/v2/',
        },
      },
      context: {
        currency: ['ARS'],
        language: ['es', 'en'],
        baseSite: ['molinosStore'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '2.1',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
