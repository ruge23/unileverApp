cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com-badrit-base64.Base64",
    "file": "plugins/com-badrit-base64/www/Base64.js",
    "pluginId": "com-badrit-base64",
    "clobbers": [
      "navigator.Base64"
    ]
  },
  {
    "id": "com.darktalker.cordova.screenshot.screenshot",
    "file": "plugins/com.darktalker.cordova.screenshot/www/Screenshot.js",
    "pluginId": "com.darktalker.cordova.screenshot",
    "merges": [
      "navigator.screenshot"
    ]
  },
  {
    "id": "cordova-base64-to-gallery.object.assign-polyfill",
    "file": "plugins/cordova-base64-to-gallery/www/object.assign-polyfill.js",
    "pluginId": "cordova-base64-to-gallery"
  },
  {
    "id": "cordova-base64-to-gallery.base64ToGallery",
    "file": "plugins/cordova-base64-to-gallery/www/base64ToGallery.js",
    "pluginId": "cordova-base64-to-gallery",
    "clobbers": [
      "cordova.base64ToGallery"
    ]
  },
  {
    "id": "cordova-plugin-camera-preview.CameraPreview",
    "file": "plugins/cordova-plugin-camera-preview/www/CameraPreview.js",
    "pluginId": "cordova-plugin-camera-preview",
    "clobbers": [
      "CameraPreview"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com-badrit-base64": "0.2.0",
  "com.darktalker.cordova.screenshot": "0.1.5",
  "cordova-base64-to-gallery": "4.1.3",
  "cordova-plugin-camera-preview": "0.10.0",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-plugin-ionic-webview": "2.2.0",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});