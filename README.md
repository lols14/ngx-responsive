# ngx-responsive - Angular library that helps you to control component sizes.

[![npm version](https://badge.fury.io/js/ngx-responsive-helper.svg)](https://badge.fury.io/js/ngx-responsive-helper),
[![Build Status](https://travis-ci.org/lols14/ngx-responsive-helper.svg?branch=master)](https://travis-ci.org/lols14/ngx-responsive-helper)
[![Coverage Status](https://coveralls.io/repos/github/lols14/ngx-responsive-helper/badge.svg)](https://coveralls.io/github/lols14/ngx-responsive-helper)
[![dependency Status](https://david-dm.org/lols14/ngx-responsive-helper/status.svg)](https://david-dm.org/lols14/ngx-responsive-helper)
[![devDependency Status](https://david-dm.org/lols14/ngx-responsive-helper/dev-status.svg?branch=master)](https://david-dm.org/lols14/ngx-responsive-helper#info=devDependencies)

## Main goal
```
StateComponent Breakpoints.forPhoneUp
      +
      +--------------> 1.1 UiComponent ComponentSize.s
      |
      +--------------> 1.2 UiComponent ComponentSize.m
      |
      +--------------> 1.3 UiComponent ComponentSize.xs
                               +
                               +-------------> 2.1 UiComponent ComponentSize.xs

```

My goal is - creation of independent and re-used components

1. `StateComponent` knows what size should have `1.3 UiComponent` and knows nothing about `2.1 UiComponent Size.xs`
2. `StateComponent` depends on Breakpoints and manipulate with inner child sizes
3. `UiComponent` depends on `ComponentSize` interface and knows nothing about breakpoints



## Dependencies
* [Angular](https://angular.io) (*requires* Angular 6)

## Installation
```shell
npm install --save ngx-responsive-helper
```

## Breakpoints
```typescript
[Breakpoints.forPhoneUp, [0, 599]]
[Breakpoints.forTabletPortraitUp, [600, 899]]
[Breakpoints.forTabletLandscapeUp, [900, 1199]]
[Breakpoints.forDesktopUp, [1200, 1799]]
[Breakpoints.forBigDesktop, [1800, 100000]]
```

[Why this?](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862) 


## Components sizes
`xs`, `s`, `m`, `l`, `xl`

## Basic usage
app.module.ts
```typescript
import {ResponsiveModule}     from 'ngx-responsive-helpe';

@NgModule({
  ...
  imports: [
    ...
    ResponsiveModule.forFoot()
  ],
  ...
})
export class AppModule {}
```

or with custom breakpoints
```typescript
const customBreakpoints =   new Map([
  [Breakpoints.forPhoneUp, [0, 399]],
  [Breakpoints.forTabletPortraitUp, [400, 767]],
  [Breakpoints.forTabletLandscapeUp, [768, 999]],
  [Breakpoints.forDesktopUp, [1000, 1799]],
  [Breakpoints.forBigDesktop, [1800, 100000]]
]);

ResponsiveModule.forFoot(customBreakpoints)
```

app.component.ts
```typescript

import { ComponentSize, ResponsiveComponent } from 'ngx-responsive-helper';

@Component({
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.sass']
})
@ResponsiveComponent
export class AppComponent {
  
  gridSize: ComponentSize
  cards = [];
  
  forPhoneUp = () => {
    this.gridSize = ComponentSize.xs;
  };
  
  forTabletPortraitUp = () => {
    this.gridSize = ComponentSize.s;
  };
  
  forTabletLandscapeUp = () => {
    this.gridSize = ComponentSize.m;
  };
  
  // If you doesn't need - you can not define each breakpoint hook.
  
  //forDesktopUp = () => {
  //  this.myNestedComponentSize = ComponentSize.l;
  // };
  
  // forBigDesktop = () => {
  //   this.myNestedComponentSize = ComponentSize.xl;
  // };
}
```
app.component.html
```angular2html
<app-grid [size]="gridSize" [cards]="cards"></app-grid>
```

grid.component.ts
```typescript
import { ComponentSize, ResponsiveComponent } from 'ngx-responsive-helper';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnChanges {
  @Input() size: ComponentSize;
  @Input() cards: string[];
  previewSize: ComponentSize;

  ngOnChanges(changes) {
    if (changes.size) {
      this.onSizeChange();
    }
  }

  onSizeChange() {
    switch (this.size) {
      case ComponentSize.xs:
        this.previewSize = ComponentSize.xs;
        break;

      case ComponentSize.s:
        this.previewSize = ComponentSize.xs;
        break;

      case ComponentSize.m:
        this.previewSize = ComponentSize.s;
        break;

      default:
        this.previewSize = ComponentSize.m;
    }
  }

  @HostBinding('class')
  private get getCssClasses(): any {
    return this.size;
  }
}
```

grid.component.sass
```sass
    \:host
      display: grid
      
      &.xs
        width: 300px
        grid-template-columns: 280px
    
      &.s
        width: 590px
        grid-template-columns: repeat(2, 280px)
    
      &.m
        grid-template-columns: repeat(2, 400px)
        width: 800px
    
      &.l
        grid-template-columns: repeat(3, 335px)
        width: 1005px
```

Also you can use current helper with resolvers or any another service

cards-resolver.ts
```typescript
import { ResponsiveService } from 'ngx-responsive-helper';

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
```




## License
Copyright (c) 2018 Sergiy. Licensed under the MIT License (MIT)
