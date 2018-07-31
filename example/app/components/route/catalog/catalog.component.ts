import {Component, Inject, Injector}               from '@angular/core';
import {ActivatedRoute}                            from '@angular/router';
import {ComponentSize}                             from '../../../../../lib/src/public_api';
import {IResponsiveComponent, ResponsiveComponent} from '../../../../../lib/src/public_api';
import {testToken}                                 from '../../../providers/test';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
@ResponsiveComponent
export class CatalogComponent implements IResponsiveComponent {
  gridSize: ComponentSize;
  cards: string[];
  test: boolean;

  constructor(public injector: Injector,
              public route: ActivatedRoute) {

    this.test = this.injector.get(testToken) as boolean;
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
