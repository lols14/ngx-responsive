import {Inject, Injectable, Optional} from '@angular/core';
import {debounce}                     from 'lodash';
import {Breakpoints}                  from './breakpoints';
import {breakpointsMapToken}          from './breakpoints-map';
import {isServerToken}                from './is-server-token';

@Injectable()
export class ResponsiveService {
  private width: number;
  private cbs: { [key: string]: [() => any] } = {};
  currentBreakpoint: Breakpoints | null = null;

  constructor(@Inject(breakpointsMapToken)
              private breakpointsMap: Map<Breakpoints, number[]>,
              @Inject(isServerToken)
              private isServer: boolean
  ) {
    if (this.isServer) {
      return;
    }

    this.onResize();
    this.onResize = debounce(this.onResize, 20);
    window.addEventListener('resize', this.onResize);
  }

  subscribe(type: Breakpoints, cb: () => any) {
    if (this.cbs[type]) {
      this.cbs[type].push(cb);
    } else {
      this.cbs[type] = [cb];
    }
  }

  unsubscribe(breakpoint: Breakpoints, cb: () => any) {
    if (!this.cbs[breakpoint]) {
      return;
    }
    const index = this.cbs[breakpoint].indexOf(cb);
    this.cbs[breakpoint].splice(index, 1);
  }


  callCallbacks = () => {
    this.breakpointsMap.forEach((value, key: Breakpoints) => {
      if (this.width >= value[0]) {
        this.callCallbackFor(key);
      }
    });
  };

  getCurrentBreakpoint = (): Breakpoints => {
    let breakpoint: Breakpoints;


    this.breakpointsMap.forEach((value, key: Breakpoints) => {
      if (value[0] <= this.width && this.width <= value[1]) {
        breakpoint = key;
      }
    });

    return breakpoint;
  };

  private onResize = () => {
    this.width = window.innerWidth;
    this.currentBreakpoint = this.getCurrentBreakpoint();
    this.callCallbacks();
  };

  private callCallbackFor(breakpoint: Breakpoints) {
    if (!this.cbs[breakpoint]) {
      return;
    }
    this.cbs[breakpoint].forEach((cb) => cb());
  }
}
