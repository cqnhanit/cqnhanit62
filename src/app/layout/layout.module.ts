import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './_component/header/header.component';
import {MainComponent} from './_component/main/main.component';
import {NavComponent} from './_component/nav/nav.component';
import {LayoutRouting} from './layout-routing.module';
import {FooterComponent} from './_component/footer/footer.component';
import {PagesModule} from '../pages/pages.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    PagesModule,
    LayoutRouting
  ],
  providers: []
})
export class LayoutModule {
}
