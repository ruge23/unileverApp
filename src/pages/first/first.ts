import { Observable } from 'rxjs/Observable';
import { ManagedataProvider } from './../../providers/managedata/managedata';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  data : Observable <any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public manager: ManagedataProvider
  ) {
  }

  showAlert(){
    const alert = this.alertCtrl.create({
      title: '¿Cómo participar?',
      cssClass: 'custom-alert',
      message: 
      `
        <p>Es muy sencillo:</p>
        <p>Tenés que apretar el botón “Empezar”, tomarte una foto en familia con nuestro filtro "Bajo el agua" y ya estás participando por uno de los pases para 4 personas para vivir una noche única en el acuario de Temaiken.</p>
        <p>¡Las fotos más divertidas ganan! Tenés tiempo hasta el 4 de noviembre.</p>
        <p>¿Estás listo?</p>
      `,
      buttons:[
        {
          text: 'OK',
          role: 'cancel',
          handler: ()=>{
          }
        }
      ]
    })

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  async showAlertEmpezar(){
    const alertEmpezar = this.alertCtrl.create({
      title: 'Ingresá tus datos para continuar',
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
            if(data.nombre != "" && data.apellido != "" && data.id != ""){
              this.data = this.manager.crearParticipante(data.nombre, data.apellido, data.id);
              this.data.subscribe(result => {
                console.log('saf',result.json().status);
                let status = result.json().status;
              if(status == 200){
                this.manager.setUserId(data.id);
                console.log("go home");
                this.gotoHome();
                
              }else{
                this.showAlertError();
              }
            });
          }else{
            this.showAlertError();
          }
             
              
              /*  
 */
            
            /* console.log('algoo',req)
                
            console.log(data); */
          }
        }
      ]
    });
    alertEmpezar.present();
  }

  showAlertTerminos(){
    const alert = this.alertCtrl.create({
      title: 'Bases y Condiciones del sorteo "Una noche con Tiburones"',
      cssClass: 'custom-alert-terminos',
      message: 
      `
        <p>1. UNILEVER ARGENTINA S.A  cuit 30-50109269-6 . (el “Organizador”), con domicilio en Alférez Hipólito Bouchard 4191, B1605BNA Munro, Pcia de Buenos Aires, realiza este concurso llamado “Participá por una noche con tiburones” (el Concurso). El mismo tendrá vigencia en la República Argentina, (el “Territorio”) hasta finalizado el evento llamado "Día de la Familia en Temaiken" año 2018 y dará a conocer a los 64 participantes, 16 familias que asistirán como fecha única y exclusiva para UNILEVER ARGENTINA S.A el 15 de Diciembre del 2018  (“Vigencia”). De no presentarse en dicha fecha, se perderá el premio sin solicitud de reclamo alguno. Participan del concurso los empleados de UNILEVER ARGENTINA S.A, (Participante/s”).
        </p>
        <p>La presente  se encuentra sujeta a las siguientes bases y condiciones (las “Bases”).</p>
        <p>Podrán participar del concurso los interesados que reúnan y/o cumplan con los siguientes requisitos:<br> 
          i) sean personas físicas mayores de 18 años de edad. <br>
          ii) se domicilien en el Territorio y;<br>
          iii) cumplan con la totalidad de los requisitos de participación establecidos en las presentes Bases (el/los “Participante/s”).
        </p>
        <p>Los traslados al Bioparque Temaikén el 15 de diciembre del 2018 serán a cargo de los ganadores.  
        </p>
        <p>Se podrá participar una (1) sola vez por persona durante el Plazo de Vigencia. Ningún Participante podrá ganar más de un (1) Premio.</p>
        <p>Forma de Participación:<br>
          i) ingresar el código QR  (ANDROID);<br> 
          ii) completar el número de empleado con los siguientes datos requeridos veraces y completos del Participante.<br> 
          iii) Podrán tomar una foto en el sector Acreditación y participar desde Temaikén, si aún no participaron con el código QR (ANDROID).</p>
        <p>El participante declara haber leído y aceptado dichas bases & condiciones.</p>
        `,
      buttons:[
        {
          text: 'OK',
          role: 'cancel',
          handler: ()=>{
          }
        }
      ]
    })

    alert.present();
  }

  /* getAccess(nombre, apellido, id){
    this.manager.crearParticipante(nombre, apellido, id)
      .su
  } */

  gotoHome(){
    this.navCtrl.push(HomePage);
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
