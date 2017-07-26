import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AdvService {
    static AuthToken:string;
     constructor(private _http:Http){}
     getCategories() { 
         let url="http://192.168.3.144:9000/categories";
         return this._http.get(url).map((response: Response)=>response.json()); 
        }

    getPosts() { 
        let url="http://192.168.3.144:9000/posts";
        let headers = new Headers();
        headers.append('auth-token', '5976e9751c0edf75e32798c0');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
         
         return this._http.get(url,options).map((response: Response)=>response.json()); 
        }

        login(jsonReq:Object){
            let url = "http://192.168.3.144:9000/login"; //Akshay machine
        let lobj= this._http.post(url, jsonReq).map((response: Response) => response.json());
        lobj.subscribe((data)=>{
        console.log(data);
        let authtoken="auth-token";
        AdvService.AuthToken=data.data[authtoken];
        console.log(AdvService.AuthToken)});
        }

    postAd(postAdObj:any) {
        let url = "http://192.168.3.144:9000/postAd"; //Akshay machine
        //let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        headers.append('auth-token', AdvService.AuthToken);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = { "title": postAdObj.title, "name": postAdObj.name, "category": postAdObj.category, "description": postAdObj.description };
        console.log("jsonReq", jsonReq);
        let adObj= this._http.post(url, jsonReq, options).map((response: Response) => response.json());
        adObj.subscribe((data)=>console.log("My Adv in postAD method:-  ",data));

    }

register(regObj:any) {
        let url = "http://192.168.3.144:9000/register"; //Akshay machine
        //let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        //headers.append('auth-token', AdvService.AuthToken);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = { "firstName": regObj.firstName, "lastName": regObj.lastName, "userName": regObj.userName, "password": regObj.password, "email":regObj.email, "phone":regObj.phone };
        console.log("jsonReq", jsonReq);
        let reObj= this._http.post(url, jsonReq, options).map((response: Response) => response.json());
        reObj.subscribe((data)=>console.log("My Adv in reg method:-  ",data));

    }



}