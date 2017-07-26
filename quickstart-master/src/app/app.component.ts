import { Component,NgModule } from '@angular/core';
import { FormsModule,FormControl } from '@angular/forms';
import { Http,HttpModule } from '@angular/http';
import {Navigation} from './components/NavigatonBar/navigation.component';
import {homeComponent} from './components/home/home.component';
import { AdvService} from'./services/product.service';
@Component({
  selector: 'my-app',
  template: `<navig></navig>
              <home></home>`,
})
export class AppComponent  { }
