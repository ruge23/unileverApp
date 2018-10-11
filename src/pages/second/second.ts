import { Base64 } from '@ionic-native/base64';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { ManagedataProvider } from '../../providers/managedata/managedata';
import { Screenshot } from '@ionic-native/screenshot';
import  jQuery  from 'jquery';

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  private fotoroja: string;
 screen: any;
 state: boolean = false;
 showUI: boolean = true;
 imageText: string;
 idEmpleado: number;
 

 constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot,
   private base64: Base64,private base64ToGallery: Base64ToGallery,
   private alertCtrl : AlertController,   
   private mdprovider: ManagedataProvider){
    this.fotoroja = this.navParams.data.foto;
   //console.log(this.navParams.data);
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad MixPage');
   //this.setImage();
 }

 ionViewWillEnter(){
   this.setImage();
 } 

 takeScreenshot() {
  let nombreFoto = (Math.floor(Math.random()*20)+1).toString();   
   console.log("take");
   this.screenshot.save('jpg', 80, 'myscreenshot'+nombreFoto+'.jpg').then(res => {
     this.screen = res.filePath;
     this.imageText = this.convertToBase64(res.filePath);
     this.state = true;
   });
 }

 subiryparticipar() {
  let nombreFoto = (Math.floor(Math.random()*20)+1).toString();
  this.showUI = false;
  this.screenshot.save('jpg', 80, 'myscreenshot'+nombreFoto+'.jpg').then(res => {
    //this.screen = res.filePath;
    //this.imageText = this.convertToBase64(res.filePath);
    
    this.base64.encodeFile(res.filePath).then((base64File: string) => {
      console.log(base64File);
      this.mdprovider.subirImagen(base64File,1).then((res)=>{
        if(res['status']===200){
          this.showAlertConfirm();
        }else if(res['status']===400){
          this.showAlertError();
        }
      })
    this.state = true;
    }, (err) => {
      this.showAlertError();
      console.log(err);
    });
    
  });
   //subir
  /*  this.storage.get('_idempleado_').then((val) => {
     this.mdprovider.saveImage(this.imageText,val);
   }); */
   
   //navegar a la siguiente pagina o al popup que te dice que ya estas adentro

 }

 descargar() {
   /* this.base64ToGallery.base64ToGallery(this.imageText).then(
     res => console.log('Saved image to gallery ', res),
     err => console.log('Error saving image to gallery ', err)
   ); */
   this.takeScreenshot();
 }

 setImage(){
  jQuery('.fish').css('margin-left', this.navParams.data.fish1);
  jQuery('.fish2').css('margin-left', this.navParams.data.fish2) 
 }
 
 descartar() {
  this.showUI = true;
  this.navCtrl.pop();
}

 convertToBase64(imagePath): any {
   let filePath: string = imagePath;
   this.base64.encodeFile(filePath).then((base64File: string) => {
     console.log(base64File);
     return base64File;
   }, (err) => {
     console.log(err);
   });
 }

 showAlertConfirm(){
  const alert = this.alertCtrl.create({
    title: '¡Ya estás participando!',
    cssClass: 'custom-alert',
    message: 
    `
      <p>Muchas gracias por tu buena onda.</p>
    `,
    buttons:[
      {
        text: 'OK',
        role: 'cancel',
        handler: ()=>{
          this.navCtrl.popToRoot();
        }
      }
    ]
  })

  alert.present();
}

showAlertError(){
  const alert = this.alertCtrl.create({
    title: '¡Oops...!',
    cssClass: 'custom-alert',
    message: 
    `
      <p>Parece que hubo un error</p>
      <p>Revisá tu conexión a internet e intentalo nuevamente más tarde.</p>
    `,
    buttons:[
      {
        text: 'OK',
        role: 'cancel',
        handler: ()=>{}
      }
    ]
  })

  alert.present();
}
}