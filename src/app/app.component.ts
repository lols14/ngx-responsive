import {Component, Injector, OnInit} from '@angular/core';
import {ResponsiveComponent}         from '../../projects/responsive/src/lib/responsive.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@ResponsiveComponent
export class AppComponent implements OnInit {
  title = 'app';
  hello = 'world';

  constructor(public injector: Injector) {
  }

  ngOnInit() {
    console.log('On init');
  }

  forPhoneUp = () => {
    console.log('phoneUp');
  };

  forDesktopUp = () => {
    console.log('phoneUp');
  };

}


