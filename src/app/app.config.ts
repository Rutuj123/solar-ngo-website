import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,importProvidersFrom } from '@angular/core';
import { provideRouter} from '@angular/router';
import { TranslateModule, TranslateLoader,provideTranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader ,provideTranslateHttpLoader} from '@ngx-translate/http-loader';
import { provideHttpClient, HttpClient } from '@angular/common/http';

import { routes } from './app.routes';
// Factory function
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
   provideTranslateService({
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json'
      })
    })
  ]
};
