import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdvService } from '../../services/product.service';
import { Http, HttpModule } from '@angular/http';


@Component({
  selector: 'navig',
  templateUrl: `./navigation.html`,
  styles: [`input.ng-invalid {border-left: 5px solid red}   input.ng-valid {border-left: 5px solid green}`]
})
export class Navigation {
  Category: any[] = [];
  Posts:any[]=[];
  mainLoginObj:any;
  mainAdObj: any;
  regObj:any;
  constructor(private myAdvService: AdvService) {
    myAdvService.getCategories().subscribe((data) => {
      this.Category = data.data.itemList;
    })
    myAdvService.getPosts().subscribe((data) => {
      this.Posts = data.data.mypostList;
      console.log(data);
    })

  }



  onSubmit(formObj: any) {
    console.log("In onSubmit");
    console.log(formObj);
    this.mainAdObj = formObj;


    let Advobj =
      {
        title: this.mainAdObj.title,
        name: this.mainAdObj.name,
        category: this.mainAdObj.category,
        description: this.mainAdObj.description
      }
    console.log("this is adv object", Advobj);

    this.myAdvService.postAd(Advobj);

  }

  onLogin(loginObj: any) {
    console.log("In onSubmit");
    console.log(loginObj);
  

    this.myAdvService.login(loginObj);

  }

  onregister(regObj: any) {
    console.log("In onSubmit");
    console.log(regObj);
    this.regObj = regObj;


    let Regobj =
      {
        firstName:this.regObj.fname,
        lastName:this.regObj.lname,
        userName:this.regObj.userName,
        password:this.regObj.password,
        email:this.regObj.email,
        phone:this.regObj.phone
      }
    console.log("this is reg object", Regobj);

    this.myAdvService.register(Regobj);

  }

}


