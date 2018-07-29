import {NgModule}             from '@angular/core';
import {BrowserModule}        from '@angular/platform-browser';
import {ResponsiveModule}     from '../../lib/src/lib/responsive.module';
import {AppComponent}         from './app.component';
import {AppRoutes}            from './app.routes';
import {CatalogComponent}     from './components/route/catalog/catalog.component';
import {CardPreviewComponent} from './components/ui/card-preview/card-preview.component';
import {GridComponent}        from './components/ui/grid/grid.component';
import {CardsResolver}        from './resolvers/previews';
import { WelcomeComponent } from './components/route/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CatalogComponent,
    CardPreviewComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ResponsiveModule.forFoot(),
    AppRoutes
  ],
  providers: [
    CardsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
