import {Component, Injector} from '@angular/core';
import {ComponentSize}       from '../../../../../lib/src/lib/component-sizes';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent {
  card = 'https://picsum.photos/864/1228/?random';
  previewSize = ComponentSize.xs;

  constructor(public injector: Injector) {

  }
}
