import {isPlatformBrowser}           from '@angular/common';
import {InjectionToken, PLATFORM_ID} from '@angular/core';

export const isServerToken = new InjectionToken('ngxResponsiveIsServer');

export const isServerFactory = (platformId: Object) => {
  return !isPlatformBrowser(platformId);
};

export const isServerProvider = {
  provide: isServerToken,
  useFactory: isServerFactory,
  deps: [PLATFORM_ID]
};

