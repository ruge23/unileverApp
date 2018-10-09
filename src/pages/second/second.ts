import { Base64 } from '@ionic-native/base64';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { ManagedataProvider } from '../../providers/managedata/managedata';
import { Screenshot } from '@ionic-native/screenshot';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
   private mdprovider: ManagedataProvider){//,private storage: Storage) {
   this.fotoroja = navParams.data;
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad MixPage');
 }

 takeScreenshot() {
   this.showUI = false;
   console.log("take");
   this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
     this.screen = res.filePath;
     this.imageText = this.convertToBase64(res.filePath);
     this.state = true;
   });
 }

 subiryparticipar() {
  this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
    //this.screen = res.filePath;
    //this.imageText = this.convertToBase64(res.filePath);
    
    this.base64.encodeFile(res.filePath).then((base64File: string) => {
      console.log(base64File);
      this.mdprovider.saveImage(base64File,1);
    this.state = true;
    }, (err) => {
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

 descartar() {
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
}