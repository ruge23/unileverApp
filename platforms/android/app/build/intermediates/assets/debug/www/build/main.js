webpackJsonp([2],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_managedata_managedata__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SecondPage = /** @class */ (function () {
    function SecondPage(navCtrl, navParams, alertCtrl, mdprovider, platform, base64ToGallery, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.mdprovider = mdprovider;
        this.platform = platform;
        this.base64ToGallery = base64ToGallery;
        this.loadingCtrl = loadingCtrl;
        this.state = false;
        this.showUI = true;
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
        console.log('data', this.navParams.data);
    }
    SecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MixPage');
        //this.setImage();
    };
    SecondPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var exampleImage = document.createElement('img');
        exampleImage.setAttribute('src', this.fotoroja);
        var exampleImage2 = document.createElement('img');
        exampleImage2.setAttribute('src', '../../assets/imgs/bg-filtro.png');
        ///////////////////////////
        var exampleImage3 = document.createElement('img');
        exampleImage3.setAttribute('src', '../../assets/imgs/pez1.png');
        var exampleImage4 = document.createElement('img');
        exampleImage4.setAttribute('src', '../../assets/imgs/pez2.png');
        var exampleImage5 = document.createElement('img');
        exampleImage5.setAttribute('src', '../../assets/imgs/pez3.png');
        var exampleImage6 = document.createElement('img');
        exampleImage6.setAttribute('src', '../../assets/imgs/pez4.png');
        var exampleImage7 = document.createElement('img');
        exampleImage7.setAttribute('src', '../../assets/imgs/pez5.png');
        var exampleImage8 = document.createElement('img');
        exampleImage8.setAttribute('src', '../../assets/imgs/pez6.png');
        //this.srcimage = '../../assets/imgs/cualquiera.jpg';
        this.homePageCanvasCtx = this.homepagecanvas.nativeElement.getContext('2d');
        this.platform.ready().then(function (readySource) {
            console.log('Width: ' + _this.platform.width());
            console.log('Height: ' + _this.platform.height());
            _this.homePageCanvasCtx.canvas.width = _this.platform.width().toString();
            _this.homePageCanvasCtx.canvas.height = _this.platform.height().toString();
            _this.presentLoading();
            setTimeout(function () {
                _this.homePageCanvasCtx.drawImage(exampleImage, 0, 0, _this.platform.width().toString(), _this.platform.height().toString());
                _this.homePageCanvasCtx.drawImage(exampleImage2, 0, 0, _this.platform.width().toString(), _this.platform.height().toString());
                _this.homePageCanvasCtx.drawImage(exampleImage3, _this.fishtop1, _this.fishleft1);
                _this.homePageCanvasCtx.drawImage(exampleImage4, _this.fishtop2, _this.fishleft2);
                _this.homePageCanvasCtx.drawImage(exampleImage5, _this.fishtop3, _this.fishleft3);
                _this.homePageCanvasCtx.drawImage(exampleImage6, _this.fishtop4, _this.fishleft4);
                _this.homePageCanvasCtx.drawImage(exampleImage7, _this.fishtop5, _this.fishleft5);
                _this.homePageCanvasCtx.drawImage(exampleImage8, _this.fishtop6, _this.fishleft6);
                console.log("rendered from provider!");
            }, 5000);
        });
        console.log("fotomergeadacon:", this.fotomergeada);
    };
    SecondPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Espere por favor...",
            duration: 5000
        });
        loader.present();
    };
    /*  takeScreenshot() {
      let nombreFoto = (Math.floor(Math.random()*20)+1).toString();
       console.log("take");
       this.screenshot.save('jpg', 80, 'myscreenshot'+nombreFoto+'.jpg').then(res => {
         this.screen = res.filePath;
         this.imageText = this.convertToBase64(res.filePath);
         this.state = true;
       });
     } */
    SecondPage.prototype.subiryparticipar = function () {
        var _this = this;
        /* let nombreFoto = (Math.floor(Math.random()*20)+1).toString();
        this.showUI = false;
        this.screenshot.save('jpg', 80, 'myscreenshot'+nombreFoto+'.jpg').then(res => {
          //this.screen = res.filePath;
          //this.imageText = this.convertToBase64(res.filePath);
          
          this.base64.encodeFile(res.filePath).then((base64File: string) => {
            console.log(base64File); */
        this.fotomergeada = this.homepagecanvas.nativeElement.toDataURL();
        this.mdprovider.subirImagen(this.fotomergeada, 1).then(function (res) {
            if (res['status'] === 200) {
                _this.showAlertConfirm();
            }
            else if (res['status'] === 400) {
                _this.showAlertError();
            }
        });
        this.state = true;
        //subir
        /*  this.storage.get('_idempleado_').then((val) => {
           this.mdprovider.saveImage(this.imageText,val);
         }); */
        //navegar a la siguiente pagina o al popup que te dice que ya estas adentro
    };
    SecondPage.prototype.descargar = function () {
        this.fotomergeada = this.homepagecanvas.nativeElement.toDataURL();
        this.base64ToGallery.base64ToGallery(this.fotomergeada).then(function (res) { return console.log('Saved image to gallery ', res); }, function (err) { return console.log('Error saving image to gallery ', err); });
    };
    /*  setImage(){
      jQuery('.fish').css('margin-left', this.navParams.data.fish1);
      jQuery('.fish2').css('margin-left', this.navParams.data.fish2)
     } */
    SecondPage.prototype.descartar = function () {
        this.showUI = true;
        this.navCtrl.pop();
    };
    /* convertToBase64(imagePath): any {
      let filePath: string = imagePath;
      this.base64.encodeFile(filePath).then((base64File: string) => {
        console.log(base64File);
        return base64File;
      }, (err) => {
        console.log(err);
      });
    } */
    SecondPage.prototype.showAlertConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¡Ya estás participando!',
            cssClass: 'custom-alert',
            message: "\n      <p>Muchas gracias por tu buena onda.</p>\n    ",
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        alert.present();
    };
    SecondPage.prototype.showAlertError = function () {
        var alert = this.alertCtrl.create({
            title: '¡Oops...!',
            cssClass: 'custom-alert',
            message: "\n      <p>Parece que hubo un error</p>\n      <p>Revis\u00E1 tu conexi\u00F3n a internet e intentalo nuevamente m\u00E1s tarde.</p>\n    ",
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('homepagecanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SecondPage.prototype, "homepagecanvas", void 0);
    SecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-second',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/unilever/unileverApp/src/pages/second/second.html"*/'<ion-content>\n    <canvas #homepagecanvas></canvas>\n<!--  <img src="{{fotomergeada}}"> -->\n<div id="bubbles">\n  <div class="bubble x1">\n    <img src="../../assets/imgs/burbuja1.png" alt="">\n  </div>\n  <div class="bubble x3">\n    <img src="../../assets/imgs/burbuja2.png" alt="">      \n  </div>\n  <div class="bubble x9">\n    <img src="../../assets/imgs/burbuja1.png" alt="">      \n  </div>\n  <div class="bubble x2">\n    <img src="../../assets/imgs/burbuja1.png" alt="">\n  </div>\n  <div class="bubble x4">\n    <img src="../../assets/imgs/burbuja2.png" alt="">      \n  </div>\n  <div class="bubble x5">\n    <img src="../../assets/imgs/burbuja1.png" alt="">      \n  </div>\n</div>\n <!-- <ion-fab bottom center>\n   <button (click)="subiryparticipar()" ion-fab color="secondary">Participar con esta foto</button>\n </ion-fab>\n <ion-fab bottom center>\n   <button (click)="descartar()" ion-fab color="primary">Descartar Foto</button>\n </ion-fab>\n <ion-fab bottom center>\n   <button (click)="descargar()" ion-fab color="danger">Guardar Foto</button>\n </ion-fab> -->\n <div class="botones-opcion-foto">\n   <button ion-button color="participar" *ngIf="showUI" (click)="subiryparticipar()">Participar con esta Foto</button>\n   <button ion-button color="guardar" *ngIf="showUI" (click)="descargar()">Guardar Foto</button>\n   <button ion-button color="descartar" *ngIf="showUI" (click)="descartar()">Descartar Foto</button>  \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/unilever/unileverApp/src/pages/second/second.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_managedata_managedata__["a" /* ManagedataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SecondPage);
    return SecondPage;
}());

//# sourceMappingURL=second.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_managedata_managedata__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams, alertCtrl, manager) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.manager = manager;
    }
    FirstPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: '¿Cómo participar?',
            cssClass: 'custom-alert',
            message: "\n        <p>Es muy sencillo:</p>\n        <p>Ten\u00E9s que apretar el bot\u00F3n \u201CEmpezar\u201D, tomarte una foto en familia con nuestro filtro \"Bajo el agua\" y ya est\u00E1s participando por uno de los pases para 4 personas para vivir una noche \u00FAnica en el acuario de Temaiken.</p>\n        <p>\u00A1Las fotos m\u00E1s divertidas ganan! Ten\u00E9s tiempo hasta el 4 de noviembre.</p>\n        <p>\u00BFEst\u00E1s listo?</p>\n      ",
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    FirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstPage');
    };
    FirstPage.prototype.showAlertEmpezar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alertEmpezar;
            return __generator(this, function (_a) {
                alertEmpezar = this.alertCtrl.create({
                    title: 'Ingresá tus datos para continuar',
                    cssClass: 'custom-alert-empezar',
                    inputs: [
                        {
                            name: 'nombre',
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
                    buttons: [
                        {
                            text: 'Continuar',
                            role: 'cancel',
                            handler: function (data) {
                                if (data.nombre != "" && data.apellido != "" && data.id != "") {
                                    _this.data = _this.manager.crearParticipante(data.nombre, data.apellido, data.id);
                                    _this.data.subscribe(function (result) {
                                        console.log('saf', result.json().status);
                                        var status = result.json().status;
                                        if (status == 200) {
                                            _this.manager.setUserId(data.id);
                                            console.log("go home");
                                            _this.gotoHome();
                                        }
                                        else {
                                            _this.showAlertError();
                                        }
                                    });
                                }
                                else {
                                    _this.showAlertError();
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
                return [2 /*return*/];
            });
        });
    };
    FirstPage.prototype.showAlertTerminos = function () {
        var alert = this.alertCtrl.create({
            title: 'Bases y Condiciones del sorteo "Una noche con Tiburones"',
            cssClass: 'custom-alert-terminos',
            message: "\n        <p>1. UNILEVER ARGENTINA S.A  cuit 30-50109269-6 . (el \u201COrganizador\u201D), con domicilio en Alf\u00E9rez Hip\u00F3lito Bouchard 4191, B1605BNA Munro, Pcia de Buenos Aires, realiza este concurso llamado \u201CParticip\u00E1 por una noche con tiburones\u201D (el Concurso). El mismo tendr\u00E1 vigencia en la Rep\u00FAblica Argentina, (el \u201CTerritorio\u201D) hasta finalizado el evento llamado \"D\u00EDa de la Familia en Temaiken\" a\u00F1o 2018 y dar\u00E1 a conocer a los 64 participantes, 16 familias que asistir\u00E1n como fecha \u00FAnica y exclusiva para UNILEVER ARGENTINA S.A el 15 de Diciembre del 2018  (\u201CVigencia\u201D). De no presentarse en dicha fecha, se perder\u00E1 el premio sin solicitud de reclamo alguno. Participan del concurso los empleados de UNILEVER ARGENTINA S.A, (Participante/s\u201D).\n        </p>\n        <p>La presente  se encuentra sujeta a las siguientes bases y condiciones (las \u201CBases\u201D).</p>\n        <p>Podr\u00E1n participar del concurso los interesados que re\u00FAnan y/o cumplan con los siguientes requisitos:<br> \n          i) sean personas f\u00EDsicas mayores de 18 a\u00F1os de edad. <br>\n          ii) se domicilien en el Territorio y;<br>\n          iii) cumplan con la totalidad de los requisitos de participaci\u00F3n establecidos en las presentes Bases (el/los \u201CParticipante/s\u201D).\n        </p>\n        <p>Los traslados al Bioparque Temaik\u00E9n el 15 de diciembre del 2018 ser\u00E1n a cargo de los ganadores.  \n        </p>\n        <p>Se podr\u00E1 participar una (1) sola vez por persona durante el Plazo de Vigencia. Ning\u00FAn Participante podr\u00E1 ganar m\u00E1s de un (1) Premio.</p>\n        <p>Forma de Participaci\u00F3n:<br>\n          i) ingresar el c\u00F3digo QR  (ANDROID);<br> \n          ii) completar el n\u00FAmero de empleado con los siguientes datos requeridos veraces y completos del Participante.<br> \n          iii) Podr\u00E1n tomar una foto en el sector Acreditaci\u00F3n y participar desde Temaik\u00E9n, si a\u00FAn no participaron con el c\u00F3digo QR (ANDROID).</p>\n        <p>El participante declara haber le\u00EDdo y aceptado dichas bases & condiciones.</p>\n        ",
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    /* getAccess(nombre, apellido, id){
      this.manager.crearParticipante(nombre, apellido, id)
        .su
    } */
    FirstPage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    FirstPage.prototype.showAlertError = function () {
        var alert = this.alertCtrl.create({
            title: '¡Oops...!',
            cssClass: 'custom-alert',
            message: "\n        <p>Parece que hubo un error</p>\n        <p>Revis\u00E1 tu conexi\u00F3n a internet e intentalo nuevamente m\u00E1s tarde.</p>\n      ",
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-first',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/unilever/unileverApp/src/pages/first/first.html"*/'<ion-content>\n  <div class="logo">\n    <img src="../../assets/imgs/img/logo-uni-final.png">\n  </div>\n  <div class="botones-index">\n    <a href="#" (click)="showAlert()" class="btn btn-como">¿Cómo participar?</a>\n    <a href="#" (click)="showAlertTerminos()" class="btn btn-como">Términos y condiciones</a> \n    <a href="#" (click)="showAlertEmpezar()" class="btn btn-empezar">¡Empezar!</a>    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/unilever/unileverApp/src/pages/first/first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_managedata_managedata__["a" /* ManagedataProvider */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/first/first.module": [
		408,
		1
	],
	"../pages/second/second.module": [
		407,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second_second__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_managedata_managedata__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(platform, navCtrl, cameraPreview, mdprovider) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.cameraPreview = cameraPreview;
        this.mdprovider = mdprovider;
        this.state = false;
        this.showUI = true;
        this.buttonvisible = true;
        this.cameraPreviewOpts = {
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
        this.pictureOpts = {
            width: 1280,
            height: 1280,
            quality: 85
        };
        this.cameraPreview.startCamera(this.cameraPreviewOpts).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    }
    HomePage.prototype.takePhoto = function () {
        var _this = this;
        this.cameraPreview.takePicture(this.pictureOpts).then(function (imageData) {
            _this.picture = 'data:image/jpeg;base64,' + imageData;
            //Aca tengo que unirlo a las otras imagenes
            //let mergedImage = this.mergeImages(this.picture);
            //mergedImage = this.mergeImages(this.picture);
            var param = {
                foto: _this.picture,
                fishtop1: Math.round(document.getElementById("fish1").getBoundingClientRect().left),
                fishleft1: Math.round(document.getElementById("fish1").getBoundingClientRect().top),
                fishtop2: Math.round(document.getElementById("fish2").getBoundingClientRect().left),
                fishleft2: Math.round(document.getElementById("fish2").getBoundingClientRect().top),
                fishtop3: Math.round(document.getElementById("fish3").getBoundingClientRect().left),
                fishleft3: Math.round(document.getElementById("fish3").getBoundingClientRect().top),
                fishtop4: Math.round(document.getElementById("fish4").getBoundingClientRect().left),
                fishleft4: Math.round(document.getElementById("fish4").getBoundingClientRect().top),
                fishtop5: Math.round(document.getElementById("fish5").getBoundingClientRect().left),
                fishleft5: Math.round(document.getElementById("fish5").getBoundingClientRect().top),
                fishtop6: Math.round(document.getElementById("fish6").getBoundingClientRect().left),
                fishleft6: Math.round(document.getElementById("fish6").getBoundingClientRect().top)
            };
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__second_second__["a" /* SecondPage */], param);
            /* foto:mergedImage,
            fish1:jQuery('.fish').css('margin-left'),
            fish2:jQuery('.fish2').css('margin-left')
          }); */
        }, function (err) {
            _this.picture = 'assets/img/test.jpg';
        });
    };
    HomePage.prototype.refresh = function () {
        window['location'].reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('homepagecanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "homepagecanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/unilever/unileverApp/src/pages/home/home.html"*/'<ion-content>\n  <div id="ionball"></div>\n\n  <img class="foto" *ngIf="state" [src]="userScreenshoot"/>\n  <div class="fish" id="fish">\n    <div id="fish2">\n      <img src="../../assets/imgs/pez2.png" />\n    </div>\n    <div id="fish1">\n      <img src="../../assets/imgs/pez1.png" />\n    </div>\n    <div id="fish3">\n      <img src="../../assets/imgs/pez3.png" />\n    </div>\n  </div>\n  <div class="fish2" id="fishRight">\n    <div id="fish5">\n      <img src="../../assets/imgs/pez5.png" />\n    </div>\n    <div id="fish6">\n      <img src="../../assets/imgs/pez6.png" />\n    </div>\n    <div id="fish4">\n      <img src="../../assets/imgs/pez4.png" />\n    </div>\n  </div>\n  <div id="bubbles">\n    <div class="bubble x1">\n      <img src="../../assets/imgs/burbuja1.png" alt="">\n    </div>\n    <div class="bubble x2">\n      <img src="../../assets/imgs/burbuja2.png" alt="">      \n    </div>\n    <div class="bubble x3">\n      <img src="../../assets/imgs/burbuja1.png" alt="">      \n    </div>\n    <div class="bubble x4">\n      <img src="../../assets/imgs/burbuja2.png" alt="">            \n    </div>\n    <div class="bubble x5">\n      <img src="../../assets/imgs/burbuja1.png" alt="">\n    </div>\n    <div class="bubble x6">\n      <img src="../../assets/imgs/burbuja2.png" alt="">            \n    </div>\n    <div class="bubble x7">\n      <img src="../../assets/imgs/burbuja1.png" alt="">\n    </div>\n    <div class="bubble x8">\n      <img src="../../assets/imgs/burbuja2.png" alt="">            \n    </div>\n    <div class="bubble x9">\n      <img src="../../assets/imgs/burbuja1.png" alt="">\n    </div>\n  </div>\n<!--   <ion-fab right top samll>\n    <button ion-fab color="light"><ion-icon name="switch"></ion-icon></button>\n  </ion-fab>\n\n  <ion-fab left top samll>\n    <button ion-fab color="light"><ion-icon name="exit"></ion-icon></button>\n  </ion-fab>\n\n  <ion-fab right bottom samll>\n    <button (click)="refresh()" ion-fab color="light"><ion-icon name="archive"></ion-icon></button>\n  </ion-fab> -->\n  <ion-fab bottom center samll>\n    <button ion-fab color="danger" *ngIf="buttonvisible" (click)="takePhoto()"></button>\n  </ion-fab>\n<!--   <ion-fab left top samll>\n      <button (click)="takeScreenshotGetUri()" *ngIf="!state" ion-fab color="light">URI</button>\n    </ion-fab> -->\n  <!-- <ion-fab left bottom samll>\n    <button (click)="subiryparticipar()" *ngIf="state" ion-fab color="light">SUBIR</button>\n  </ion-fab> -->\n<!--   <ion-fab right bottom samll>\n    <button (click)="descartar()" *ngIf="state" ion-fab color="light">DESCARTAR</button>\n  </ion-fab> -->\n  <!-- <ion-fab left bottom samll>\n    <button (click)="descargar()" *ngIf="state" ion-fab color="light">BAJAR</button>\n  </ion-fab> -->\n</ion-content>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/unilever/unileverApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_4__providers_managedata_managedata__["a" /* ManagedataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(255);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_first_first__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_second_second__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_screenshot__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_managedata_managedata__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_base64__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_base64_to_gallery__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_second_second__["a" /* SecondPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/second/second.module#SecondPageModule', name: 'SecondPage', segment: 'second', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_second_second__["a" /* SecondPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
                __WEBPACK_IMPORTED_MODULE_11__providers_managedata_managedata__["a" /* ManagedataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_first_first__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { SecondPage } from './../pages/second/second';




//import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_first_first__["a" /* FirstPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/unilever/unileverApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/unilever/unileverApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagedataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ManagedataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ManagedataProvider = /** @class */ (function () {
    function ManagedataProvider(http) {
        this.http = http;
        console.log('Hello ManagedataProvider Provider');
        this.userId = 0;
    }
    ManagedataProvider.prototype.setUserId = function (id) {
        this.userId = id;
    };
    ManagedataProvider.prototype.crearParticipante = function (nombre, apellido, idempleado) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ nombre: nombre, apellido: apellido, idempleado: idempleado });
        return this.http.post("http://ctrlztest.com.ar/unilever/api/crearparticipante.php", body, { headers: headers, withCredentials: true })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }));
        /* .subscribe(res => {
          console.log("violvio", res.json().status);
          return res.json().status;
        }, (err) => {
          console.log("chau");
       
          return "error";
        }); */
    };
    ManagedataProvider.prototype.subirImagen = function (image, idempleado) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ foto: image, idempleado: this.userId });
        return new Promise(function (resolve, reject) {
            _this.http.post("http://ctrlztest.com.ar/unilever/api/guardarfoto.php", body, { headers: headers, withCredentials: true })
                .subscribe(function (res) {
                console.log("violvio", res);
                resolve(res);
            }, function (err) {
                console.log("chau");
                //return "error";
            });
        });
    };
    ManagedataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ManagedataProvider);
    return ManagedataProvider;
}());

//# sourceMappingURL=managedata.js.map

/***/ })

},[247]);
//# sourceMappingURL=main.js.map