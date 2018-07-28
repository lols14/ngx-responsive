import {NgModule}         from '@angular/core';
import {BrowserModule}    from '@angular/platform-browser';
import {ResponsiveModule} from '../../projects/responsive/src/public_api';
import {AppComponent}     from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResponsiveModule.forFoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
