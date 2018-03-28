import {OnDestroy, OnInit} from '@angular/core';
import {Breakpoints}       from './breakpoints';
import {ResponsiveService} from './responsive';

export class ResponsiveComponent implements OnDestroy, OnInit {
  protected responsiveService: ResponsiveService;

  forPhoneUp = () => {
  };

  forTabletPortraitUp = () => {
  };

  forTabletLandscapeUp = () => {
  };

  forDesktopUp = () => {
  };

  forBigDesktop = () => {
  };

  constructor(responsiveService: ResponsiveService) {
    this.responsiveService = responsiveService;
  }

  ngOnInit() {
    this.responsiveService.subscribe(Breakpoints.forPhoneUp, this.forPhoneUp);
    this.responsiveService.subscribe(Breakpoints.forTabletPortraitUp, this.forTabletPortraitUp);
    this.responsiveService.subscribe(Breakpoints.forTabletLandscapeUp, this.forTabletLandscapeUp);
    this.responsiveService.subscribe(Breakpoints.forDesktopUp, this.forDesktopUp);
    this.responsiveService.subscribe(Breakpoints.forBigDesktop, this.forBigDesktop);
    this.responsiveService.callCallbacks();
  }

  ngOnDestroy() {
    this.responsiveService.unsubscribe(Breakpoints.forPhoneUp, this.forPhoneUp);
    this.responsiveService.unsubscribe(Breakpoints.forTabletPortraitUp, this.forTabletPortraitUp);
    this.responsiveService.unsubscribe(Breakpoints.forTabletLandscapeUp, this.forTabletLandscapeUp);
    this.responsiveService.unsubscribe(Breakpoints.forDesktopUp, this.forDesktopUp);
    this.responsiveService.unsubscribe(Breakpoints.forBigDesktop, this.forBigDesktop);
  }

}


