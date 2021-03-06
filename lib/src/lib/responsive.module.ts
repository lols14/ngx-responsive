import {ModuleWithProviders, NgModule}       from '@angular/core';
import {Breakpoints}                         from './breakpoints';
import {breakpointsMap, breakpointsMapToken} from './breakpoints-map';
import {isServerProvider}                    from './is-server-token';
import {ResponsiveService}                   from './responsive.service';

@NgModule()
export class ResponsiveModule {
  static forFoot(customBreakpointsMap?: Map<Breakpoints, [number, number]>): ModuleWithProviders {
    return {
      ngModule: ResponsiveModule,
      providers: [
        isServerProvider,
        {
          provide: breakpointsMapToken,
          useValue: customBreakpointsMap || breakpointsMap,
        },
        ResponsiveService
      ]
    };
  }

}
