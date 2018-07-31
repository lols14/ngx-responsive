import {NgModule}             from '@angular/core';
import {BrowserModule}        from '@angular/platform-browser';
import {ResponsiveModule}     from '../../lib/src/public_api';
import {AppComponent}         from './app.component';
import {AppRoutes}            from './app.routes';
import {CatalogComponent}     from './components/route/catalog/catalog.component';
import {WelcomeComponent}     from './components/route/welcome/welcome.component';
import {CardPreviewComponent} from './components/ui/card-preview/card-preview.component';
import {GridComponent}        from './components/ui/grid/grid.component';
import {testProvider}         from './providers/test';
import {CardsResolver}        from './resolvers/previews';

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
    CardsResolver,
    testProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
