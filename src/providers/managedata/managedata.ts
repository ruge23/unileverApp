import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    var url = "http://ctrlztest.com.ar/mascotasya/apirest/user-create-favorite.php";
    let postData = new FormData();
    postData.append('idempleado', idempleado);
    postData.append('foto', image)
    this.data = this.http.post(url, postData);
    this.data.subscribe(data =>{
      console.log(data);
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
