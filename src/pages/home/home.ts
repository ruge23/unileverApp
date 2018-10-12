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
      let mergedImage = this.mergeImages(this.picture);
      this.navCtrl.push(SecondPage, mergedImage); 
        /* foto:mergedImage,
        fish1:jQuery('.fish').css('margin-left'),
        fish2:jQuery('.fish2').css('margin-left')
      }); */
    }, (err)=>{
      this.picture = 'assets/img/test.jpg'
    });
  }

  mergeImages(foto): string{
    let fishtop1 = Math.round(document.getElementById("fish1").getBoundingClientRect().left);
    let fishleft1 = Math.round(document.getElementById("fish1").getBoundingClientRect().top);
    let fishtop2 = Math.round(document.getElementById("fish2").getBoundingClientRect().left);
    let fishleft2 = Math.round(document.getElementById("fish2").getBoundingClientRect().top);
    let fishtop3 = Math.round(document.getElementById("fish3").getBoundingClientRect().left);
    let fishleft3 = Math.round(document.getElementById("fish3").getBoundingClientRect().top);
    let fishtop4 = Math.round(document.getElementById("fish4").getBoundingClientRect().left);
    let fishleft4 = Math.round(document.getElementById("fish4").getBoundingClientRect().top);
    let fishtop5 = Math.round(document.getElementById("fish5").getBoundingClientRect().left);
    let fishleft5 = Math.round(document.getElementById("fish5").getBoundingClientRect().top);
    let fishtop6 = Math.round(document.getElementById("fish6").getBoundingClientRect().left);
    let fishleft6 = Math.round(document.getElementById("fish6").getBoundingClientRect().top);
    
    const exampleImage = document.createElement('img');
    exampleImage.setAttribute('src', foto);
    const exampleImage2 = document.createElement('img');
    exampleImage2.setAttribute('src', '../../assets/imgs/bg-filtro.png');

    ///////////////////////////
    const exampleImage3 = document.createElement('img');
    exampleImage3.setAttribute('src', '../../assets/imgs/pez1.png');
    const exampleImage4 = document.createElement('img');
    exampleImage4.setAttribute('src', '../../assets/imgs/pez2.png');
    const exampleImage5 = document.createElement('img');
    exampleImage5.setAttribute('src', '../../assets/imgs/pez3.png');
    const exampleImage6 = document.createElement('img');
    exampleImage6.setAttribute('src', '../../assets/imgs/pez4.png');
    const exampleImage7 = document.createElement('img');
    exampleImage7.setAttribute('src', '../../assets/imgs/pez5.png');
    const exampleImage8 = document.createElement('img');
    exampleImage8.setAttribute('src', '../../assets/imgs/pez6.png');

    //this.srcimage = '../../assets/imgs/cualquiera.jpg';
    this.homePageCanvasCtx = this.homepagecanvas.nativeElement.getContext('2d');

    this.platform.ready().then((readySource) => {
      console.log('Width: ' + this.platform.width());
      console.log('Height: ' + this.platform.height());
      this.homePageCanvasCtx.canvas.width = this.platform.width().toString();
      this.homePageCanvasCtx.canvas.height = this.platform.height().toString();


      setTimeout(() => {
        console.log('fish',fishtop1,fishleft1);
        this.homePageCanvasCtx.drawImage(exampleImage, 0, 0,this.platform.width().toString(),this.platform.height().toString());
        this.homePageCanvasCtx.drawImage(exampleImage2, 0, 0,this.platform.width().toString(),this.platform.height().toString());
        this.homePageCanvasCtx.drawImage(exampleImage3, fishtop1,fishleft1);
        this.homePageCanvasCtx.drawImage(exampleImage4, fishtop2,fishleft2);
        this.homePageCanvasCtx.drawImage(exampleImage5, fishtop3,fishleft3);
        this.homePageCanvasCtx.drawImage(exampleImage6, fishtop4,fishleft4);
        this.homePageCanvasCtx.drawImage(exampleImage7, fishtop5,fishleft5);
        this.homePageCanvasCtx.drawImage(exampleImage8, fishtop6,fishleft6);
        console.log("rendered from provider!")

      }, 5000);
    });
    return this.homepagecanvas.nativeElement.toDataURL();
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
