import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
/*
  Generated class for the ManagedataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ManagedataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ManagedataProvider Provider');
  }

  private data: any;
  saveImage(image, idempleado) {
    /* var url = "http://ctrlztest.com.ar/unilever/api/guardarfoto.php";
    let postData = new FormData();
    postData.append('idempleado', idempleado);
    postData.append('foto', image)
    this.data = this.http.post(url, postData,{
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    this.data.subscribe(data =>{
      console.log(data);
    }) */
    /* this.http.post('http://ctrlztest.com.ar/unilever/api/guardarfoto.php?foto='+image+'&idempleado=1',{},{headers :{'Content-Type':'multipart/form-data'}})
      .subscribe(
          (res)=>{
            console.log(res);
        },
          (err)=>{console.log('Error', err)}
        ); */

        let url = "http://ctrlztest.com.ar/unilever/api/guardarfoto.php";

        var headers = new Headers()
         headers.append('Content-Type', 'application/x-www-form-urlencoded');
       
        let options = new RequestOptions({ headers: headers });
       
       
          let body =  "idempleado=" +idempleado + "&foto=" +image ;
       
          alert(body);
       
        let req = this.http.post(url, body, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        req.subscribe((res)=>{
          console.log(res)
        },(err)=>{
          console.log(err);
        })  
      }

  saveUserData(nombre, apellido, idempleado) {
    var url = "http://ctrlztest.com.ar/mascotasya/apirest/user-create-favorite.php";
    let postData = new FormData();
    postData.append('idempleado', idempleado);
    postData.append('nombre', nombre)
    postData.append('apellido', apellido)
    this.data = this.http.post(url, postData);
    this.data.subscribe(data =>{
      console.log(data);
    })
  }

}
