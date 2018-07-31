import {Injectable}                      from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Breakpoints, ResponsiveService}  from '../../../lib/src/public_api';

@Injectable()
export class CardsResolver implements Resolve<any> {
  count: number;

  constructor(private responsiveService: ResponsiveService) {
    switch (responsiveService.currentBreakpoint) {
      case Breakpoints.forPhoneUp:
        this.count = 4;
        break;

      case Breakpoints.forTabletPortraitUp:
        this.count = 6;
        break;

      case Breakpoints.forTabletLandscapeUp:
        this.count = 8;
        break;

      default:
        this.count = 9;
    }
  }

  async resolve(route: ActivatedRouteSnapshot): Promise<any | null> {
    const result = [];

    for (let i = 0; i < this.count; i++) {
      result.push('https://picsum.photos/864/1228/?random');
    }

    return Promise.resolve(result);
  }

}
