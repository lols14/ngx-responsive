import {Component, Injector}                       from '@angular/core';
import {ActivatedRoute}                            from '@angular/router';
import {ComponentSize}                             from '../../../../../lib/src/lib/component-sizes';
import {IResponsiveComponent, ResponsiveComponent} from '../../../../../lib/src/lib/responsive.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
@ResponsiveComponent
export class CatalogComponent implements IResponsiveComponent {
  gridSize: ComponentSize;
  cards: string[];

  constructor(public injector: Injector,
              public route: ActivatedRoute) {

    this.cards = this.route.snapshot.data['cards'];
  }

  forPhoneUp = () => {
    this.gridSize = ComponentSize.xs;
  };

  forTabletPortraitUp = () => {
    this.gridSize = ComponentSize.s;
  };

  forTabletLandscapeUp = () => {
    this.gridSize = ComponentSize.m;
  };

  forDesktopUp = () => {
    this.gridSize = ComponentSize.l;
  };
}
