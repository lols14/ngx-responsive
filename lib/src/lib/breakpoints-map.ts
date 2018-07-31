import {InjectionToken} from '@angular/core';
import {Breakpoints}    from './breakpoints';

export const breakpointsMapToken = new InjectionToken('breakpointsMapToken');

export const breakpointsMap: Map<Breakpoints, number[]> = new Map([
  [Breakpoints.forPhoneUp, [0, 599]],
  [Breakpoints.forTabletPortraitUp, [600, 899]],
  [Breakpoints.forTabletLandscapeUp, [900, 1199]],
  [Breakpoints.forDesktopUp, [1200, 1799]],
  [Breakpoints.forBigDesktop, [1800, 100000]]
]);

