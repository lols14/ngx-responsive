import {Component, HostBinding, Input, OnChanges} from '@angular/core';
import {ComponentSize}                            from '../../../../../lib/src/public_api';

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
