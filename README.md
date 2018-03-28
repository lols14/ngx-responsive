<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/lols14/ngx-responsive/master/demo/src/assets/logo.svg">
</p>

# ngx-responsive - Angular library that helps you to control component sizes.

[![npm version](https://badge.fury.io/js/ngx-responsive.svg)](https://badge.fury.io/js/ngx-responsive),
[![Build Status](https://travis-ci.org/lols14/ngx-responsive.svg?branch=master)](https://travis-ci.org/lols14/ngx-responsive)
[![Coverage Status](https://coveralls.io/repos/github/lols14/ngx-responsive/badge.svg?branch=master)](https://coveralls.io/github/lols14/ngx-responsive?branch=master)
[![dependency Status](https://david-dm.org/lols14/ngx-responsive/status.svg)](https://david-dm.org/lols14/ngx-responsive)
[![devDependency Status](https://david-dm.org/lols14/ngx-responsive/dev-status.svg?branch=master)](https://david-dm.org/lols14/ngx-responsive#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/lols14/ngx-responsive.svg)](https://greenkeeper.io/)

## Main goal


## Dependencies
* [Angular](https://angular.io) (*requires* Angular 5 or higher, tested with 5.2.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-responsive-helper` via:
```shell
npm install --save ngx-responsive-helper
```

## Basic usage
```typescript
// app.component.ts

import { ResponsiveService, ComponentSize, Breakpoints } from 'ngx-responsive-helper';

@Component({
    templateUrl: "./component.html",
    providers: [ResponsiveService]
})
export class AppComponent implements OnDestroy {
    formSize: ComponentSize;
    
    forPhoneUp = () => {
      this.formSize = ComponentSize.xs ;
    };

    forDesktopUp = () => {
      this.formSize = ComponentSize.m;
    };

    constructor(public responsiveService: ResponsiveService) {
      this.responsiveService.subscribe(Breakpoints.forPhoneUp, this.forPhoneUp);
      this.responsiveService.subscribe(Breakpoints.forDesktopUp, this.forDesktopUp);
    }
    
    ngOnDestroy() { 
      this.responsiveService.unsubscribe(Breakpoints.forPhoneUp, this.forPhoneUp);
      this.responsiveService.unsubscribe(Breakpoints.forDesktopUp, this.forDesktopUp);
    }
}
```
Your component should implement ComponentSize classes:
```html
// app.component.html

  <custom-form-component [ngClass]="formSize"></custom-form-component>
```

```sass
// custom-form.component.sass

\:host
  &.xs
    ...
  &.s
    ...
  &.m, &.l, &.xl
  
```



**Breakpoints**:
```js
    [Breakpoints.forPhoneUp, [0, 599]]
    [Breakpoints.forTabletPortraitUp, [600, 899]]
    [Breakpoints.forTabletLandscapeUp, [900, 1199]]
    [Breakpoints.forDesktopUp, [1200, 1799]]
    [Breakpoints.forBigDesktop, [1800, 100000]]
```
**Component sizes**: xs, s, m, l, xl


## Advanced usage
**1. Use ResponsiveComponent on route component**

```typescript
import { ResponsiveService, ComponentSize, ResponsiveComponent } from 'ngx-responsive-helper';

@Component({
    templateUrl: "./component.html",
    providers: [ResponsiveService]
})
export class AppComponent extends ResponsiveComponent {
    formSize: ComponentSize;
    
    forPhoneUp = () => {
      this.formSize = ComponentSize.xs ;
    };

    forDesktopUp = () => {
      this.formSize = ComponentSize.m;
    };

    constructor(public responsiveService: ResponsiveService) {
      super(responsiveService)
    }
}
```

**2. Pass ComponentSize as parameter to not-route component.**

```typescript
import { ComponentSize } from 'ngx-responsive-helper';

@Component({
    templateUrl: "./component.html",
})
export class BigComplexFormComponent implements OnChanges {
    @Input() size: ComponentSize = ComponentSize.xs
    slidesToShow = 5;
    innerComponentSize: ComponentSize;
    anotherInnerComponentSize: ComponentSize;
    
    ngOnChanges(changes) {
      if (changes.size) {
        this.onSizeChanges();
      }
    }
       
    onSizeChanges(){
      switch (this.size) {
        case ComponentSize.xs:
          this.slidesToShow = 6;
          this.innerComponentSize = ComponentSize.s;
          this.anotherInnerComponentSize = ComponentSize.s;
          return;
    
        case ComponentSize.s:
          this.slidesToShow = 10;
          this.innerComponentSize = ComponentSize.m;
          this.anotherInnerComponentSize = ComponentSize.m;
          return;
    
        default:
          this.slidesToShow = 7;
      }
    }
}
```


## License

Copyright (c) 2018 Sergiy. Licensed under the MIT License (MIT)

