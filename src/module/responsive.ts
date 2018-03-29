import {Injectable}                  from '@angular/core';
import {debounce}                    from 'lodash';
import {Breakpoints, breakpointsMap} from './breakpoints';

@Injectable()
export class ResponsiveService {
  private width = window.innerWidth;
  private cbs: { [key: string]: [() => any] } = {};

  constructor() {
    this.onResize = debounce(this.onResize, 5);
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
      return
    }
    const index = this.cbs[breakpoint].indexOf(cb);
    this.cbs[breakpoint].splice(index, 1);
  }


  callCallbacks = () => {
    breakpointsMap.forEach((value, key: Breakpoints) => {
      if (this.width >= value[0]) {
        this.callCallbackFor(key);
      }
    });
  };

  private onResize = () => {
    this.width = window.innerWidth;
    this.callCallbacks();
  };

  private callCallbackFor(breakpoint: Breakpoints) {
    if (!this.cbs[breakpoint]) {
      return
    }
    this.cbs[breakpoint].forEach((cb) => cb());
  }
}