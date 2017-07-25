import { Component } from '@angular/core';
import {Navigation} from './components/NavigatonBar/navigation.component'
import {homeComponent} from './components/home/home.component'
@Component({
  selector: 'my-app',
  template: `<navig></navig>
              <home></home>`,
})
export class AppComponent  { }
