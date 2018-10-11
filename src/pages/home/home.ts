import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SecondPage } from './../second/second';
import  jQuery  from 'jquery';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview';
import { Screenshot } from '@ionic-native/screenshot';
import { Base64 } from '@ionic-native/base64';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { ManagedataProvider } from '../../providers/managedata/managedata';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  screen: any;
  state: boolean = false;
  showUI: boolean = true;
  imageText: string;
  idEmpleado: number;
  userScreenshoot:string;
  picture:string;
  buttonvisible: boolean = true;

  cameraPreviewOpts : CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'front',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };

  // picture options
  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  }

  constructor(
    private platform: Platform,
    public navCtrl: NavController, 
    private cameraPreview: CameraPreview,
    private screenshot: Screenshot, 
    private base64: Base64,
    private base64ToGallery: Base64ToGallery,
    private mdprovider: ManagedataProvider,
    private storage: Storage) {
      this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
        (res) => {
          console.log(res)
        },
        (err) => {
          console.log(err)
        }
      )
  }

  takePhoto(){   
    this.cameraPreview.takePicture(this.pictureOpts).then((imageData)=>{
      this.picture = 'data:image/jpeg;base64,' + imageData;
      this.navCtrl.push(SecondPage, { 
        foto:this.picture,
        fish1:jQuery('.fish').css('margin-left'),
        fish2:jQuery('.fish2').css('margin-left')
      });
    }, (err)=>{
      this.picture = 'assets/img/test.jpg'
    });
  }

  refresh() {
    window['location'].reload();
  }
  
  async takeScreenshot() {
    try{
      this.buttonvisible = false;
      await this.platform.ready();

      const res = await this.screenshot.save('jpg', 80, 'tuvieja.jpg');
      console.log(res);
    }catch(e){
      console.error(e)
    }
  }

  async takeScreenshotGetUri() {
    try{
      await this.platform.ready();

      const res = await this.screenshot.URI(80);
      this.userScreenshoot = res.URI;
    }catch(e){
      console.error(e)
    }
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

   
    //navegar a la siguiente pagina o al popup que te dice que ya estas adentro

}
