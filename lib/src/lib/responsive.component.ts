import {Injector, OnDestroy, OnInit} from '@angular/core';
import {Breakpoints}                 from './breakpoints';
import {CustomInjectable}            from './injectable';
import {ResponsiveService}           from './responsive.service';

export type Constructor<T = {}> = new (...args: any[]) => T;

export interface IResponsiveComponent {
  injector: Injector

  ngOnInit?(): void;

  ngOnDestroy?(): void;

  forPhoneUp?(): void;

  forTabletPortraitUp?(): void;

  forTabletLandscapeUp?(): void;

  forDesktopUp?(): void;

  forBigDesktop?(): void;
}

export function ResponsiveComponent<T extends Constructor<IResponsiveComponent>>(Base: T): any {

  @CustomInjectable()
  class ResponsiveComponentMixin extends Base implements OnInit, OnDestroy {
    responsiveService: ResponsiveService;

    constructor(...args: any[]) {
      super(...args);
    }

    ngOnInit() {
      this.responsiveService = this.injector.get(ResponsiveService);
      this.responsiveService.subscribe(Breakpoints.forPhoneUp, this.forPhoneUp);
      this.responsiveService.subscribe(Breakpoints.forTabletPortraitUp, this.forTabletPortraitUp);
      this.responsiveService.subscribe(Breakpoints.forTabletLandscapeUp, this.forTabletLandscapeUp);
      this.responsiveService.subscribe(Breakpoints.forDesktopUp, this.forDesktopUp);
      this.responsiveService.subscribe(Breakpoints.forBigDesktop, this.forBigDesktop);
      this.responsiveService.callCallbacks();

      if (super.ngOnInit) {
        super.ngOnInit();
      }
    }

    ngOnDestroy() {
      this.responsiveService.unsubscribe(Breakpoints.forPhoneUp, this.forPhoneUp);
      this.responsiveService.unsubscribe(Breakpoints.forTabletPortraitUp, this.forTabletPortraitUp);
      this.responsiveService.unsubscribe(Breakpoints.forTabletLandscapeUp, this.forTabletLandscapeUp);
      this.responsiveService.unsubscribe(Breakpoints.forDesktopUp, this.forDesktopUp);
      this.responsiveService.unsubscribe(Breakpoints.forBigDesktop, this.forBigDesktop);

      if (super.ngOnDestroy) {
        super.ngOnDestroy();
      }
    }

    forPhoneUp() {
      if (super.forPhoneUp) {
        super.forPhoneUp();
      }
    }

    forTabletPortraitUp() {
      if (super.forTabletPortraitUp) {
        super.forTabletPortraitUp();
      }
    }

    forTabletLandscapeUp() {
      if (super.forTabletLandscapeUp) {
        super.forTabletLandscapeUp();
      }
    }

    forDesktopUp() {
      if (super.forDesktopUp) {
        super.forDesktopUp();
      }
    }

    forBigDesktop() {
      if (super.forBigDesktop) {
        super.forBigDesktop();
      }
    }
  }

  return ResponsiveComponentMixin;
}
