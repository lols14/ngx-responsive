import {Component, HostBinding, Input, OnChanges} from '@angular/core';
import {ComponentSize}                            from '../../../../../lib/src/public_api';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.sass']
})
export class CardPreviewComponent implements OnChanges {
  @Input() size: ComponentSize = ComponentSize.xs;
  @Input() card: string;
  colorOptionCount = 4;
  colorOptions = Array(10).fill(0);

  ngOnChanges(changes) {
    if (changes.size) {
      this.onSizeChange();
    }
  }

  onSizeChange() {
    switch (this.size) {
      case ComponentSize.xs:
        this.colorOptionCount = 4;
        break;

      case ComponentSize.s:
        this.colorOptionCount = 6;
        break;

      default:
        this.colorOptionCount = 8;
    }
  }

  @HostBinding('class')
  private get getCssClasses(): any {
    return this.size;
  }
}
