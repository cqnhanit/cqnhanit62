import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {StoreModule} from '@ngrx/store';
import {rootReducer} from './store/reducerRoot';
import {EffectsModule} from '@ngrx/effects';
import {rootEffects} from './store/effectsRoot';

import {SeoService} from './services/seo.service';
import {TeeTimeService} from './services/tee-time.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'golf-booking-online'}),
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot(rootEffects),
    BrowserTransferStateModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    SeoService,
    TeeTimeService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
