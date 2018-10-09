import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert(){
    const alert = this.alertCtrl.create({
      title: '¿Cómo participar?',
      cssClass: 'custom-alert',
      message: 
      `
        <p>Es muy sensillo.</p>
        <p>Tenés que apretar el botón “Empezar”, tomarte una foto en familia con nuestro filtro "Bajo el agua" y ¡ya estás participando!</p>
        <p>¡Las fotos más divertidas ganan!</p>
        <p>Participas por uno de los pases para 4 personas para vivir una noche única en el acuario de Temaiken.</p>
        <p>¿Estás Listo?</p>
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  showAlertEmpezar(){
    const alertEmpezar = this.alertCtrl.create({
      title: 'Ingresa tus datos para continuar',
      cssClass: 'custom-alert-empezar',
      inputs: [
        {
          name:'nombre',
          placeholder: 'Nombre',
          type: 'text'
        },
        {
          name: 'apellido',
          placeholder: 'Apellido',
          type: 'text'
        },
        {
          name: 'id',
          placeholder: 'ID Empleado',
          type: 'number'
        }
      ],
      buttons:[
        {
          text: 'Continuar',
          role: 'cancel',
          handler: data =>{
            console.log(data);
          }
        }
      ]
    });
    alertEmpezar.present();
  }

  gotoHome(){
    this.navCtrl.push(HomePage);
  }

}
