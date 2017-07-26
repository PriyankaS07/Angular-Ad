import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http,HttpModule } from '@angular/http';
import {Navigation} from './components/NavigatonBar/navigation.component';
import { AppComponent }  from './app.component';
import {homeComponent} from './components/home/home.component';
import { AdvService} from'./services/product.service';
import { FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule],
  declarations: [ AppComponent,Navigation,homeComponent,Navigation],
  bootstrap:    [ AppComponent ],
  providers:[AdvService]
})
export class AppModule { }
