import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ManagedataProvider } from '../../providers/managedata/managedata';
import  jQuery  from 'jquery';
import { Platform } from 'ionic-angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  @ViewChild('homepagecanvas') homepagecanvas: ElementRef;

  private homePageCanvasCtx: any;
  private fotoroja: string;
 screen: any;
 state: boolean = false;
 showUI: boolean = true;
 imageText: string;
 idEmpleado: number;
 fishtop1: string;
   fishleft1: string;  
    fishtop2: string;
   fishleft2: string;  
    fishtop3: string;
    fishleft3: string;   
    fishtop4: string;
    fishleft4: string;  
    fishtop5: string;
   fishleft5: string;
    fishtop6: string;
    fishleft6: string;
    fotomergeada:string;

 constructor(public navCtrl: NavController, public navParams: NavParams,
   private alertCtrl : AlertController,   
   private mdprovider: ManagedataProvider, public platform: Platform, public base64ToGallery: Base64ToGallery,public loadingCtrl: LoadingController){
    this.fotoroja = this.navParams.data.foto;
    this.fishtop1 = this.navParams.data.fishtop1;
    this.fishleft1 = this.navParams.data.fishleft1;   
    this.fishtop2 = this.navParams.data.fishtop2;
    this.fishleft2 = this.navParams.data.fishleft2;   
    this.fishtop3 = this.navParams.data.fishtop3;
    this.fishleft3 = this.navParams.data.fishleft3;   
    this.fishtop4 = this.navParams.data.fishtop4;
    this.fishleft4 = this.navParams.data.fishleft4;   
    this.fishtop5 = this.navParams.data.fishtop5;
    this.fishleft5 = this.navParams.data.fishleft5;   
    this.fishtop6 = this.navParams.data.fishtop6;
    this.fishleft6 = this.navParams.data.fishleft6;

   console.log('data',this.navParams.data);
 }


 ionViewDidLoad() {
   console.log('ionViewDidLoad MixPage');
   //this.setImage();
 }

 ionViewWillEnter(){
  
    
    
    const exampleImage = document.createElement('img');
    exampleImage.setAttribute('src', this.fotoroja);
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

      this.presentLoading();
      setTimeout(() => {
        
        this.homePageCanvasCtx.drawImage(exampleImage, 0, 0,this.platform.width().toString(),this.platform.height().toString());
        this.homePageCanvasCtx.drawImage(exampleImage2, 0, 0,this.platform.width().toString(),this.platform.height().toString());
        this.homePageCanvasCtx.drawImage(exampleImage3, this.fishtop1,this.fishleft1);
        this.homePageCanvasCtx.drawImage(exampleImage4, this.fishtop2,this.fishleft2);
        this.homePageCanvasCtx.drawImage(exampleImage5, this.fishtop3,this.fishleft3);
        this.homePageCanvasCtx.drawImage(exampleImage6, this.fishtop4,this.fishleft4);
        this.homePageCanvasCtx.drawImage(exampleImage7, this.fishtop5,this.fishleft5);
        this.homePageCanvasCtx.drawImage(exampleImage8, this.fishtop6,this.fishleft6);
        console.log("rendered from provider!")

      }, 5000);
    });

    
   
    console.log("fotomergeadacon:", this.fotomergeada);

  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 5000
    });
    loader.present();
  }

/*  takeScreenshot() {
  let nombreFoto = (Math.floor(Math.random()*20)+1).toString();   
   console.log("take");
   this.screenshot.save('jpg', 80, 'myscreenshot'+nombreFoto+'.jpg').then(res => {
     this.screen = res.filePath;
     this.imageText = this.convertToBase64(res.filePath);
     this.state = true;
   });
 } */

 subiryparticipar() {
  /* let nombreFoto = (Math.floor(Math.random()*20)+1).toString();
  this.showUI = false;
  this.screenshot.save('jpg', 80, 'myscreenshot'+nombreFoto+'.jpg').then(res => {
    //this.screen = res.filePath;
    //this.imageText = this.convertToBase64(res.filePath);
    
    this.base64.encodeFile(res.filePath).then((base64File: string) => {
      console.log(base64File); */
      this.fotomergeada = this.homepagecanvas.nativeElement.toDataURL();
    
      this.mdprovider.subirImagen(this.fotomergeada,1).then((res)=>{
        if(res['status']===200){
          this.showAlertConfirm();
        }else if(res['status']===400){
          this.showAlertError();
        }
      });
    this.state = true;
    
    
  
   //subir
  /*  this.storage.get('_idempleado_').then((val) => {
     this.mdprovider.saveImage(this.imageText,val);
   }); */
   
   //navegar a la siguiente pagina o al popup que te dice que ya estas adentro

 }

 descargar() {
  this.fotomergeada = this.homepagecanvas.nativeElement.toDataURL();
   this.base64ToGallery.base64ToGallery(this.fotomergeada).then(
     res => console.log('Saved image to gallery ', res),
     err => console.log('Error saving image to gallery ', err)
   ); 
  
 }

/*  setImage(){
  jQuery('.fish').css('margin-left', this.navParams.data.fish1);
  jQuery('.fish2').css('margin-left', this.navParams.data.fish2) 
 } */
 
 descartar() {
  this.showUI = true;
  this.navCtrl.pop();
}

 /* convertToBase64(imagePath): any {
   let filePath: string = imagePath;
   this.base64.encodeFile(filePath).then((base64File: string) => {
     console.log(base64File);
     return base64File;
   }, (err) => {
     console.log(err);
   });
 } */

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