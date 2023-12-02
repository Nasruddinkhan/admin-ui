import { Injectable, Injector } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { SettingsService } from "./settings.service";
import { LOCATION_INITIALIZED } from "@angular/common";

@Injectable({
    providedIn: 'root',
  })
  export class TranslateLangService {
    constructor(
      private injector: Injector,
      public translate: TranslateService,
      private settings: SettingsService
    ) {}
  
    load() {
      return new Promise<any>((resolve: any) => {
        const locationInitialized = this.injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
        locationInitialized.then(() => {
          const browserLang = navigator.language;
          const defaultLang = browserLang.match(/en-US|ar-SA/) ? browserLang : 'en-US';
          this.settings.setLanguage(defaultLang);
          this.translate.setDefaultLang(defaultLang);
          this.translate.use(defaultLang).subscribe(
            () => console.log(`Successfully initialized '${defaultLang}' language.'`),
            () => console.error(`Problem with '${defaultLang}' language initialization.'`),
            () => resolve(null)
          );
        });
      });
    }
  }