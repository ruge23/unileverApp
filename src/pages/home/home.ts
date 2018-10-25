import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SecondPage } from './../second/second';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview';
import { ManagedataProvider } from '../../providers/managedata/managedata';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('homepagecanvas') homepagecanvas: ElementRef;

  private homePageCanvasCtx: any;
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
    private mdprovider: ManagedataProvider) {
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
      //Aca tengo que unirlo a las otras imagenes
      //let mergedImage = this.mergeImages(this.picture);
      //mergedImage = this.mergeImages(this.picture);
     
    let param = {
      foto: this.picture,
      fishtop1 : Math.round(document.getElementById("fish1").getBoundingClientRect().left),
      fishleft1 : Math.round(document.getElementById("fish1").getBoundingClientRect().top),
      fishtop2 : Math.round(document.getElementById("fish2").getBoundingClientRect().left),
      fishleft2 : Math.round(document.getElementById("fish2").getBoundingClientRect().top),
      fishtop3 : Math.round(document.getElementById("fish3").getBoundingClientRect().left),
      fishleft3 : Math.round(document.getElementById("fish3").getBoundingClientRect().top),
      fishtop4 : Math.round(document.getElementById("fish4").getBoundingClientRect().left),
      fishleft4 : Math.round(document.getElementById("fish4").getBoundingClientRect().top),
      fishtop5 : Math.round(document.getElementById("fish5").getBoundingClientRect().left),
      fishleft5 : Math.round(document.getElementById("fish5").getBoundingClientRect().top),
      fishtop6 : Math.round(document.getElementById("fish6").getBoundingClientRect().left),
      fishleft6 : Math.round(document.getElementById("fish6").getBoundingClientRect().top)
    };
      this.navCtrl.push(SecondPage, param); 
        /* foto:mergedImage,
        fish1:jQuery('.fish').css('margin-left'),
        fish2:jQuery('.fish2').css('margin-left')
      }); */
    }, (err)=>{
      this.picture = 'assets/img/test.jpg'
    });
  }

 
  refresh() {
    window['location'].reload();
  }
  
/*   async takeScreenshot() {
    try{
      this.buttonvisible = false;
      await this.platform.ready();

      const res = await this.screenshot.save('jpg', 80, 'tuvieja.jpg');
      console.log(res);
    }catch(e){
      console.error(e)
    }
  } */

/*   async takeScreenshotGetUri() {
    try{
      await this.platform.ready();

      const res = await this.screenshot.URI(80);
      this.userScreenshoot = res.URI;
    }catch(e){
      console.error(e)
    }
  } */
 
/*   convertToBase64(imagePath): any {
    let filePath: string = imagePath;
    this.base64.encodeFile(filePath).then((base64File: string) => {
      console.log(base64File);
      return base64File;
    }, (err) => {
      console.log(err);      
    });
  } */

   
    //navegar a la siguiente pagina o al popup que te dice que ya estas adentro

}
