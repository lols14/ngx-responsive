import {InjectionToken} from '@angular/core';

export const testToken = new InjectionToken('TestToken');

export const testProvider = {
  provide: testToken,
  useValue: true,
};
