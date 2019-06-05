(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/advert/advertList.component.css":
/*!*********************************************!*\
  !*** ./app/advert/advertList.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body {\r\n    padding-top: 50px;\r\n    padding-bottom: 20px;\r\n    background-image: url('/images/site-background.jpg');\r\n    background-repeat: repeat;\r\n}*/\r\n\r\n.sbody-content {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.thumbnail img{\r\n    width: 20vw;\r\n    height: 20vw;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYWR2ZXJ0L2FkdmVydExpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLRTs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9hZHZlcnQvYWR2ZXJ0TGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvc2l0ZS1iYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxufSovXHJcblxyXG4uc2JvZHktY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsIGltZ3tcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./app/advert/advertList.component.html":
/*!**********************************************!*\
  !*** ./app/advert/advertList.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"text-center\">\r\n\r\n    <h4 class=\"display-4\">List of adverts</h4>\r\n\r\n    <div class=\"col-sm-1 col-lg-4 col-md-4\" *ngFor=\"let p of adverts\">\r\n        <div class=\"thumbnail\">\r\n            <img src=\"{{ p.imageUrl }}\" class=\"img-thumbnail\" [alt]=\"p.title\" />\r\n            <ng-template [ngIf]=\"p.reservingId == null\">\r\n                <span class=\"label label-success badge-pill\">Avaiable</span>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"p.reservingId != null\">\r\n                <span class=\"label label-danger badge-pill\">Reserved</span>\r\n            </ng-template>\r\n            <h4>{{ p.title }}</h4>\r\n            <h5><strong>Short Description</strong>: {{ p.shortDescription }}</h5>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./app/advert/advertList.component.ts":
/*!********************************************!*\
  !*** ./app/advert/advertList.component.ts ***!
  \********************************************/
/*! exports provided: AdvertList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertList", function() { return AdvertList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");



var AdvertList = /** @class */ (function () {
    function AdvertList(data) {
        this.data = data;
        this.adverts = [];
    }
    AdvertList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadAdrverts()
            .subscribe(function () { return _this.adverts = _this.data.adverts; });
    };
    AdvertList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "advert-list",
            template: __webpack_require__(/*! ./advertList.component.html */ "./app/advert/advertList.component.html"),
            styles: [__webpack_require__(/*! ./advertList.component.css */ "./app/advert/advertList.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AdvertList);
    return AdvertList;
}());



/***/ }),

/***/ "./app/advert/userAdverts/userAdverts.component.html":
/*!***********************************************************!*\
  !*** ./app/advert/userAdverts/userAdverts.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>My Adverts</h3>"

/***/ }),

/***/ "./app/advert/userAdverts/userAdverts.ts":
/*!***********************************************!*\
  !*** ./app/advert/userAdverts/userAdverts.ts ***!
  \***********************************************/
/*! exports provided: UserAdverts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdverts", function() { return UserAdverts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/dataService */ "./app/shared/dataService.ts");



var UserAdverts = /** @class */ (function () {
    function UserAdverts(data) {
        this.data = data;
    }
    UserAdverts = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "user-adverts",
            template: __webpack_require__(/*! ./userAdverts.component.html */ "./app/advert/userAdverts/userAdverts.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], UserAdverts);
    return UserAdverts;
}());



/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-menu>\r\n</app-nav-menu>\r\n<div class=\"row\">\r\n    <div>\r\n        <h3>{{ title }}</h3>\r\n        <advert-list></advert-list>\r\n    </div>\r\n    <!--<div class=\"col-md-3\">\r\n        <div class=\"card bg-light p-2\">\r\n            <user-adverts></user-adverts>\r\n        </div>\r\n    </div>-->\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Shelter2.0';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'the-shelter',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _advert_advertList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advert/advertList.component */ "./app/advert/advertList.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _advert_userAdverts_userAdverts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advert/userAdverts/userAdverts */ "./app/advert/userAdverts/userAdverts.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./app/nav-menu/nav-menu.component.ts");









//let routes = [
//    { path: "", component: Advert }
//];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _advert_advertList_component__WEBPACK_IMPORTED_MODULE_4__["AdvertList"],
                _advert_userAdverts_userAdverts__WEBPACK_IMPORTED_MODULE_7__["UserAdverts"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [
                _shared_dataService__WEBPACK_IMPORTED_MODULE_5__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/nav-menu/nav-menu.component.css":
/*!*********************************************!*\
  !*** ./app/nav-menu/nav-menu.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body {\r\n    padding-top: 50px;\r\n    padding-bottom: 20px;\r\n    background-image: url('/images/site-background.jpg');\r\n    background-repeat: repeat;\r\n}*/\r\n\r\n.sbody-content {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.thumbnail img{\r\n    width: 20vw;\r\n    height: 20vw;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLRTs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvc2l0ZS1iYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxufSovXHJcblxyXG4uc2JvZHktY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsIGltZ3tcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./app/nav-menu/nav-menu.component.html":
/*!**********************************************!*\
  !*** ./app/nav-menu/nav-menu.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  \r\n    <meta name=\"viewport\" content=\"width=device-width\" />\r\n    <link href=\"/lib/bootstrap/css/bootstrap.css\" rel=\"stylesheet\" />\r\n    <link href=\"/content/site.css\" rel=\"stylesheet\" />\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n</head>\r\n<body>\r\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-collapse collapse\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a href=\"/Advert/List\" class=\"navbar-brand\">Adverts</a></li>\r\n                    <li><a href=\"/Home/Privacy\" >Privacy</a></li>\r\n                 <!--   <partial name=\"_LoginPartial\" />-->\r\n                    <!--@*\r\n                    <li><a asp-controller=\"Feedback\" asp-action=\"Index\">Feedback</a></li>*@-->\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n\r\n    <!--<div class=\"container body-content\">\r\n        <div class=\"row\">\r\n            @RenderBody()\r\n        </div>\r\n    </div>\r\n    @RenderSection(\"Scripts\", required: false)-->\r\n</body>\r\n</html>"

/***/ }),

/***/ "./app/nav-menu/nav-menu.component.ts":
/*!********************************************!*\
  !*** ./app/nav-menu/nav-menu.component.ts ***!
  \********************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./app/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./app/shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/shared/dataService.ts ***!
  \***********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");

//import { HttpClient } from 'selenium-webdriver/http';



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.adverts = [];
    }
    DataService.prototype.loadAdrverts = function () {
        var _this = this;
        return this.http.get("https://localhost:44340/api/Adverts")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.adverts = data;
            return true;
        }));
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LeeGe\source\repos\Shelter2.0\Shelter2.0\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map