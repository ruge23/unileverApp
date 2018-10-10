webpackJsonp([2],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_managedata_managedata__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
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
            message: "\n        <p>Es muy sencillo.</p>\n        <p>Ten\u00E9s que apretar el bot\u00F3n \u201CEmpezar\u201D, tomarte una foto en familia con nuestro filtro \"Bajo el agua\" y \u00A1ya est\u00E1s participando!</p>\n        <p>\u00A1Las fotos m\u00E1s divertidas ganan!</p>\n        <p>Participas por uno de los pases para 4 personas para vivir una noche \u00FAnica en el acuario de Temaiken.</p>\n        <p>\u00BFEst\u00E1s Listo?</p>\n      ",
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
                    title: 'Ingresa tus datos para continuar',
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
                                if (data.nombre != "" || data.apellido != "" || data.id != "") {
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
            message: "\n        <p>Parece que hubo un error</p>\n        <p>Revisa tu conexi\u00F3n a intenet e intentalo nuevamente m\u00E1s tarde.</p>\n        <p>\u00A1Las fotos m\u00E1s divertidas ganan!</p>\n      ",
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
            selector: 'page-first',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/prueba/gitUnilever/unileverApp/src/pages/first/first.html"*/'<ion-content>\n  <div class="logo">\n    <img src="../../assets/imgs/img/logo-uni-final.png">\n  </div>\n  <div class="botones-index">\n    <a href="#" (click)="showAlert()" class="btn btn-como">¿Como participar?</a>\n    <a href="#" (click)="showAlertEmpezar()" class="btn btn-empezar">¡Empezar!</a>    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/prueba/gitUnilever/unileverApp/src/pages/first/first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_managedata_managedata__["a" /* ManagedataProvider */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_base64__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_managedata_managedata__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screenshot__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecondPage = /** @class */ (function () {
    function SecondPage(navCtrl, navParams, screenshot, base64, base64ToGallery, alertCtrl, mdprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.base64 = base64;
        this.base64ToGallery = base64ToGallery;
        this.alertCtrl = alertCtrl;
        this.mdprovider = mdprovider;
        this.state = false;
        this.showUI = true;
        this.fotoroja = navParams.data;
    }
    SecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MixPage');
    };
    SecondPage.prototype.takeScreenshot = function () {
        var _this = this;
        console.log("take");
        this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(function (res) {
            _this.screen = res.filePath;
            _this.imageText = _this.convertToBase64(res.filePath);
            _this.state = true;
        });
    };
    SecondPage.prototype.subiryparticipar = function () {
        var _this = this;
        this.showUI = false;
        this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(function (res) {
            //this.screen = res.filePath;
            //this.imageText = this.convertToBase64(res.filePath);
            _this.base64.encodeFile(res.filePath).then(function (base64File) {
                console.log(base64File);
                _this.mdprovider.subirImagen(base64File, 1).then(function (res) {
                    if (res['status'] === 200) {
                        _this.showAlertConfirm();
                    }
                    else if (res['status'] === 400) {
                        _this.showAlertError();
                    }
                });
                _this.state = true;
            }, function (err) {
                _this.showAlertError();
                console.log(err);
            });
        });
        //subir
        /*  this.storage.get('_idempleado_').then((val) => {
           this.mdprovider.saveImage(this.imageText,val);
         }); */
        //navegar a la siguiente pagina o al popup que te dice que ya estas adentro
    };
    SecondPage.prototype.descargar = function () {
        /* this.base64ToGallery.base64ToGallery(this.imageText).then(
          res => console.log('Saved image to gallery ', res),
          err => console.log('Error saving image to gallery ', err)
        ); */
        this.takeScreenshot();
    };
    SecondPage.prototype.descartar = function () {
        this.showUI = true;
        this.navCtrl.pop();
    };
    SecondPage.prototype.convertToBase64 = function (imagePath) {
        var filePath = imagePath;
        this.base64.encodeFile(filePath).then(function (base64File) {
            console.log(base64File);
            return base64File;
        }, function (err) {
            console.log(err);
        });
    };
    SecondPage.prototype.showAlertConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¡Ya estas participando!',
            cssClass: 'custom-alert',
            message: "\n      <p>Muchas gracias por tu buena onda.</p>\n      <p>La selecci\u00F3n de los ganadores se realizar\u00E1 el d\u00EDa XX de noviembre.</p>\n      <p>\u00A1Estate atento!</p>\n    ",
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
            message: "\n      <p>Parece que hubo un error</p>\n      <p>Revisa tu conexi\u00F3n a intenet e intentalo nuevamente m\u00E1s tarde.</p>\n      <p>\u00A1Las fotos m\u00E1s divertidas ganan!</p>\n    ",
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
    SecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-second',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/prueba/gitUnilever/unileverApp/src/pages/second/second.html"*/'<ion-content>\n  <img id="sour" src="{{fotoroja}}" alt="">\n <div id="ionball"></div>\n <!-- <ion-fab bottom center>\n   <button (click)="subiryparticipar()" ion-fab color="secondary">Participar con esta foto</button>\n </ion-fab>\n <ion-fab bottom center>\n   <button (click)="descartar()" ion-fab color="primary">Descartar Foto</button>\n </ion-fab>\n <ion-fab bottom center>\n   <button (click)="descargar()" ion-fab color="danger">Guardar Foto</button>\n </ion-fab> -->\n <div class="botones-opcion-foto">\n   <button ion-button color="participar" *ngIf="showUI" (click)="subiryparticipar()">Participar con esta Foto</button>\n   <button ion-button color="guardar" *ngIf="showUI" (click)="takeScreenshot()">Guardar Foto</button>\n   <button ion-button color="descartar" *ngIf="showUI" (click)="descartar()">Descartar Foto</button>  \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/prueba/gitUnilever/unileverApp/src/pages/second/second.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_managedata_managedata__["a" /* ManagedataProvider */]])
    ], SecondPage);
    return SecondPage;
}());

//# sourceMappingURL=second.js.map

/***/ }),

/***/ 141:
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
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/first/first.module": [
		407,
		1
	],
	"../pages/second/second.module": [
		408,
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
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second_second__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64_to_gallery__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_managedata_managedata__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(207);
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









var HomePage = /** @class */ (function () {
    function HomePage(platform, navCtrl, cameraPreview, screenshot, base64, base64ToGallery, mdprovider, storage) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.cameraPreview = cameraPreview;
        this.screenshot = screenshot;
        this.base64 = base64;
        this.base64ToGallery = base64ToGallery;
        this.mdprovider = mdprovider;
        this.storage = storage;
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__second_second__["a" /* SecondPage */], _this.picture);
        }, function (err) {
            _this.picture = 'assets/img/test.jpg';
        });
    };
    HomePage.prototype.refresh = function () {
        window['location'].reload();
    };
    HomePage.prototype.takeScreenshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.buttonvisible = false;
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.screenshot.save('jpg', 80, 'tuvieja.jpg')];
                    case 2:
                        res = _a.sent();
                        console.log(res);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.takeScreenshotGetUri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.screenshot.URI(80)];
                    case 2:
                        res = _a.sent();
                        this.userScreenshoot = res.URI;
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.convertToBase64 = function (imagePath) {
        var filePath = imagePath;
        this.base64.encodeFile(filePath).then(function (base64File) {
            console.log(base64File);
            return base64File;
        }, function (err) {
            console.log(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/prueba/gitUnilever/unileverApp/src/pages/home/home.html"*/'<ion-content>\n  <div id="ionball"></div>\n  <img *ngIf="state" [src]="userScreenshoot"/>\n\n<!--   <ion-fab right top samll>\n    <button ion-fab color="light"><ion-icon name="switch"></ion-icon></button>\n  </ion-fab>\n\n  <ion-fab left top samll>\n    <button ion-fab color="light"><ion-icon name="exit"></ion-icon></button>\n  </ion-fab>\n\n  <ion-fab right bottom samll>\n    <button (click)="refresh()" ion-fab color="light"><ion-icon name="archive"></ion-icon></button>\n  </ion-fab> -->\n  <ion-fab bottom center samll>\n    <button ion-fab color="danger" *ngIf="buttonvisible" (click)="takePhoto()"></button>\n  </ion-fab>\n<!--   <ion-fab left top samll>\n      <button (click)="takeScreenshotGetUri()" *ngIf="!state" ion-fab color="light">URI</button>\n    </ion-fab> -->\n  <!-- <ion-fab left bottom samll>\n    <button (click)="subiryparticipar()" *ngIf="state" ion-fab color="light">SUBIR</button>\n  </ion-fab> -->\n<!--   <ion-fab right bottom samll>\n    <button (click)="descartar()" *ngIf="state" ion-fab color="light">DESCARTAR</button>\n  </ion-fab> -->\n  <!-- <ion-fab left bottom samll>\n    <button (click)="descargar()" *ngIf="state" ion-fab color="light">BAJAR</button>\n  </ion-fab> -->\n</ion-content>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/prueba/gitUnilever/unileverApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
            __WEBPACK_IMPORTED_MODULE_7__providers_managedata_managedata__["a" /* ManagedataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_first_first__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_second_second__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_screenshot__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_managedata_managedata__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_base64__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_base64_to_gallery__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(186);
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
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/second/second.module#SecondPageModule', name: 'SecondPage', segment: 'second', priority: 'low', defaultHistory: [] }
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

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_first_first__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/prueba/gitUnilever/unileverApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/prueba/gitUnilever/unileverApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(280);
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

},[250]);
//# sourceMappingURL=main.js.map