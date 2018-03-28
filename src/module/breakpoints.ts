export enum Breakpoints {
  forPhoneUp = <any> 'forPhoneUp',
  forTabletPortraitUp = <any> 'forTabletPortraitUp',
  forTabletLandscapeUp = <any> 'forTabletLandscapeUp',
  forDesktopUp = <any> 'forDesktopUp',
  forBigDesktop = <any> 'forBigDesktop'
}

export const breakpointsMap: Map<Breakpoints, number[]> = new Map([
  [Breakpoints.forPhoneUp, [0, 599]],
  [Breakpoints.forTabletPortraitUp, [600, 899]],
  [Breakpoints.forTabletLandscapeUp, [900, 1199]],
  [Breakpoints.forDesktopUp, [1200, 1799]],
  [Breakpoints.forBigDesktop, [1800, 100000]]
]);

