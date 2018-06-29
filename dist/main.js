(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    // users: User[] = [
    // 	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
    // 	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
    // 	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
    // 	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
    // 	];
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x]._id === userId) {  
        //     return this.users[x]; 
        //   }
        // }
    };
    UserService.prototype.findUserByUsername = function (userName) {
        var url = this.baseUrl + '/api/user?userName=' + userName;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    UserService.prototype.findUserByCredentials = function (userName, password) {
        var url = this.baseUrl + '/api/user?userName=' + userName + '&password=' + password;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            console.log(response.json());
            return response.json();
        }));
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
        // var oldUser = this.findUserById(userId);
        // var index = this.users.indexOf(oldUser);
        // this.users[index].username = user.username;
        // this.users[index].password = user.password;
        // this.users[index].firstName = user.firstName;
        // this.users[index].lastName = user.lastName;
        // this.users[index].email = user.email;
    };
    UserService.prototype.deleteUser = function (userId) {
        //   var oldUser = this.findUserById(userId);
        //   var index = this.users.indexOf(oldUser);
        //   this.users.splice(index, 1);
        // }
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- LSE upper header -->\n<div class=\" justify-content-center row container-fluid upper-header bg-white\">\n    <div class=\"col-2\">\n        <img class=\"logoPadding\" width=\"100%\" alt=\"Angular Logo\" src=\"../images/LSE LOGO2.jpg\">  \n    </div>\n    <div class=\"col-6 text-muted text-right\"> <h2><i>\"A resource for arts that inspire community!\"</i></h2>\n    </div>\n    <div class=\"nav-text col-2 sw-noPadding bg-secondary btn-block\">\n        <button class= \"btn btn-secondary btn-block\" data-toggle=\"collapse\" data-target=\"#login\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Login</button>\n    </div>  \n    <div class=\"col-2 sw-noPadding bg-success btn-block\">\n        <button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\n    </div>\n</div>\n\n<div class=\"row bg-white container-fluid\">\n    <div class=\"col-4\"></div>\n    <div class=\"col-4\"></div>\n    <div class=\"col-4 align-content-center bg-light\">\n        <!-- LSE lower header -->\n        <div class=\"justify-content-center row nav-text\">\n            <ul class=\"nav nav-pills \">\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"  aria-haspopup=\"true\" aria-expanded=\"false\">COMMUNITY</a>\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item\" routerLink=\"/community/vlog\">Vlog</a>\n                        <a class=\"dropdown-item\" routerLink=\"/community/bulletin\">Word-of-Mouth</a>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"nav nav-pills\">                       \n                <li class=\"nav-item dropdown\">\n                  <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">ART</a>\n                  <div class=\"dropdown-menu\">\n                      <a class=\"dropdown-item\" routerLink=\"/art/events\">Events</a>\n                      <a class=\"dropdown-item\" routerLink=\"/art/shopping\">Shop</a>\n                  </div>\n              </li>\n            </ul>\n            <ul class=\"nav nav-pills\">  \n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">RESOURCE</a>\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item\" routerLink=\"/resource/calendar\">Calendar</a>\n                        <a class=\"dropdown-item\" routerLink=\"/resource/services\">Services</a>\n                    </div>\n                </li>\n            </ul>\n        </div>  \n    </div>\n    <hr>\n</div>\n<br>\n<router-outlet></router-outlet>\n\n<!-- \n      \n    ~~~~~~~~~~~~~~ -->\n    <!-- Footer Nav Bar -->     \n    <!-- ~~~~~~~~~~~~~~ -->\n    <div class=\"align-content-center container\">\n\n\n        <!-- CSS Code: Place this code in the document's head (between the 'head' tags) -->\n        <style>\n        table.GeneratedTable {\n          width: 100%;\n          background-color: transparent;\n          border-collapse: collapse;\n          border-width: 2px;\n          border-color: transparent;\n          border-style: solid;\n          color: #000000;\n      }\n\n      table.GeneratedTable td, table.GeneratedTable th {\n          border-width: 2px;\n          border-color: transparent;\n          border-style: none;\n          padding: 3px;\n      }\n\n      table.GeneratedTable thead {\n          background-color: transparent;\n      }\n  </style>\n\n\n\n\n  <nav id=\"bottom\" class=\"navbar navbar-dark bg-success fixed-bottom\" >\n\n\n    <!-- HTML Code: Place this code in the document's body (between the 'body' tags) where the table should appear -->\n    <table class=\"GeneratedTable\">\n      <thead>\n        <tr>\n           <th>\n\n\n            <div class=\"btn-group dropup\">\n              <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                TEMP SITE LEGEND\n            </button>\n            <div class=\"dropdown-menu\">\n                <a routerLink=\"/''\">1. Home</a><br>\n                <a routerLink=\"/login\">2. Login</a><br>\n                <a routerLink=\"/register\">3. Register</a><br>\n                <a routerLink=\"/profile\">4. Profile</a><br>\n                <a routerLink=\"/community/vlog\">5. VlogLyfe</a><br>\n                <a routerLink=\"/community/vloggerpages\">6. VloggerPage</a><br>\n                <a routerLink=\"/user/:uid/:vid/community/myvlog\">7. Post Vlog</a><br>\n                <a routerLink=\"/community/bulletin\">8. WordOfMouth</a><br>\n                <a routerLink=\"/user/:uid/:bid/community/bulletin/post\">9. ShoutOut</a><br>\n                <a routerLink=\"/art/events\">10. Events</a><br>\n                <a routerLink=\"/art/shopping\">11. Shop</a><br>\n                <a routerLink=\"/user/:cid/art/shopping\">12. Shopping cart</a><br>\n                <a routerLink=\"/resource/calendar\">13. Calendar</a><br>\n                <a routerLink=\"/user/:uid/resource/calendarpost\">14. Calendar Post</a><br>\n                <a routerLink=\"/resource/services\">15. Services</a><br>\n                <a routerLink=\"/user/:uid/:vid/community/myvlog/preview\">16. Bid Request</a><br>\n                <a routerLink=\"/user/:cid/art/billconfirm\">17. LogOut</a><br>\n                <a routerLink=\"/user/:cid/art/checkout\">18. About Us</a><br>\n            </div>\n        </div>\n\n\n\n\n\n\n\n\n\n    </th>\n\n\n\n\n\n    <th><a routerLink=\"/home\"><i class=\"fab fa-houzz\"></i></a></th>\n    <th><a routerLink=\"/login\"><i class=\"fas fa-key\"></i></a></th>\n    <th><a routerLink=\"/register\"><i class=\"fas fa-clipboard-list\"></i></a></th>\n    <th><a routerLink=\"/profile\"><i class=\"fas fa-user-circle\"></i></a></th>\n    <th><a routerLink=\"/community/vlog\"><i class=\"fas fa-video\"></i></a></th>\n    <th><a routerLink=\"/community/bulletin\"><i class=\"far fa-comment-dots\"></i></a></th>\n    <th><a routerLink=\"/art/events\"><i class=\"fas fa-bolt\"></i></a></th>\n    <th><a routerLink=\"/art/shopping\"><i class=\"fas fa-store-alt\"></i></a></th>\n    <th><a routerLink=\"/resource/calendar\"><i class=\"far fa-calendar-alt\"></i></a></th>\n    <th><a routerLink=\"/resource/services\"><i class=\"fas fa-hand-holding-heart\"></i></a></th>\n    <th><a routerLink=\"/user/:cid/art/checkout\"><i class=\"fas fa-at\"></i></a></th>\n    <th><a routerLink=\"/user/:cid/art/shopping\"><i class=\"fas fa-shopping-cart\"></i></a></th>\n    <th><a routerLink=\"/user/:cid/art/billconfirm\"><i class=\"fas fa-sign-out-alt\"></i></a></th>\n</tr>\n</thead>\n\n</table>\n<!-- Codes by Quackit.com -->\n\n<div align=\"align-content-center\" class=\"container\">\n\n\n<!-- \n<table class=\"GeneratedTable\">\n  <thead>\n    <tr><th><a routerLink=\"/''\"></i>1. Home</a></th>\n    <tr><th><a routerLink=\"/login\"></i>2. Login</a></th>\n    <tr><th><a routerLink=\"/register\"></i>3. Register</a></th>\n    <tr><th><a routerLink=\"/profile\"></i>4. Profile</a></th>\n    <tr><th><a routerLink=\"/community/vlog\"></i>5. VlogLyfe</a></th>\n    <tr><th><a routerLink=\"/community/vloggerpages\"></i>6.</a>VloggerPage</th>\n    <tr><th><a routerLink=\"/user/:uid/:vid/community/myvlog\"></i>7.</a>Post Vlog</th>\n    <tr><th><a routerLink=\"/community/bulletin\"></i>8.</a>WordOfMouth</th>\n    <tr><th><a routerLink=\"/user/:uid/:bid/community/bulletin/post\"></i>9.</a>ShoutOut</th>\n    <tr><th><a routerLink=\"/art/events\"></i>10</a>Events</th>\n    <tr><th><a routerLink=\"/art/shopping\"></i>11</a>Shop</th>\n    <tr><th><a routerLink=\"/user/:cid/art/shopping\"></i>12</a>Shopping cart</th>\n    <tr><th><a routerLink=\"/resource/calendar\"></i>13</a>Calendar</th>\n    <tr><th><a routerLink=\"/user/:uid/resource/calendarpost\"></i>14</a>Calendar Post</th>\n    <tr><th><a routerLink=\"/resource/services\"></i>15</a>Services</th>\n    <tr><th><a routerLink=\"/user/:uid/:vid/community/myvlog/preview\"></i>16</a>Bid Request</th>\n    <tr><th><a routerLink=\"/user/:cid/art/billconfirm\"></i>17</a>LogOut</th>\n    <tr><th><a routerLink=\"/user/:cid/art/checkout\"></i>18</a>About Us</th>\n  \n\n  </thead>\n\n</table> -->\n\n\n\n\n<!-- home          { path : '', component : LoginComponent},             \nlogin         { path : 'login', component : LoginComponent},\nregister          { path : 'register', component: RegisterComponent},\nprofile          { path : 'profile' , component: ProfileComponent},\nvloglyfe          { path : 'community/vlog' , component: VlogComponent},\nvlogger          { path : 'community/vloggerpages' , component: VloggerpagesComponent},\nwordofmouth          { path : 'community/bulletin' , component: BulletinComponent},\npostvloglyfe         { path : 'user/:uid/:vid/community/myvlog' , component: MyvlogComponent},\nbid request          { path : 'user/:uid/:vid/community/myvlog/preview' , component: MyvlogpreviewComponent},\nShoutout          { path : 'user/:uid/:bid/community/bulletin/post' , component: PostbulletinComponent},\nevents          { path : 'art/events' , component: EventsComponent},\nshopping          { path : 'art/shopping' , component: ShoppingComponent},\nshopping cart          { path : 'user/:cid/art/shopping' , component: ShoppingcartComponent},\nabout          { path : 'user/:cid/art/checkout' , component: CheckoutComponent},\nsignout?          { path : 'user/:cid/art/billconfirm' , component: BillconfirmComponent},\ncalendar          { path : 'resource/calendar' , component: CalendarComponent},\nservices          { path : 'resource/services' , component: ServicesComponent},\npostcalendar          { path : 'user/:uid/resource/calendarpost' , component: CalendarpostComponent}\n\n-->\n\n</div>\n\n</nav>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_art_events_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/art/events/events.component */ "./src/app/components/art/events/events.component.ts");
/* harmony import */ var _components_art_shopping_billconfirm_billconfirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/art/shopping/billconfirm/billconfirm.component */ "./src/app/components/art/shopping/billconfirm/billconfirm.component.ts");
/* harmony import */ var _components_art_shopping_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/art/shopping/checkout/checkout.component */ "./src/app/components/art/shopping/checkout/checkout.component.ts");
/* harmony import */ var _components_art_shopping_shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/art/shopping/shoppingcart/shoppingcart.component */ "./src/app/components/art/shopping/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var _components_art_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/art/shopping/shopping.component */ "./src/app/components/art/shopping/shopping.component.ts");
/* harmony import */ var _components_community_bulletin_bulletin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/community/bulletin/bulletin.component */ "./src/app/components/community/bulletin/bulletin.component.ts");
/* harmony import */ var _components_community_vlog_vlog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/community/vlog/vlog.component */ "./src/app/components/community/vlog/vlog.component.ts");
/* harmony import */ var _components_community_bulletin_postbulletin_postbulletin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/community/bulletin/postbulletin/postbulletin.component */ "./src/app/components/community/bulletin/postbulletin/postbulletin.component.ts");
/* harmony import */ var _components_community_vlog_myvlog_myvlog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/community/vlog/myvlog/myvlog.component */ "./src/app/components/community/vlog/myvlog/myvlog.component.ts");
/* harmony import */ var _components_community_vlog_myvlogpreview_myvlogpreview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/community/vlog/myvlogpreview/myvlogpreview.component */ "./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.ts");
/* harmony import */ var _components_resource_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/resource/calendar/calendar.component */ "./src/app/components/resource/calendar/calendar.component.ts");
/* harmony import */ var _components_resource_calendar_calendarpost_calendarpost_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/resource/calendar/calendarpost/calendarpost.component */ "./src/app/components/resource/calendar/calendarpost/calendarpost.component.ts");
/* harmony import */ var _components_resource_services_services_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/resource/services/services.component */ "./src/app/components/resource/services/services.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_community_vlog_vloggerpages_vloggerpages_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/community/vlog/vloggerpages/vloggerpages.component */ "./src/app/components/community/vlog/vloggerpages/vloggerpages.component.ts");
/* harmony import */ var _Services_user_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Services/user.service.client */ "./src/app/Services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_art_events_events_component__WEBPACK_IMPORTED_MODULE_5__["EventsComponent"],
                _components_art_shopping_billconfirm_billconfirm_component__WEBPACK_IMPORTED_MODULE_6__["BillconfirmComponent"],
                _components_art_shopping_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutComponent"],
                _components_art_shopping_shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingcartComponent"],
                _components_art_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingComponent"],
                _components_community_bulletin_bulletin_component__WEBPACK_IMPORTED_MODULE_10__["BulletinComponent"],
                _components_community_vlog_vlog_component__WEBPACK_IMPORTED_MODULE_11__["VlogComponent"],
                _components_community_bulletin_postbulletin_postbulletin_component__WEBPACK_IMPORTED_MODULE_12__["PostbulletinComponent"],
                _components_community_vlog_myvlog_myvlog_component__WEBPACK_IMPORTED_MODULE_13__["MyvlogComponent"],
                _components_community_vlog_myvlogpreview_myvlogpreview_component__WEBPACK_IMPORTED_MODULE_14__["MyvlogpreviewComponent"],
                _components_resource_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__["CalendarComponent"],
                _components_resource_calendar_calendarpost_calendarpost_component__WEBPACK_IMPORTED_MODULE_16__["CalendarpostComponent"],
                _components_resource_services_services_component__WEBPACK_IMPORTED_MODULE_17__["ServicesComponent"],
                _components_components_component__WEBPACK_IMPORTED_MODULE_18__["ComponentsComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _components_community_vlog_vloggerpages_vloggerpages_component__WEBPACK_IMPORTED_MODULE_24__["VloggerpagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_23__["Routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_Services_user_service_client__WEBPACK_IMPORTED_MODULE_25__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_art_events_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/art/events/events.component */ "./src/app/components/art/events/events.component.ts");
/* harmony import */ var _components_art_shopping_billconfirm_billconfirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/art/shopping/billconfirm/billconfirm.component */ "./src/app/components/art/shopping/billconfirm/billconfirm.component.ts");
/* harmony import */ var _components_art_shopping_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/art/shopping/checkout/checkout.component */ "./src/app/components/art/shopping/checkout/checkout.component.ts");
/* harmony import */ var _components_art_shopping_shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/art/shopping/shoppingcart/shoppingcart.component */ "./src/app/components/art/shopping/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var _components_art_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/art/shopping/shopping.component */ "./src/app/components/art/shopping/shopping.component.ts");
/* harmony import */ var _components_community_bulletin_bulletin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/community/bulletin/bulletin.component */ "./src/app/components/community/bulletin/bulletin.component.ts");
/* harmony import */ var _components_community_vlog_vlog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/community/vlog/vlog.component */ "./src/app/components/community/vlog/vlog.component.ts");
/* harmony import */ var _components_community_bulletin_postbulletin_postbulletin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/community/bulletin/postbulletin/postbulletin.component */ "./src/app/components/community/bulletin/postbulletin/postbulletin.component.ts");
/* harmony import */ var _components_community_vlog_myvlog_myvlog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/community/vlog/myvlog/myvlog.component */ "./src/app/components/community/vlog/myvlog/myvlog.component.ts");
/* harmony import */ var _components_community_vlog_myvlogpreview_myvlogpreview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/community/vlog/myvlogpreview/myvlogpreview.component */ "./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.ts");
/* harmony import */ var _components_resource_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/resource/calendar/calendar.component */ "./src/app/components/resource/calendar/calendar.component.ts");
/* harmony import */ var _components_resource_calendar_calendarpost_calendarpost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/resource/calendar/calendarpost/calendarpost.component */ "./src/app/components/resource/calendar/calendarpost/calendarpost.component.ts");
/* harmony import */ var _components_resource_services_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/resource/services/services.component */ "./src/app/components/resource/services/services.component.ts");
/* harmony import */ var _components_community_vlog_vloggerpages_vloggerpages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/community/vlog/vloggerpages/vloggerpages.component */ "./src/app/components/community/vlog/vloggerpages/vloggerpages.component.ts");


















// Import all other components here 
var APP_ROUTES = [
    { path: '', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'community/vlog', component: _components_community_vlog_vlog_component__WEBPACK_IMPORTED_MODULE_10__["VlogComponent"] },
    { path: 'community/vloggerpages', component: _components_community_vlog_vloggerpages_vloggerpages_component__WEBPACK_IMPORTED_MODULE_17__["VloggerpagesComponent"] },
    { path: 'community/bulletin', component: _components_community_bulletin_bulletin_component__WEBPACK_IMPORTED_MODULE_9__["BulletinComponent"] },
    { path: 'user/:uid/community/myvlog', component: _components_community_vlog_myvlog_myvlog_component__WEBPACK_IMPORTED_MODULE_12__["MyvlogComponent"] },
    { path: 'user/:uid/:vid/community/myvlog/preview', component: _components_community_vlog_myvlogpreview_myvlogpreview_component__WEBPACK_IMPORTED_MODULE_13__["MyvlogpreviewComponent"] },
    { path: 'user/:uid/:bid/community/bulletin/post', component: _components_community_bulletin_postbulletin_postbulletin_component__WEBPACK_IMPORTED_MODULE_11__["PostbulletinComponent"] },
    { path: 'art/events', component: _components_art_events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"] },
    { path: 'art/shopping', component: _components_art_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingComponent"] },
    { path: 'user/:cid/art/shopping', component: _components_art_shopping_shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingcartComponent"] },
    { path: 'user/:cid/art/checkout', component: _components_art_shopping_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"] },
    { path: 'user/:cid/art/billconfirm', component: _components_art_shopping_billconfirm_billconfirm_component__WEBPACK_IMPORTED_MODULE_5__["BillconfirmComponent"] },
    { path: 'resource/calendar', component: _components_resource_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__["CalendarComponent"] },
    { path: 'resource/services', component: _components_resource_services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"] },
    { path: 'user/:uid/resource/calendarpost', component: _components_resource_calendar_calendarpost_calendarpost_component__WEBPACK_IMPORTED_MODULE_15__["CalendarpostComponent"] }
];
// Export the routes as module providers
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/art/events/events.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/art/events/events.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/art/events/events.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/art/events/events.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><div align=\"center\" class=\"container\">\t\t\n\t<div class=\"card text-center\">\n\t    <div class=\"card-header\">\n  <h1 class=\"display-4\">EVENTS</h1>\n\n</div>\n\t\t<div class=\"card-body\">\n\t\t    <div class=\"row\">\n\t\t\t\t\n\n\t\t\t\t<div style=\"color:white; height: 100px\" class=\"btn btn-dark col-4\"data-toggle=\"collapse\" data-target=\"#Bay\" aria-expanded=\"false\" aria-controls=\"Bay\">\n\t\t\t\t\t<h3>BAY</h3>\n\n\t\t\t\t\t\t\n\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t    \t<img class=\"d-block w-100\"   height=\"100\" src=\"../../../images/LSE1.jpg\" alt=\"First slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t    <img class=\"d-block w-100\" height=\"100\" src=\"../../../images/LSE3.jpg\" alt=\"Second slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t    <img class=\"d-block w-100\"  height=\"100\" src=\"../../../images/LSE.jpg\" alt=\"Third slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> \n\n\t\t\t\n\t\t\t\t\t\t<div class=\"collapse\" id=\"Bay\"><p></p><hr><p></p>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n\t\t\t\t\t\t  </div>\n\t\t<br>\n\t\t    <div class=\"row\">\n\t\t\t\t<div style=\"color:white; height: 100px\" class=\"btn btn-dark col-4\"data-toggle=\"collapse\" data-target=\"#Repair\" aria-expanded=\"false\" aria-controls=\"Repair\"> \n\t\t\t\t\t<h3>REPAIR</h3>\t\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t    \t<img class=\"d-block w-100\"   height=\"100\" src=\"../../../images/LSE1.jpg\" alt=\"First slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t    <img class=\"d-block w-100\" height=\"100\" src=\"../../../images/LSE3.jpg\" alt=\"Second slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t    <img class=\"d-block w-100\"  height=\"100\" src=\"../../../images/LSE.jpg\" alt=\"Third slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> \n\n\n\t\t\t\t\t\t<div class=\"collapse\" id=\"Repair\"><p></p><hr><p></p>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n\t\t\t\t\t\t  </div>\n\n\n\n\t\t<br>\n\t\t    <div class=\"row\">\n\t\t\t\t<div style=\"color:white; height: 100px\" class=\"btn btn-dark col-4\"data-toggle=\"collapse\" data-target=\"#Streetlight\" aria-expanded=\"false\" aria-controls=\"Streetlight\"> \n\t\t\t\t\t<h3>STREETLIGHT</h3>\t\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t    \t<img class=\"d-block w-100\"   height=\"100\" src=\"../../../images/LSE1.jpg\" alt=\"First slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t    <img class=\"d-block w-100\" height=\"100\" src=\"../../../images/LSE3.jpg\" alt=\"Second slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t    <img class=\"d-block w-100\"  height=\"100\" src=\"../../../images/LSE.jpg\" alt=\"Third slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> \n\n\n\t\t\t\t\t\t<div class=\"collapse\" id=\"Streetlight\"><p></p><hr><p></p>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n\t\t\t\t\t\t  </div>\n\n\n\n\n\t\t<br>\n\t\t    <div class=\"row\">\n\t\t\t\t<div style=\"color:white; height: 100px\" class=\"btn btn-dark col-4\"data-toggle=\"collapse\" data-target=\"#n2y\" aria-expanded=\"false\" aria-controls=\"n2y\"> \n\t\t\t\t\t<h3>N2Y</h3>\t\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t    \t<img class=\"d-block w-100\"   height=\"100\" src=\"../../../images/LSE1.jpg\" alt=\"First slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t    <img class=\"d-block w-100\" height=\"100\" src=\"../../../images/LSE3.jpg\" alt=\"Second slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t    <img class=\"d-block w-100\"  height=\"100\" src=\"../../../images/LSE.jpg\" alt=\"Third slide\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> \n\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class=\"collapse\" id=\"n2y\"><p></p><hr><p></p>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n\n\t\t\t\t\t\t  </div>\n\n\t\t\n\n\t\t<div class=\"card-footer text-muted\">Please <a routerLink=\"/user/:uid/:vid/community/myvlog/preview\">contact us</a> for event planning services</div>\n\t</div>\n\t<br>\n\t<br>\n\t<div class=\"card text-center\">\n  \t\t<div class=\"card-header\">\n    \t\t<b></b>\n  \t\t</div>\n  \t\t<div class=\"btn-dark card-body\">\n    \t\t<h5 class=\"card-title\"><h1 class=\"display-4\">Post Your Event!</h1></h5>\n    \t\t<p class=\"card-text\">Promote your next event in our LSE Calendar.</p>\n    \t\t<a routerLink=\"/user/:uid/resource/calendarpost\" class=\"btn btn-primary\">Post Event!</a>\n  \t\t</div>\n  \t\t<div class=\"card-footer text-muted\">Post to LSE Calendar!</div>\n\t</div>\n\t\n\t\t<br><br>\n\n\n\n\n\n\n<div class=\"container-fluid\">\n<div class=\"row\">\n\n\t<!-- Left Column -->\n\t<div class=\"col-6\">\n\t\t\t<!-- Twitter Feed (left) -->\n            <a class=\"twitter-timeline\"  \n            href=\"https://twitter.com/LoveLightSpeed\" \n            data-widget-id=\"432145954137853953\">\n        \tTweets by @LoveLightSpeed\n        \t</a>\n\t\t   \n\t</div>\n\t\t<!-- Right Column -->\n\t\t<div class=\"col-6\">\t<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/yzm4kngknD/\" data-instgrm-version=\"8\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:8px;\"> <div style=\" background:#F8F8F8; line-height:0; margin-top:40px; padding:50% 0; text-align:center; width:100%;\"> <div style=\" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;\"></div></div> <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/yzm4kngknD/\" style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\" target=\"_blank\">Black All Year April 12, 2015 Buy tickets while you can! www.blackallyear.com</a></p> <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A post shared by <a href=\"https://www.instagram.com/lovelightspeed/\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\" target=\"_blank\"> LightSpeed Entertainment</a> (@lovelightspeed) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\" datetime=\"2015-02-07T16:17:46+00:00\">Feb 7, 2015 at 8:17am PST</time></p></div></blockquote>\t\n</div>\n\n\t\n\n</div></div></div>\n\t\n\n<div id=\"pixlee_container\"></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t<br>\n\t\t<div class=\"nav btn-light \">\n  \t\t<div class=\"text-center container-fluid card-header\">\n    \t\t <h1 class=\"display-4\">FACEBOOK GROUPS</h1>\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n    \t<div class=\"row\">\n<div class=\"col-3\">\n\n<table border=\"0\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;\"><tr style=\"\"><td height=\"28\" style=\"line-height:28px;\">&nbsp;</td></tr><tr><td style=\"\"><table border=\"0\" width=\"280\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:separate;background-color:#ffffff;border:1px solid #dddfe2;border-radius:3px;font-family:Helvetica, Arial, sans-serif;margin:0px auto;\"><tr style=\"padding-bottom: 8px;\"><td style=\"\"><img class=\"img\" src=\"https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-0/c0.0.720.375/s600x600/10394013_10152433039787167_6199754201055431945_n.jpg?_nc_cat=0&amp;oh=d82acb76c24bf902ef07b59ed0b43d63&amp;oe=5BB9BD93\" width=\"280\" height=\"146\" alt=\"\" /></td></tr><tr><td style=\"font-size:14px;font-weight:bold;padding:8px 8px 0px 8px;text-align:center;\">Truth First! | Proper-Ganda</td></tr><tr><td style=\"color:#90949c;font-size:12px;font-weight:normal;text-align:center;\">Facebook Group · 50 members</td></tr><tr><td style=\"padding:8px 12px 12px 12px;\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;width:100%;\"><tr><td style=\"background-color:#4267b2;border-radius:3px;text-align:center;\"><a style=\"color:#3b5998;text-decoration:none;cursor:pointer;width:100%;\" href=\"https://www.facebook.com/plugins/group/join/popup/?group_id=347048458800656&amp;source=email_campaign_plugin\" target=\"_blank\" rel=\"noopener\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"3\" align=\"center\" style=\"border-collapse:collapse;\"><tr><td style=\"border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;\"><img width=\"16\" src=\"https://facebook.com/images/groups/plugin/email/app_fb_32_fig_white.png\" /></td><td style=\"border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;color:#FFF;font-family:Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;\">Join Group</td></tr></table></a></td></tr></table></td></tr><tr><td style=\"border-top:1px solid #dddfe2;font-size:12px;padding:8px 12px;\">TRUTH FIRST!\n\nA fun alternative to mass media misinformation.  Here we share media from various sources that present society, trends and current event...</td></tr></table></td></tr><tr style=\"\"><td height=\"14\" style=\"line-height:14px;\">&nbsp;</td></tr></table>\n</div>\n\n<div class=\"col-3\">\n<table border=\"0\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;\"><tr style=\"\"><td height=\"28\" style=\"line-height:28px;\">&nbsp;</td></tr><tr><td style=\"\"><table border=\"0\" width=\"280\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:separate;background-color:#ffffff;border:1px solid #dddfe2;border-radius:3px;font-family:Helvetica, Arial, sans-serif;margin:0px auto;\"><tr style=\"padding-bottom: 8px;\"><td style=\"\"><img class=\"img\" src=\"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/c0.0.480.250/10923305_10152497041242167_7319222352992890498_n.jpg?_nc_cat=0&amp;_nc_eui2=AeGcjTAfy8rxyEfoZ2OWuwQ7YM0qrPU3kXzF00UD_ZyjnJdCKGWRC5vR6G1NuUcIMgjpjN9tGnAO5c5iX_J-ORW4rN4mJVDl-E-2Ioy6PMuDOg&amp;oh=e4e824351e36be30e0e679f6966955e5&amp;oe=5BBCA20F\" width=\"280\" height=\"146\" alt=\"\" /></td></tr><tr><td style=\"font-size:14px;font-weight:bold;padding:8px 8px 0px 8px;text-align:center;\">HEAL•THY•SELF</td></tr><tr><td style=\"color:#90949c;font-size:12px;font-weight:normal;text-align:center;\">Facebook Group · 327 members</td></tr><tr><td style=\"padding:8px 12px 12px 12px;\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;width:100%;\"><tr><td style=\"background-color:#4267b2;border-radius:3px;text-align:center;\"><a style=\"color:#3b5998;text-decoration:none;cursor:pointer;width:100%;\" href=\"https://www.facebook.com/plugins/group/join/popup/?group_id=1031961993497338&amp;source=email_campaign_plugin\" target=\"_blank\" rel=\"noopener\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"3\" align=\"center\" style=\"border-collapse:collapse;\"><tr><td style=\"border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;\"><img width=\"16\" src=\"https://facebook.com/images/groups/plugin/email/app_fb_32_fig_white.png\" /></td><td style=\"border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;color:#FFF;font-family:Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;\">Join Group</td></tr></table></a></td></tr></table></td></tr><tr><td style=\"border-top:1px solid #dddfe2;font-size:12px;padding:8px 12px;\">HEAL•THY•SELF promotes universal health care (environmental, mental, physical and spiritual).  Here we share info and commune around healthy living.  ...</td></tr></table></td></tr><tr style=\"\"><td height=\"14\" style=\"line-height:14px;\">&nbsp;</td></tr></table>\n</div>\n\n\n\n\n\n\n    \n<div class=\"col-3\">\n\n<table border=\"0\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;\"><tr style=\"\"><td height=\"28\" style=\"line-height:28px;\">&nbsp;</td></tr><tr><td style=\"\"><table border=\"0\" width=\"280\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:separate;background-color:#ffffff;border:1px solid #dddfe2;border-radius:3px;font-family:Helvetica, Arial, sans-serif;margin:0px auto;\"><tr style=\"padding-bottom: 8px;\"><td style=\"\"><img class=\"img\" src=\"https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-0/c0.0.561.293/p320x320/30628924_10155160526797167_1052894400637566976_n.jpg?_nc_cat=0&amp;oh=de24e9edff0d3ad37ad69760ae1de816&amp;oe=5BB4959E\" width=\"280\" height=\"146\" alt=\"\" /></td></tr><tr><td style=\"font-size:14px;font-weight:bold;padding:8px 8px 0px 8px;text-align:center;\">RE•PAIR!</td></tr><tr><td style=\"color:#90949c;font-size:12px;font-weight:normal;text-align:center;\">Facebook Group · 305 members</td></tr><tr><td style=\"padding:8px 12px 12px 12px;\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;width:100%;\"><tr><td style=\"background-color:#4267b2;border-radius:3px;text-align:center;\"><a style=\"color:#3b5998;text-decoration:none;cursor:pointer;width:100%;\" href=\"https://www.facebook.com/plugins/group/join/popup/?group_id=1635663093327873&amp;source=email_campaign_plugin\" target=\"_blank\" rel=\"noopener\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"3\" align=\"center\" style=\"border-collapse:collapse;\"><tr><td style=\"border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;\"><img width=\"16\" src=\"https://facebook.com/images/groups/plugin/email/app_fb_32_fig_white.png\" /></td><td style=\"border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;color:#FFF;font-family:Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;\">Join Group</td></tr></table></a></td></tr></table></td></tr><tr><td style=\"border-top:1px solid #dddfe2;font-size:12px;padding:8px 12px;\">Re•pair is a place for masculine and feminine to reinforce identity and restore affinity. We hope this space is a place where we can interpret biology...</td></tr></table></td></tr><tr style=\"\"><td height=\"14\" style=\"line-height:14px;\">&nbsp;</td></tr></table>\n</div>\n\n<div class=\"col-3\">\n<table border=\"0\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;\"><tr style=\"\"><td height=\"28\" style=\"line-height:28px;\">&nbsp;</td></tr><tr><td style=\"\"><table border=\"0\" width=\"280\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:separate;background-color:#ffffff;border:1px solid #dddfe2;border-radius:3px;font-family:Helvetica, Arial, sans-serif;margin:0px auto;\"><tr style=\"padding-bottom: 8px;\"><td style=\"\"><img class=\"img\" src=\"https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-0/c0.0.582.304/p320x320/30415264_10155152166297167_2146169512561475584_n.jpg?_nc_cat=0&amp;oh=577b8b376547895f1959ca50d8e86ee9&amp;oe=5BC35C60\" width=\"280\" height=\"146\" alt=\"\" /></td></tr><tr><td style=\"font-size:14px;font-weight:bold;padding:8px 8px 0px 8px;text-align:center;\">Professional. | Life.</td></tr><tr><td style=\"color:#90949c;font-size:12px;font-weight:normal;text-align:center;\">Facebook Group · 39 members</td></tr><tr><td style=\"padding:8px 12px 12px 12px;\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"border-collapse:collapse;width:100%;\"><tr><td style=\"background-color:#4267b2;border-radius:3px;text-align:center;\"><a style=\"color:#3b5998;text-decoration:none;cursor:pointer;width:100%;\" href=\"https://www.facebook.com/plugins/group/join/popup/?group_id=359030670945541&amp;source=email_campaign_plugin\" target=\"_blank\" rel=\"noopener\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"3\" align=\"center\" style=\"border-collapse:collapse;\"><tr><td style=\"border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;\"><img width=\"16\" src=\"https://facebook.com/images/groups/plugin/email/app_fb_32_fig_white.png\" /></td><td style=\"border-bottom:3px solid #4267b2;border-top:3px solid #4267b2;color:#FFF;font-family:Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;\">Join Group</td></tr></table></a></td></tr></table></td></tr><tr><td style=\"border-top:1px solid #dddfe2;font-size:12px;padding:8px 12px;\">Professional. | Life.\n\nAn information resource for professionals and individuals seeking ways to improve their business life or tools to help them man...</td></tr></table></td></tr><tr style=\"\"><td height=\"14\" style=\"line-height:14px;\">&nbsp;</td></tr></table>\n</div>\n\n  \t\t</div>\n  \t\t<div class=\"container-fluid btn-light text-muted\"> ~African Proverb</div>\n\t</div>\n\n\t"

/***/ }),

/***/ "./src/app/components/art/events/events.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/art/events/events.component.ts ***!
  \***********************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/components/art/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/components/art/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/components/art/shopping/billconfirm/billconfirm.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/art/shopping/billconfirm/billconfirm.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/art/shopping/billconfirm/billconfirm.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/art/shopping/billconfirm/billconfirm.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<!-- Container -->\n<div class=\"container\">\n\n\t<div class=\"row\">\n\t<!-- Register label -->\n\t\n\n\t\n\n\n\n\n<div class=\"col-3\"><h2  align=\"right\">LOG OUT?</h2></div>\n\n\n\n<div class=\"col-3\">\n<button routerLink=\"/login\" class=\"container-fluid btn btn-success\">YES</button>\n</div>\n\n<div class=\"col-3\">\n<button routerLink=\"/login\" class=\"container-fluid btn btn-danger\">NO</button>\n</div>\n\n<div class=\"col-3\"></div>\n\n\n\n  \n \n\n\n\n\n\t</div>\n\t"

/***/ }),

/***/ "./src/app/components/art/shopping/billconfirm/billconfirm.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/art/shopping/billconfirm/billconfirm.component.ts ***!
  \******************************************************************************/
/*! exports provided: BillconfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillconfirmComponent", function() { return BillconfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillconfirmComponent = /** @class */ (function () {
    function BillconfirmComponent() {
    }
    BillconfirmComponent.prototype.ngOnInit = function () {
    };
    BillconfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billconfirm',
            template: __webpack_require__(/*! ./billconfirm.component.html */ "./src/app/components/art/shopping/billconfirm/billconfirm.component.html"),
            styles: [__webpack_require__(/*! ./billconfirm.component.css */ "./src/app/components/art/shopping/billconfirm/billconfirm.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BillconfirmComponent);
    return BillconfirmComponent;
}());



/***/ }),

/***/ "./src/app/components/art/shopping/checkout/checkout.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/art/shopping/checkout/checkout.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/art/shopping/checkout/checkout.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/art/shopping/checkout/checkout.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<!-- Container -->\n<div class=\"container\">\n\n\t<div class=\"row\">\n\t<!-- Register label -->\n\t\n\n\t\n\n\n\n\n<div class=\"col-3\"><h2  align=\"center\">ABOUT US</h2></div>\n<div class=\"col-3\"><button class=\"container-fluid btn btn-danger\" data-toggle=\"popover\" title=\"show/hide personal panel\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    MISSION</button></div>\n<div class=\"col-3\">\t<button class=\"container-fluid btn btn-secondary\" data-toggle=\"popover\" title=\"show/hide personal panel\" data-toggle=\"collapse\" data-target=\"#collapseExample1\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    LEGACY</button></div>\n<div class=\"col-3\">\t<button class=\"container-fluid btn btn-success\" data-toggle=\"popover\" title=\"show/hide personal panel\" data-toggle=\"collapse\" data-target=\"#collapseExample2\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    ARAFAT AKBAR</button></div>\n\n\n\n  \n \n\n\n\n\n\t</div>\n\t<br>\n\n\n\n<div class=\"collapse\" id=\"collapseExample\">\n  <div class=\"card card-body\">\n  \t\t\t\t\t\t<!-- PERSONAL SECTION -->\n\t<div class=\"btn btn-danger container container-fluid\"> \n\t\t<h5  class=\"display-4\" align=\"left\" >LSE MISSION</h5>\n\t\t\t<!-- Form field birthday -->\n\t\t\t\n\t\t\t<hr>\n\t\t\t<p>MISSION</p><br>\n\n\t</div>\n</div>\n<br><br>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n<div class=\"container\">\n<div class=\"collapse\" id=\"collapseExample1\">\n  <div class=\"card card-body\">\n<!-- BUSINESS SECTION -->\n\t<div class=\"btn btn-secondary container container-fluid\"> \n\t\t<h5  class=\"display-4\" align=\"center\" >LSE LEGACY</h5>\n\n\t\t<hr>\n\t\t\t<p>FOUNDATION</p><br>\n\n\t\t\t<hr>\n\t\t\t<p>LEGACY</p><br>\n\n\t\t\t<hr>\n\t\t\t<p>VISION</p><br>\n\n\t</div>\n</div>\n<br><br>\n  </div>\n</div>\n\n<!-- ARTIST SECTION -->\n<div class=\"container\">\n\t<div class=\"collapse\" id=\"collapseExample2\">\n  <div class=\"card card-body\">\n\t<div class=\"btn btn-success container container-fluid\"> \n\t\t<h5  class=\"display-4\" align=\"right\" >ARAFAT AKBAR</h5>\n\t\t\n\n\n\t\t<hr>\n\t\t\t<p>BUSINESS</p><br>\n\n\t\t\t<hr>\n\t\t\t<p>ART</p><br>\n\n\t\t\t<hr>\n\t\t\t<p>LINKS</p><br>\n\n\t</div>\n</div>\n<br><br>\n  </div>\n\n\n\n\n</div>\n\t\t\t\t\t\t"

/***/ }),

/***/ "./src/app/components/art/shopping/checkout/checkout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/art/shopping/checkout/checkout.component.ts ***!
  \************************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/components/art/shopping/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/components/art/shopping/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/art/shopping/shopping.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/art/shopping/shopping.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/art/shopping/shopping.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/art/shopping/shopping.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  LSE STORE WORKS!\n</p>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/art/shopping/shopping.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/art/shopping/shopping.component.ts ***!
  \***************************************************************/
/*! exports provided: ShoppingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function() { return ShoppingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent() {
    }
    ShoppingComponent.prototype.ngOnInit = function () {
    };
    ShoppingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping',
            template: __webpack_require__(/*! ./shopping.component.html */ "./src/app/components/art/shopping/shopping.component.html"),
            styles: [__webpack_require__(/*! ./shopping.component.css */ "./src/app/components/art/shopping/shopping.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "./src/app/components/art/shopping/shoppingcart/shoppingcart.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/art/shopping/shoppingcart/shoppingcart.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/art/shopping/shoppingcart/shoppingcart.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/art/shopping/shoppingcart/shoppingcart.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shoppingcart works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/art/shopping/shoppingcart/shoppingcart.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/art/shopping/shoppingcart/shoppingcart.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShoppingcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartComponent", function() { return ShoppingcartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingcartComponent = /** @class */ (function () {
    function ShoppingcartComponent() {
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
    };
    ShoppingcartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shoppingcart',
            template: __webpack_require__(/*! ./shoppingcart.component.html */ "./src/app/components/art/shopping/shoppingcart/shoppingcart.component.html"),
            styles: [__webpack_require__(/*! ./shoppingcart.component.css */ "./src/app/components/art/shopping/shoppingcart/shoppingcart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingcartComponent);
    return ShoppingcartComponent;
}());



/***/ }),

/***/ "./src/app/components/community/bulletin/bulletin.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/community/bulletin/bulletin.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/community/bulletin/bulletin.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/community/bulletin/bulletin.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\n\n\n<div class=\"row\">\n  \n\n<div class=\"text-right col-6\">\n  <div class=\"text-center display-4\">WORD of MOUTH</div>\n  \n\n</div>\n\n\n<div class=\"col-6\">\n  \n   <div class=\"row\">\n          <input class=\"form-inline  mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n     \n    \n\n        <button class=\"text-center btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    \n\n        <a routerLink=\"/user/:uid/:bid/community/bulletin/post\" class=\"btn btn-primary\">Post ShoutOut!</a>\n</div>\n  \n</div>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \n\n\n<div class=\"row\">\n\n  \n\n    \n  </div>\n  \n\n\n<hr>\n<div class=\"row\">\n  \n  <div class=\"text-left col-3\">\n    <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Events</label>\n      </div><br>\n       <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Education</label>\n      </div><br>\n  </div>\n\n\n  <div class=\"text-left col-3\">\n          <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">Item Review</label>\n      </div><br>\n\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio4\" value=\"option4\">\n        <label class=\"form-check-label\" for=\"inlineRadio4\">Small Bizz</label>\n      </div><br>\n    \n  </div>\n\n\n    <div class=\"text-left col-3\">\n\n      <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio5\" value=\"option5\">\n      <label class=\"form-check-label\" for=\"inlineRadio5\">Outdoors</label><br>\n\n  <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n  <label class=\"form-check-label\" for=\"inlineRadio6\">Family</label><br>\n    \n  </div>\n\n\n    <div class=\"text-left col-3\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n  <label class=\"form-check-label\" for=\"inlineRadio7\">Fitness</label><br>\n\n<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n  <label class=\"form-check-label\" for=\"inlineRadio8\">Dining</label><br>\n    \n  </div>\n\n\n</div>\n<hr>\n\n\n\n\n<div class=\"card text-center\">\n  \t\t<div class=\"card-header\">\n    \t\tEXPERIENCES\n\n\n  \t\t</div>\n\n      \n\n  \t\t<div class=\"btn-light card-body\">\n  \n\n<div class=\"container\">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Experience</a>\n  <a class=\"navbar-brand\"><img width=\"100\" height=\"25px\" src=\"../../../images/LSE.jpg\"></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>description</small></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>location</small></a>\n   <a class=\"navbar-brand\" href=\"#\"><small>date</small></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Description <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Details</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact</a>\n      </li>\n     \n    </ul>\n  </div>\n</nav>\n</div>\n<br>\n<div class=\"container\">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Experience</a>\n   <a class=\"navbar-brand\"><img width=\"100\" height=\"25px\" src=\"../../../images/LSE1.jpg\"></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>description</small></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>location</small></a>\n   <a class=\"navbar-brand\" href=\"#\"><small>date</small></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Description <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Details</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact</a>\n      </li>\n     \n    </ul>\n  </div>\n</nav>\n</div>\n<br>\n<div class=\"container\">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Experience</a>\n   <a class=\"navbar-brand\"><img width=\"100\" height=\"25px\" src=\"../../../images/LSE2.jpg\"></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>description</small></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>location</small></a>\n   <a class=\"navbar-brand\" href=\"#\"><small>date</small></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Description <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Details</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact</a>\n      </li>\n     \n    </ul>\n  </div>\n</nav>\n</div>\n<br>\n<div class=\"container\">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Experience</a>\n   <a class=\"navbar-brand\"><img width=\"100\" height=\"25px\" src=\"../../../images/LSE3.jpg\"></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>description</small></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>location</small></a>\n   <a class=\"navbar-brand\" href=\"#\"><small>date</small></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown link\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n</div>\n<br>\n<div class=\"container\">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Experience</a>\n   <a class=\"navbar-brand\"><img width=\"100\" height=\"25px\" src=\"../../../images/LSE4.jpg\"></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>description</small></a>\n  <a class=\"navbar-brand\" href=\"#\"><small>location</small></a>\n   <a class=\"navbar-brand\" href=\"#\"><small>date</small></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n   <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Description <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Details</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact</a>\n      </li>\n     \n    </ul>\n  </div>\n</nav>\n</div>\n<br>\n\n\n</div>\n  \t\t<div class=\"card-footer text-muted\">~ \"African Proverb\"</div>\n\n </div>\n\n  <br> \n  <div class=\"card text-center\">\n      <div class=\"card-header\">\n        <b></b>\n   \n      <div class=\"btn-dark card-body\">\n        <h5 class=\"card-title\">\"ShoutOut\" AN EXPERIENCE!</h5>\n        <p class=\"card-text\">Share the buried treasures youve found in Boston, post an experience!.</p>\n        <a routerLink=\"/user/:uid/:bid/community/bulletin/post\" class=\"btn btn-primary\">ShoutOut!</a>\n      </div>\n      <div class=\"card-footer text-muted\"></div>\n  </div>\n  \n   </div> "

/***/ }),

/***/ "./src/app/components/community/bulletin/bulletin.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/community/bulletin/bulletin.component.ts ***!
  \*********************************************************************/
/*! exports provided: BulletinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletinComponent", function() { return BulletinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BulletinComponent = /** @class */ (function () {
    function BulletinComponent() {
    }
    BulletinComponent.prototype.ngOnInit = function () {
    };
    BulletinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bulletin',
            template: __webpack_require__(/*! ./bulletin.component.html */ "./src/app/components/community/bulletin/bulletin.component.html"),
            styles: [__webpack_require__(/*! ./bulletin.component.css */ "./src/app/components/community/bulletin/bulletin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BulletinComponent);
    return BulletinComponent;
}());



/***/ }),

/***/ "./src/app/components/community/bulletin/postbulletin/postbulletin.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/community/bulletin/postbulletin/postbulletin.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/community/bulletin/postbulletin/postbulletin.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/community/bulletin/postbulletin/postbulletin.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n<div class=\"card text-center\">\n  \t\t<img id=\"LSE\" src=\"../../../images/LSE2.jpg\">\n  \t\t<div class=\"btn-dark card-body\">\n  \n\n<div class=\"container\">\n\n\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n  <h4><small>POST TO</small> WORD of MOUTH</h4>\n  \n  <table>\n  <tr>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Events</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Education</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">Item Review</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio4\" value=\"option4\">\n        <label class=\"form-check-label\" for=\"inlineRadio4\">Small Bizz</label>\n      </div>\n    </td>\n    \n  </tr>\n    \n    <td>\n      <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio5\" value=\"option5\">\n      <label class=\"form-check-label\" for=\"inlineRadio5\">Outdoors</label>\n  </td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n  <label class=\"form-check-label\" for=\"inlineRadio6\">Family</label>\n</td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n  <label class=\"form-check-label\" for=\"inlineRadio7\">Fitness</label>\n</td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n  <label class=\"form-check-label\" for=\"inlineRadio8\">Dining</label>\n</td>\n</table>\n\n\n\n\n  <br>\n  <form class=\"form-group\" action=\"/action_page.php\">\n  <div class=\"form-group\">\n    <div class=\"form-group\">\n    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n       <option value=\"\" disabled selected>*Select your option</option>\n      <option>Event</option>\n      <option>Dining</option>\n      <option>Fitness</option>\n      <option>Family</option>\n      <option>Item</option>\n      <option>Small Bizz</option>\n      <option>Outdoors</option>\n      <option>Education</option>\n    </select>\n  </div>\n\n    <input placeholder=\"name of business/event/item\" type=\"name\" class=\"form-control\" id=\"name\">\n  </div>\n  <div class=\"form-group\">\n\n    <input placeholder=\"description\" type=\"textarea\" class=\"form-control\" id=\"description\">\n  </div>\n    <div class=\"form-group\">\n\n    <input placeholder=\"location\" type=\"textarea\" class=\"form-control\" id=\"location\">\n  </div>\n  <div class=\"form-group\">\n\n    <input placeholder=\"date\" type=\"date\" class=\"form-control\" id=\"pwd\">\n  </div>\n    <div class=\"form-group\">\n\n    <input placeholder=\"time\" type=\"time\" class=\"form-control\" id=\"email\">\n  </div>\n  <div class=\"form-group\">\n\n    <input placeholder=\"website\" type=\"URL\" class=\"form-control\" id=\"pwd\">\n  </div>\n  <div class=\"checkbox\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\n   <button routerLink=\"/community/bulletin\" class=\"btn btn-danger btn-block\">Cancel</button>\n</form>\n\n\n\n</div>\n  <div class=\"panel-footer\"></div>\n</div>\n</div>\n\n</div>\n  \t\t<div class=\"card-footer text-muted\">~ \"African Proverb\"</div>\n\t</div>\n\n\n<br><br>\n\n"

/***/ }),

/***/ "./src/app/components/community/bulletin/postbulletin/postbulletin.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/community/bulletin/postbulletin/postbulletin.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PostbulletinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostbulletinComponent", function() { return PostbulletinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostbulletinComponent = /** @class */ (function () {
    function PostbulletinComponent() {
    }
    PostbulletinComponent.prototype.ngOnInit = function () {
    };
    PostbulletinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postbulletin',
            template: __webpack_require__(/*! ./postbulletin.component.html */ "./src/app/components/community/bulletin/postbulletin/postbulletin.component.html"),
            styles: [__webpack_require__(/*! ./postbulletin.component.css */ "./src/app/components/community/bulletin/postbulletin/postbulletin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostbulletinComponent);
    return PostbulletinComponent;
}());



/***/ }),

/***/ "./src/app/components/community/vlog/myvlog/myvlog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/community/vlog/myvlog/myvlog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/community/vlog/myvlog/myvlog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/community/vlog/myvlog/myvlog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n\n\n<div class=\"card text-center\">\n      <img id=\"LSE\" src=\"../../../images/LSE2.jpg\">\n      <div class=\"btn-dark card-body\">\n  \n\n<div class=\"container\">\n\n\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n<h4><small>POST TO</small> VLOG | LYFE</h4>\n  \n  <table>\n  <tr>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Events</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Education</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">Item Review</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio4\" value=\"option4\">\n        <label class=\"form-check-label\" for=\"inlineRadio4\">Small Bizz</label>\n      </div>\n    </td>\n    \n  </tr>\n    \n    <td>\n      <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio5\" value=\"option5\">\n      <label class=\"form-check-label\" for=\"inlineRadio5\">Outdoors</label>\n  </td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n  <label class=\"form-check-label\" for=\"inlineRadio6\">Family</label>\n</td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n  <label class=\"form-check-label\" for=\"inlineRadio7\">Fitness</label>\n</td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n  <label class=\"form-check-label\" for=\"inlineRadio8\">Dining</label>\n</td>\n</table>\n\n\n\n\n  <br>\n  <form class=\"form-group\" action=\"/action_page.php\">\n  <div class=\"form-group\">\n    \n\n    <input placeholder=\"Video url\" type=\"url\" class=\"form-control\" id=\"url\">\n  </div>\n  <div class=\"form-group\">\n\n    <input placeholder=\"title\" type=\"text\" class=\"form-control\" id=\"title\">\n  </div>\n    <div class=\"form-group\">\n\n    <input placeholder=\"headline\" type=\"text\" class=\"form-control\" id=\"headline\">\n  </div>\n  <div class=\"form-group\">\n\n    <input placeholder=\"blog\" type=\"textarea\" class=\"form-control\" id=\"blog\">\n  </div>\n    <div class=\"form-group\">\n\n    <input placeholder=\"Images\" type=\"images\" class=\"form-control\" id=\"images\">\n  </div>\n \n\n    \n  <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\n   <button routerLink=\"/community/vlog\" class=\"btn btn-danger btn-block\">Cancel</button>\n</form>\n\n\n\n</div>\n  <div class=\"panel-footer\"></div>\n</div>\n</div>\n\n</div>\n      <div class=\"card-footer text-muted\">~ \"African Proverb\"</div>\n  </div>\n\n\n<br><br>\n\n"

/***/ }),

/***/ "./src/app/components/community/vlog/myvlog/myvlog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/community/vlog/myvlog/myvlog.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyvlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyvlogComponent", function() { return MyvlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyvlogComponent = /** @class */ (function () {
    function MyvlogComponent() {
    }
    MyvlogComponent.prototype.ngOnInit = function () {
    };
    MyvlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myvlog',
            template: __webpack_require__(/*! ./myvlog.component.html */ "./src/app/components/community/vlog/myvlog/myvlog.component.html"),
            styles: [__webpack_require__(/*! ./myvlog.component.css */ "./src/app/components/community/vlog/myvlog/myvlog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyvlogComponent);
    return MyvlogComponent;
}());



/***/ }),

/***/ "./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n\n\n<div class=\"card text-center\">\n      <img id=\"LSE\" src=\"../../../images/LSE2.jpg\">\n      <div class=\"btn-dark card-body\">\n  \n\n<div class=\"container\">\n\n\n\n<div class=\"panel panel-default\">\n  <div style=\"font-size:  100%\" class=\"panel-body\">\n<h4><small>Service Inquiry</small> LIGHTSPEED</h4>\n  \n\n\n<div class=\"row\">\n\t\n<div class=\"text-left col-3\">\n\t<label class=\"form-check-label\" for=\"inlineRadio5\">WEB DESIGN |</label><br>\n\n\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n  \t<label class=\"form-check-label\" for=\"inlineRadio6\">Maintenance</label><br>\n\n\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n\t<label class=\"form-check-label\" for=\"inlineRadio7\">Design</label><br>\n\n\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n  \t<label class=\"form-check-label\" for=\"inlineRadio8\">Consulting</label><br>\n\n\n</div>\n\n<div class=\"text-left col-3\">\n\t\t  <label class=\"form-check-label\" for=\"inlineRadio5\">GRAPHIC DESIGN |</label><br>\n\t\n\t  <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n  <label class=\"form-check-label\" for=\"inlineRadio6\">Logo</label><br>\n\n<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n  <label class=\"form-check-label\" for=\"inlineRadio7\">Flyer</label><br>\n<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n  <label class=\"form-check-label\" for=\"inlineRadio8\">Templates</label><br>\n\n\n</div>\n\n<div class=\"text-left col-3\">\n\t\t   <label class=\"form-check-label\" for=\"inlineRadio5\">EVENT SERVICES |</label><br>\n\n\t\t   <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n\t\t  <label class=\"form-check-label\" for=\"inlineRadio6\">Coordination</label><br>\n\t\t\n\t\t  <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n\t\t  <label class=\"form-check-label\" for=\"inlineRadio7\">Assistance</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n\t\t  <label class=\"form-check-label\" for=\"inlineRadio8\">Consulting</label><br>\n\t\t</div>\n\n<div class=\"text-left col-3\">\n\t\t    <label class=\"form-check-label\" for=\"inlineRadio5\">ART SERVICES |</label><br>\n\n\t\t    \t\t   <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n\t\t  <label class=\"form-check-label\" for=\"inlineRadio6\">ArtServe</label><br>\n\t\t\n\t\t  <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n\t\t  <label class=\"form-check-label\" for=\"inlineRadio7\">Curation</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n\t\t  <label class=\"form-check-label\" for=\"inlineRadio8\">Advertisement</label><br>\n\t\t</div>\n\t\n</div>\n\n\n</div>\n\n\n  <br>\n<form class=\"form-group\" action=\"/action_page.php\">\n\t<div class=\"form-group\">\n    <input placeholder=\"Preferred Budget\" type=\"number\" class=\"form-control\" id=\"Preferred Budget\">\n  \t</div>\n  \t<div class=\"form-group\">\n    <input placeholder=\"Project Title\" type=\"text\" class=\"form-control\" id=\"Project Title\">\n  \t</div>\n    <div class=\"form-group\">\n    <input placeholder=\"(Please summarize services you would like or relevant logistics, be as detailed as possible.)\" type=\"textarea\" class=\"form-control\" id=\"Project Description\">\n  \t</div>\n\t<div class=\"form-group\">\n    <input placeholder=\"Date\" type=\"Date\" class=\"form-control\" id=\"Date\">\n  \t</div>\n    <div class=\"form-group\">\n    <input placeholder=\"( _ _ : _ _ am/pm)\" type=\"Time\" class=\"form-control\" id=\"Time\">\n  \t</div>\n \t<div class=\"form-group\">\n    <input placeholder=\"Contact 1:\" type=\"text\" class=\"form-control\" id=\"Contact 1:\">\n  \t</div>\n\t<div class=\"form-group\">\n\t<input placeholder=\"Contact 2:\" type=\"text\" class=\"form-control\" id=\"Contact 2:\">\n\t</div>\n\t<div class=\"form-group\">\n\t<input placeholder=\"(area code) - _ _ _ - _ _ _ _\" type=\"number\" class=\"form-control\" id=\"Phone\">\n\t</div>\n\t<div class=\"form-group\">\n    <input placeholder=\"Email\" type=\"text\" class=\"form-control\" id=\"Emaile\">\n\t</div>\n\t<div class=\"form-group\">\n    <input placeholder=\"Website\" type=\"text\" class=\"form-control\" id=\"Website\">\n  \t</div>\n \n\n\n\n\n\n\n<br>\n<h3 class=\"text-center\">Best Time To Contact You:<small> (check all that apply)</small></h3>\n\n<div class=\"row\">\n\t<div class=\"text-right col-3\">\n\t\t<label class=\"form-check-label\" for=\"inlineRadio11\">MON |</label><br>\n\t\t<label class=\"form-check-label\" for=\"inlineRadio12\">TUE |</label><br>\n\t\t<label class=\"form-check-label\" for=\"inlineRadio13\">WED |</label><br>\n\t\t<label class=\"form-check-label\" for=\"inlineRadio14\">THU |</label><br>\n\t\t<label class=\"form-check-label\" for=\"inlineRadio15\">FRI |</label><br>\n\t</div>\n\t<div class=\"text-left col-3\">\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio11\" value=\"option11\">\n  \t\t<label class=\"form-check-label\" for=\"inlineRadio11\">10am-1pm</label><br>\n  \t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio12\" value=\"option12\">\n  \t\t<label class=\"form-check-label\" for=\"inlineRadio12\">10am-1pm</label><br>\n  \t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio13\" value=\"option13\">\n  \t\t<label class=\"form-check-label\" for=\"inlineRadio13\">10am-1pm</label><br>\t  \n  \t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio14\" value=\"option14\">\n  \t\t<label class=\"form-check-label\" for=\"inlineRadio14\">10am-1pm</label><br>\n  \t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio15\" value=\"option15\">\n  \t\t<label class=\"form-check-label\" for=\"inlineRadio15\">10am-1pm</label><br>\n\t</div>\n\t<div class=\"text-left col-3\">\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio16\" value=\"option16\">\n\t\t<label class=\"form-check-label\" for=\"inlineRadio7\">2pm-5pm</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio17\" value=\"option17\">\n\t\t<label class=\"form-check-label\" for=\"inlineRadio7\">2pm-5pm</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio18\" value=\"option18\">\n\t\t<label class=\"form-check-label\" for=\"inlineRadio7\">2pm-5pm</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio19\" value=\"option19\">\n\t\t<label class=\"form-check-label\" for=\"inlineRadio7\">2pm-5pm</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio20\" value=\"option20\">\n\t\t<label class=\"form-check-label\" for=\"inlineRadio7\">2pm-5pm</label><br>\n\t</div>\n\t<div class=\"text-left col-3\">\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio21\" value=\"option21\">\n\t  \t<label class=\"form-check-label\" for=\"inlineRadio8\">6pm-9pm</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio22\" value=\"option22\">\n\t  \t<label class=\"form-check-label\" for=\"inlineRadio8\">6pm-9pm</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio23\" value=\"option23\">\n\t  \t<label class=\"form-check-label\" for=\"inlineRadio8\">6pm-9pm</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio24\" value=\"option24\">\n\t  \t<label class=\"form-check-label\" for=\"inlineRadio8\">6pm-9pm</label><br>\n\t\t<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio25\" value=\"option25\">\n\t  \t<label class=\"form-check-label\" for=\"inlineRadio8\">6pm-9pm</label><br>\n\t\t</div>\n\t</div>\n<br><br>\n\n\n\n  <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\n   <button routerLink=\"/resource/services\" class=\"btn btn-danger btn-block\">Cancel</button>\n</form>\n\n\n\n</div>\n  <div class=\"panel-footer\"></div>\n</div>\n</div>\n\n</div>\n      <div class=\"card-footer text-center text-muted\">~ \"African Proverb\"</div>\n  </div>\n\n\n<br><br>\n\n"

/***/ }),

/***/ "./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.ts ***!
  \************************************************************************************/
/*! exports provided: MyvlogpreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyvlogpreviewComponent", function() { return MyvlogpreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyvlogpreviewComponent = /** @class */ (function () {
    function MyvlogpreviewComponent() {
    }
    MyvlogpreviewComponent.prototype.ngOnInit = function () {
    };
    MyvlogpreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myvlogpreview',
            template: __webpack_require__(/*! ./myvlogpreview.component.html */ "./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.html"),
            styles: [__webpack_require__(/*! ./myvlogpreview.component.css */ "./src/app/components/community/vlog/myvlogpreview/myvlogpreview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyvlogpreviewComponent);
    return MyvlogpreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/community/vlog/vlog.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/community/vlog/vlog.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/community/vlog/vlog.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/community/vlog/vlog.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\n\n\n\n<div class=\"row\">\n\n  <div class=\"text-right col-6\">\n  <div class=\"display-4\">VLOGLYFE</div></div>\n\n  <div class=\"col-6\"><nav class=\"navbar-light\">\n  <form class=\"text-center form-inline\">\n    <input class=\"float-left form-control mr-sm-2\" type=\"search\" placeholder=\"Search Vlogs\" aria-label=\"Search\">\n    <button class=\"float left text-center btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search Vlogs</button>\n  </form>\n</nav>\n</div></div>\n\n<hr>\n\n\n\n<div class=\"row\">\n  \n  <div class=\"text-left col-3\">\n    <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Events</label>\n      </div><br>\n       <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Education</label>\n      </div><br>\n  </div>\n\n\n  <div class=\"text-left col-3\">\n          <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">Item Review</label>\n      </div><br>\n\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio4\" value=\"option4\">\n        <label class=\"form-check-label\" for=\"inlineRadio4\">Small Bizz</label>\n      </div><br>\n    \n  </div>\n\n\n    <div class=\"text-left col-3\">\n\n      <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio5\" value=\"option5\">\n      <label class=\"form-check-label\" for=\"inlineRadio5\">Outdoors</label><br>\n\n  <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n  <label class=\"form-check-label\" for=\"inlineRadio6\">Family</label><br>\n    \n  </div>\n\n\n    <div class=\"text-left col-3\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n  <label class=\"form-check-label\" for=\"inlineRadio7\">Fitness</label><br>\n\n<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n  <label class=\"form-check-label\" for=\"inlineRadio8\">Dining</label><br>\n    \n  </div>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n\n\n\n<hr>\n<br> \n\n\n<div class=\"card text-center\">\n\t    <div class=\"card-header\"><div class=\"display-4\">VLOGGERS</div><nav class=\"navbar navbar-light bg-light\">\n\n</nav></div>\n\n\n\n\t\t<div class=\"card-body\">\n\n<div routerLink=\"/community/vloggerpages\" class=\"card-group\">\n  \t<div class=\"card\">\n    \t<img class=\"card-img-top\" src=\"../../../images/LSE3.jpg\" alt=\"Card image cap\">\n    \t<div class=\"card-body\">\n      \t\t<h3 class=\"card-title\">~VLOGGER</h3>\n      \t\t<p class=\"card-text\">VLOGGER descriptition.  The most traveled, beloved, interesting vlogger....ever!</p>\n      \t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n    \t</div>\n  \t</div>\n  \t<div class=\"card\">\n    \t<img class=\"card-img-top\" src=\"../../../images/LSE1.jpg\" alt=\"Card image cap\">\n    \t<div class=\"card-body\">\n      \t\t<h5 class=\"card-title\">VLOG ENTRY TITLE</h5>\n      \t\t<p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n      \t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n    \t</div>\n  \t</div>\n  \t<div class=\"card\">\n    \t<img class=\"card-img-top\" src=\"../../../images/LSE.jpg\" alt=\"Card image cap\">\n    \t<div class=\"card-body\">\n    \t \t<h5 class=\"card-title\">VIDEO IMAGE</h5>\n      \t\t<p class=\"card-text\">Short description of all the great action in the video.</p>\n      \t\t<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n    \t</div>\n  \t</div>\n</div>\n<br>\n<div class=\"card-footer text-muted\">Click Vlogger to see their page!</div>\n</div>\n</div>\n\n\t<br>\n\t<br>\n\t<div class=\"card text-center\">\n  \t\t<div class=\"card-header\">\n    \t\t<b></b>\n  \t\t</div>\n  \t\t<div class=\"btn-dark card-body\">\n    \t\t<h5 class=\"card-title\">POST YOUR VLOG|LYFE ENTRY!</h5>\n    \t\t<p class=\"card-text\">Share your great experiences ! Vlog them here, watch later, or inspire others to get active!</p>\n    \t\t<a routerLink=\"/user/:uid/:vid/community/myvlog\" class=\"btn btn-primary\">Post Vlog!</a>\n  \t\t</div>\n  \t\t<div class=\"card-footer text-muted\">\"African Proverb\"</div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/components/community/vlog/vlog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/community/vlog/vlog.component.ts ***!
  \*************************************************************/
/*! exports provided: VlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VlogComponent", function() { return VlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VlogComponent = /** @class */ (function () {
    function VlogComponent() {
    }
    VlogComponent.prototype.ngOnInit = function () {
    };
    VlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vlog',
            template: __webpack_require__(/*! ./vlog.component.html */ "./src/app/components/community/vlog/vlog.component.html"),
            styles: [__webpack_require__(/*! ./vlog.component.css */ "./src/app/components/community/vlog/vlog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VlogComponent);
    return VlogComponent;
}());



/***/ }),

/***/ "./src/app/components/community/vlog/vloggerpages/vloggerpages.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/community/vlog/vloggerpages/vloggerpages.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/community/vlog/vloggerpages/vloggerpages.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/community/vlog/vloggerpages/vloggerpages.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\n\n\t<div class=\"card text-center\">\n\t    <div class=\"card-header\"><div class=\"display-4\">SOMEONES VLOG</div></div>\n\t\t<div class=\"card-body\">\n\t<div class=\"row\">\n\t\t<div class=\"col-4\">\n\t\t\t<div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n\t\t\t  \t<a class=\"nav-link active\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">Entry 1</a>\n\t\t\t  \t<a class=\"nav-link\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">Entry 2</a>\n\t\t\t  \t<a class=\"nav-link\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"#v-pills-messages\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\">Entry 3</a>\n\t\t\t  \t<a class=\"nav-link\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"#v-pills-settings\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\">Entry 4</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"btn-sm btn-outline-secondary\" routerLink=\"/community/vlog\" >Back To Vlogs</div>\n\t\t</div>\n\n\t\t<div align=\"left\" class=\"col-8\">\n\t\t\n\t\t\t<div class=\"tab-content\" id=\"v-pills-tabContent\">\n\t\t\t\t<div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n\t\t\t\t\t<div class=\"embed-responsive embed-responsive-21by9\">\n\t\t\t\t\t<iframe src=\"https://www.youtube.com/embed/nzJ3YI23_3w\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\n\n\t\t\t\t\t<h1>VIDEO SHOOT...LIT!!!</h1>\n\t\t\t\t\t<h4>The Crazy Video Shoot We did...You Wont Believe This!</h4>\n\t\t\t\t\t<small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small>\n\t<!-- \t\t<h1>ALBUM</h1> -->\n\t\t\t\n\t\t\t\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t  \t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t  </ol>\n\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\"  src=\"../../../images/LSE1.jpg\" alt=\"First slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\"  src=\"../../../images/LSE3.jpg\" alt=\"Second slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\" src=\"../../../images/LSE.jpg\" alt=\"Third slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\n\t\t<div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\n\n<div class=\"tab-content\" id=\"v-pills-tabContent\">\n\t\t\t\t<div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n\t\t\t\t\t<div class=\"embed-responsive embed-responsive-21by9\">\n\t\t\t\t\t<iframe src=\"https://www.youtube.com/embed/nzJ3YI23_3w\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\n\n\t\t\t\t\t<h1>VIDEO SHOOT...LIT!!!</h1>\n\t\t\t\t\t<h4>The Crazy Video Shoot We did...You Wont Believe This!</h4>\n\t\t\t\t\t<small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small>\n\t<!-- \t\t<h1>ALBUM</h1> -->\n\t\t\t\n\t\t\t\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t  \t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t  </ol>\n\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\"  src=\"../../../images/LSE1.jpg\" alt=\"First slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\"  src=\"../../../images/LSE3.jpg\" alt=\"Second slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\" src=\"../../../images/LSE.jpg\" alt=\"Third slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\n\t  \t<div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">\n\n\n<div class=\"tab-content\" id=\"v-pills-tabContent\">\n\t\t\t\t<div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n\t\t\t\t\t<div class=\"embed-responsive embed-responsive-21by9\">\n\t\t\t\t\t<iframe src=\"https://www.youtube.com/embed/nzJ3YI23_3w\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\n\n\t\t\t\t\t<h1>VIDEO SHOOT...LIT!!!</h1>\n\t\t\t\t\t<h4>The Crazy Video Shoot We did...You Wont Believe This!</h4>\n\t\t\t\t\t<small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small>\n\t<!-- \t\t<h1>ALBUM</h1> -->\n\t\t\t\n\t\t\t\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t  \t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t  </ol>\n\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\"  src=\"../../../images/LSE1.jpg\" alt=\"First slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\"  src=\"../../../images/LSE3.jpg\" alt=\"Second slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\" src=\"../../../images/LSE.jpg\" alt=\"Third slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t  \t\n\t  \t<div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">\n\n\n<div class=\"tab-content\" id=\"v-pills-tabContent\">\n\t\t\t\t<div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n\t\t\t\t\t<div class=\"embed-responsive embed-responsive-21by9\">\n\t\t\t\t\t<iframe src=\"https://www.youtube.com/embed/nzJ3YI23_3w\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\n\n\t\t\t\t\t<h1>VIDEO SHOOT...LIT!!!</h1>\n\t\t\t\t\t<h4>The Crazy Video Shoot We did...You Wont Believe This!</h4>\n\t\t\t\t\t<small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small>\n\t<!-- \t\t<h1>ALBUM</h1> -->\n\t\t\t\n\t\t\t\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t  \t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t  </ol>\n\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item active\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\"  src=\"../../../images/LSE1.jpg\" alt=\"First slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\"  src=\"../../../images/LSE3.jpg\" alt=\"Second slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t      <img class=\"d-block w-100\" src=\"../../../images/LSE.jpg\" alt=\"Third slide\">\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t  \t\n\t\t</div>\t\n<div class=\"card-footer text-muted\">EXPLORE. SHARE. YOURSELF.</div>\n\t</div></div></div>"

/***/ }),

/***/ "./src/app/components/community/vlog/vloggerpages/vloggerpages.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/community/vlog/vloggerpages/vloggerpages.component.ts ***!
  \**********************************************************************************/
/*! exports provided: VloggerpagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VloggerpagesComponent", function() { return VloggerpagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VloggerpagesComponent = /** @class */ (function () {
    function VloggerpagesComponent() {
    }
    VloggerpagesComponent.prototype.ngOnInit = function () {
    };
    VloggerpagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vloggerpages',
            template: __webpack_require__(/*! ./vloggerpages.component.html */ "./src/app/components/community/vlog/vloggerpages/vloggerpages.component.html"),
            styles: [__webpack_require__(/*! ./vloggerpages.component.css */ "./src/app/components/community/vlog/vloggerpages/vloggerpages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VloggerpagesComponent);
    return VloggerpagesComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.css":
/*!*****************************************************!*\
  !*** ./src/app/components/components.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  components works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent.prototype.ngOnInit = function () {
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: [__webpack_require__(/*! ./components.component.css */ "./src/app/components/components.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/resource/calendar/calendar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/resource/calendar/calendar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resource/calendar/calendar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/resource/calendar/calendar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n<h1 class=\"text-center display-4\">CALENDAR</h1>\n<div class=\"text-muted text-center \">~ \"African Proverb\"</div>\n<hr>\n<div class=\"row\">\n\n  <div class=\"col-4 card-body\">\n    <nav class=\"navbar-light\">\n  <form class=\"text-center form-inline\">\n    <input class=\"form-control  mr-sm-2\" type=\"search\" placeholder=\"Search Calendar\" aria-label=\"Search\">\n  </form>\n</nav>\n    \n\n  </div>\n  <div class=\"col-4 card-body\">\n         <button class=\"text-center btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search Calendar</button>\n    \n  </div>\n  \n    \n <div class=\"col-4 card-body\">\n        <a routerLink=\"/user/:uid/resource/calendarpost\" class=\"btn btn-primary\">Post Event!</a>\n    \n  </div>\n  \n  \n\n\n</div>\n\n  <table>\n  <tr>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Events</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Education</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">Item Review</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio4\" value=\"option4\">\n        <label class=\"form-check-label\" for=\"inlineRadio4\">Small Bizz</label>\n      </div>\n    </td>\n    \n  </tr>\n    \n    <td>\n      <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio5\" value=\"option5\">\n      <label class=\"form-check-label\" for=\"inlineRadio5\">Outdoors</label>\n  </td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n  <label class=\"form-check-label\" for=\"inlineRadio6\">Family</label>\n</td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n  <label class=\"form-check-label\" for=\"inlineRadio7\">Fitness</label>\n</td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n  <label class=\"form-check-label\" for=\"inlineRadio8\">Dining</label>\n</td>\n</table>\n<hr>\n\n\n\n\n<div class=\"card text-center\">\n  \t\t<div class=\"card-header\">\n    \t\t<h3>EVENT NAME</h3><h5> & DATE</h5>\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n  \n\n<div class=\"container\">\n\n\n<div class=\"row\">\n\t\n\t<div class=\"col-3 container-fluid\">\n\t\t<img width=\"150\" src=\"../../../images/artist.jpg\">\n\t</div>\t\n<br>\n\t<div class=\"col-9\">\n\t\t<nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Event Info</a>\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#fat\">Date & Time</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#mdo\">Details</a>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Contact Info</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#one\">web</a>\n        <a class=\"dropdown-item\" href=\"#two\">email</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#three\">phone</a>\n      </div>\n    </li>\n  </ul>\n</nav>\n<div data-spy=\"scroll\" data-target=\"#navbar-example2\" data-offset=\"0\">\n  <h5 id=\"fat\">Date & Time</h5>\n  <p>...</p>\n  <h5 id=\"mdo\">Details</h5>\n  <p>...</p>\n  <h5 id=\"one\">web</h5>\n  <p>...</p>\n  <h5 id=\"two\">email</h5>\n  <p>...</p>\n  <h5 id=\"three\">phone</h5>\n  <p>...</p>\n</div>\n\t\t\n\t</div>\n\n</div>\n\n\n \n</div>\n</div>\n\n</div>\n\n\n  \t\t<div class=\"card-footer text-muted\"></div>\n\t<br>\n\n<div class=\"card text-center\">\n  \t\t<div class=\"card-header\">\n    \t\t<h3>EVENT NAME</h3><h5> & DATE</h5>\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n  \n\n<div class=\"container\">\n\n\n<div class=\"row\">\n\t\n\t<div class=\"col-3 container-fluid\">\n\t\t<img width=\"150\" src=\"../../../images/ballerina.jpg\">\n\t</div>\t\n<br>\n\t<div class=\"col-9\">\n    <nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Event Info</a>\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#fat\">Date & Time</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#mdo\">Details</a>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Contact Info</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#one\">web</a>\n        <a class=\"dropdown-item\" href=\"#two\">email</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#three\">phone</a>\n      </div>\n    </li>\n  </ul>\n</nav>\n<div data-spy=\"scroll\" data-target=\"#navbar-example2\" data-offset=\"0\">\n  <h5 id=\"fat\">Date & Time</h5>\n  <p>...</p>\n  <h5 id=\"mdo\">Details</h5>\n  <p>...</p>\n  <h5 id=\"one\">web</h5>\n  <p>...</p>\n  <h5 id=\"two\">email</h5>\n  <p>...</p>\n  <h5 id=\"three\">phone</h5>\n  <p>...</p>\n</div>\n\t\t\n\t</div>\n\n</div>\n\n\n \n</div>\n</div>\n\n</div>\n\n\n  \t\t<div class=\"card-footer text-muted\"></div>\n\n <br>\n\n <div class=\"card text-center\">\n  \t\t<div class=\"card-header\">\n    \t\t<h3>EVENT NAME</h3><h5> & DATE</h5>\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n  \n\n<div class=\"container\">\n\n\n<div class=\"row\">\n\t\n\t<div class=\"col-3 container-fluid\">\n\t\t<img width=\"150\" src=\"../../../images/Agency.jpg\">\n\t</div>\t\n<br>\n<div class=\"col-9\">\n    <nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Event Info</a>\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#fat\">Date & Time</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#mdo\">Details</a>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Contact Info</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#one\">web</a>\n        <a class=\"dropdown-item\" href=\"#two\">email</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#three\">phone</a>\n      </div>\n    </li>\n  </ul>\n</nav>\n<div data-spy=\"scroll\" data-target=\"#navbar-example2\" data-offset=\"0\">\n  <h5 id=\"fat\">Date & Time</h5>\n  <p>...</p>\n  <h5 id=\"mdo\">Details</h5>\n  <p>...</p>\n  <h5 id=\"one\">web</h5>\n  <p>...</p>\n  <h5 id=\"two\">email</h5>\n  <p>...</p>\n  <h5 id=\"three\">phone</h5>\n  <p>...</p>\n</div>\n\t\t\n\t</div>\n\n</div>\n\n\n \n</div>\n</div>\n\n</div>\n\n\n  \t\t<div class=\"card-footer text-muted\"></div>\n\n  \t\t<br>\n\n  \t\t<div class=\"card text-center\">\n  \t\t<div class=\"card-header\">\n    \t\t<h3>EVENT NAME</h3><h5> & DATE</h5>\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n  \n\n<div class=\"container\">\n\n\n<div class=\"row\">\n\t\n\t<div class=\"col-3 container-fluid\">\n\t\t<img width=\"150\" src=\"../../../images/LSE2.jpg\">\n\t</div>\t\n<br>\n<div class=\"col-9\">\n    <nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Event Info</a>\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#fat\">Date & Time</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#mdo\">Details</a>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Contact Info</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#one\">web</a>\n        <a class=\"dropdown-item\" href=\"#two\">email</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#three\">phone</a>\n      </div>\n    </li>\n  </ul>\n</nav>\n<div data-spy=\"scroll\" data-target=\"#navbar-example2\" data-offset=\"0\">\n  <h5 id=\"fat\">Date & Time</h5>\n  <p>...</p>\n  <h5 id=\"mdo\">Details</h5>\n  <p>...</p>\n  <h5 id=\"one\">web</h5>\n  <p>...</p>\n  <h5 id=\"two\">email</h5>\n  <p>...</p>\n  <h5 id=\"three\">phone</h5>\n  <p>...</p>\n</div>\n\t\t\n\t</div>\n\n</div>\n\n\n \n</div>\n</div>\n\n</div>\n\n\n  \t\t<div class=\"card-footer text-muted\"></div>\n\n\n\n\n</div>\n\t\n\n\n"

/***/ }),

/***/ "./src/app/components/resource/calendar/calendar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/resource/calendar/calendar.component.ts ***!
  \********************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/components/resource/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/components/resource/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/components/resource/calendar/calendarpost/calendarpost.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/resource/calendar/calendarpost/calendarpost.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resource/calendar/calendarpost/calendarpost.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/resource/calendar/calendarpost/calendarpost.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n\n\n<div class=\"card text-center\">\n      <img id=\"LSE\" src=\"../../../images/LSE2.jpg\">\n      <div class=\"btn-dark card-body\">\n  \n\n<div class=\"container\">\n\n\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n<h4><small>POST TO</small>CALENDAR</h4>\n  \n  <table>\n  <tr>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Events</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Education</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">Item Review</label>\n      </div>\n    </td>\n\n    <td>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio4\" value=\"option4\">\n        <label class=\"form-check-label\" for=\"inlineRadio4\">Small Bizz</label>\n      </div>\n    </td>\n    \n  </tr>\n    \n    <td>\n      <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio5\" value=\"option5\">\n      <label class=\"form-check-label\" for=\"inlineRadio5\">Outdoors</label>\n  </td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n  <label class=\"form-check-label\" for=\"inlineRadio6\">Family</label>\n</td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n  <label class=\"form-check-label\" for=\"inlineRadio7\">Fitness</label>\n</td>\n  <td><input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n  <label class=\"form-check-label\" for=\"inlineRadio8\">Dining</label>\n</td>\n</table>\n\n\n\n\n  <br>\n  <form class=\"form-group\" action=\"/action_page.php\">\n  <div class=\"form-group\">\n    \n\n    <input placeholder=\"EventName\" type=\"url\" class=\"form-control\" id=\"url\">\n  </div>\n  <div class=\"form-group\">\n\n    <input placeholder=\"Description\" type=\"text\" class=\"form-control\" id=\"title\">\n  </div>\n    <div class=\"form-group\">\n\n    <input placeholder=\"Date\" type=\"text\" class=\"form-control\" id=\"headline\">\n  </div>\n  <div class=\"form-group\">\n\n    <input placeholder=\"Time\" type=\"textarea\" class=\"form-control\" id=\"blog\">\n  </div>\n    <div class=\"form-group\">\n\n          <input placeholder=\"location\" type=\"textarea\" class=\"form-control\" id=\"blog\">\n  </div>\n    <div class=\"form-group\">\n\n          <input placeholder=\"website\" type=\"textarea\" class=\"form-control\" id=\"blog\">\n  </div>\n    <div class=\"form-group\">\n\n          <input placeholder=\"duration\" type=\"textarea\" class=\"form-control\" id=\"blog\">\n  </div>\n    <div class=\"form-group\">\n\n          <input placeholder=\"email\" type=\"textarea\" class=\"form-control\" id=\"blog\">\n  </div>\n    <div class=\"form-group\">\n\n    <input placeholder=\"phone\" type=\"images\" class=\"form-control\" id=\"images\">\n\n     </div>\n    <div class=\"form-group\">\n\n    <input placeholder=\"image 1\" type=\"images\" class=\"form-control\" id=\"images\">\n  </div>\n  <div class=\"form-group\">\n <input placeholder=\"image 2\" type=\"images2\" class=\"form-control\" id=\"images2\">\n  </div>\n\n \n\n    \n  <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\n   <button routerLink=\"/resource/calendar\" type=\"submit\" class=\"btn btn-danger btn-block\">Cancel</button>\n</form>\n\n\n\n</div>\n  <div class=\"panel-footer\"></div>\n</div>\n</div>\n\n</div>\n      <div class=\"card-footer text-muted\">~ \"African Proverb\"</div>\n  </div>\n\n\n<br><br>\n\n"

/***/ }),

/***/ "./src/app/components/resource/calendar/calendarpost/calendarpost.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/resource/calendar/calendarpost/calendarpost.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CalendarpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarpostComponent", function() { return CalendarpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarpostComponent = /** @class */ (function () {
    function CalendarpostComponent() {
    }
    CalendarpostComponent.prototype.ngOnInit = function () {
    };
    CalendarpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendarpost',
            template: __webpack_require__(/*! ./calendarpost.component.html */ "./src/app/components/resource/calendar/calendarpost/calendarpost.component.html"),
            styles: [__webpack_require__(/*! ./calendarpost.component.css */ "./src/app/components/resource/calendar/calendarpost/calendarpost.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarpostComponent);
    return CalendarpostComponent;
}());



/***/ }),

/***/ "./src/app/components/resource/services/services.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/resource/services/services.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resource/services/services.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/resource/services/services.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"text-center container\">\n\n<br>\n\n\n<div class=\"btn-light text-center\">\n      <div class=\"btn-light card-header\">\n         <div class=\"display-1\">SERVICES</div>\n      </div>\n          <!-- CSS Code: Place this code in the document's head (between the 'head' tags) -->\n<style>\ntable.GeneratedTable {\n  width: 100px;\n  background-color: #ffffff;\n  border-collapse: collapse;\n  border-width: 0px;\n  border-color: #ffffff;\n  border-style: solid;\n  color: #000000;\n}\n\ntable.GeneratedTable td, table.GeneratedTable th {\n  border-width: 0px;\n  border-color: #ffffff;\n  border-style: solid;\n  padding: 3px;\n}\n\ntable.GeneratedTable thead {\n  background-color: #ffffff;\n}\n</style>\n\n<!-- CSS Code: Place this code in the document's head (between the 'head' tags) -->\n<style>\ntable.GeneratedTable {\n  width: 100%;\n  background-color: #ffffff;\n  border-collapse: collapse;\n  border-width: 0px;\n  border-color: #ffffff;\n  border-style: solid;\n  color: #000000;\n}\n\ntable.GeneratedTable td, table.GeneratedTable th {\n  border-width: 0px;\n  border-color: #ffffff;\n  border-style: solid;\n  padding: 0px;\n}\n\ntable.GeneratedTable thead {\n  background-color: #ffffff;\n}\n</style>\n\n<!-- HTML Code: Place this code in the document's body (between the 'body' tags) where the table should appear -->\n<table align=\"center\" class=\"GeneratedTable\">\n  <thead>\n    <tr>\n      <th class=\"btn-success\" data-toggle=\"collapse\" data-target=\"#Web\" aria-expanded=\"false\" aria-controls=\"Web\">WEB</th>\n      <th class=\"btn-dark\" data-toggle=\"collapse\" data-target=\"#Grafix\" aria-expanded=\"false\" aria-controls=\"Grafix\">GRAFIX</th>\n      <th class=\"btn-secondary\" data-toggle=\"collapse\" data-target=\"#Events\" aria-expanded=\"false\" aria-controls=\"Events\">EVENTS</th>\n      <th class=\"btn-danger\" data-toggle=\"collapse\" data-target=\"#Entertainment\" aria-expanded=\"false\" aria-controls=\"Entertainment\">ENTERTAINMENT</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      \n        \n  \n      <td class=\"btn-outline-success\" data-toggle=\"collapse\" data-target=\"#Maintenance\" aria-expanded=\"false\" aria-controls=\"Maintenance\">Web Maintenance</td>\n      <td class=\"btn-outline-dark\" data-toggle=\"collapse\" data-target=\"#Logo\" aria-expanded=\"false\" aria-controls=\"Logo\">Logo Design</td>\n      <td class=\"btn-outline-secondary\" data-toggle=\"collapse\" data-target=\"#Coordination\" aria-expanded=\"false\" aria-controls=\"Coordination\">Event Coordination</td>\n      <td class=\"btn-outline-danger\" data-toggle=\"collapse\" data-target=\"#Services\" aria-expanded=\"false\" aria-controls=\"Services\">Artist Services</td>\n    </tr>\n    <tr>\n      <td class=\"btn-outline-success\" data-toggle=\"collapse\" data-target=\"#Website\" aria-expanded=\"false\" aria-controls=\"Website\">Website Design</td>\n      <td class=\"btn-outline-dark\" data-toggle=\"collapse\" data-target=\"#Flyer\" aria-expanded=\"false\" aria-controls=\"Flyer\">Flyer Design</td>\n      <td class=\"btn-outline-secondary\" data-toggle=\"collapse\" data-target=\"#Assistance\" aria-expanded=\"false\" aria-controls=\"Assistance\">Executive Assistance</td>\n      <td class=\"btn-outline-danger\" data-toggle=\"collapse\" data-target=\"#Curation\" aria-expanded=\"false\" aria-controls=\"Curation\">Event Curation</td>\n    </tr>\n    <tr>\n      <td class=\"btn-outline-success\" data-toggle=\"collapse\" data-target=\"#webConsulting\" aria-expanded=\"false\" aria-controls=\"webConsulting\">Web Consulting</td>\n      <td class=\"btn-outline-dark\" data-toggle=\"collapse\" data-target=\"#Templates\" aria-expanded=\"false\" aria-controls=\"Templates\">Business Templates</td>\n      <td class=\"btn-outline-secondary\" data-toggle=\"collapse\" data-target=\"#Consulting\" aria-expanded=\"false\" aria-controls=\"Consulting\">Event Consulting</td>\n      <td class=\"btn-outline-danger\" data-toggle=\"collapse\" data-target=\"#Ad\" aria-expanded=\"false\" aria-controls=\"Ad\">Ad Space</td>\n    </tr>\n   \n  </tbody>\n</table>\n\n\n\n\n\n<div class=\"collapse\" id=\"Maintenance\">\n  <div class=\"card card-body\">\n    MAINTENANCE pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Website\">\n  <div class=\"card card-body\">\n    WEBSITE cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"webConsulting\">\n  <div class=\"card card-body\">\n    WEB CONSULTING cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Logo\">\n  <div class=\"card card-body\">\n    LOGO pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Flyer\">\n  <div class=\"card card-body\">\n    FLYER pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Templates\">\n  <div class=\"card card-body\">\n    TEMPLATES pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Coordination\">\n  <div class=\"card card-body\">\n    COORDINATION pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Assistance\">\n  <div class=\"card card-body\">\n    ASSISTANCE pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Consulting\">\n  <div class=\"card card-body\">\n    CONSULTING pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Services\">\n  <div class=\"card card-body\">\n    SERVICES pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Curation\">\n  <div class=\"card card-body\">\n    CURATION pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n<div class=\"collapse\" id=\"Ad\">\n  <div class=\"card card-body\">\n    AD pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  \n    <br>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n          <div class=\"display-4 btn btn-outline-success\" routerLink=\"/user/:uid/:vid/community/myvlog/preview\">REQUEST BID</div>\n        </div>\n        <div class=\"col-4\"></div>\n  </div>\n  </div>\n</div>\n\n\n \n  </div>\n\n\n\n\n\n\n\n<div class=\"btn-dark text-center\">\n      <div class=\"card-header\">\n         <div class=\"display-4\">G.|KODE</div>\n      </div><br>\n          <div class=\"row\">\n             <div class=\"col-4\">\n                <div class=\"display-4 float-right\"><i><sup><strong>threads</strong></sup></i></div>\n             </div>\n                  <div class=\"col-4\">\n                    <p>short description of site, mission, etc. Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>\n                   </div>\n\n\n                      <div class=\"col-4\">\n                          <div class=\"container-fluid\"><img id=\"LSE\" width=\"235\" height=\"75\" src=\"../../../images/LSE4.jpg\"></div><br>\n                     </div>\n  \n\n          </div>\n  </div>\n<br>\n\n\n\n\n  \n\n\n\n\n\n<br>\n\n\n<div class=\"btn-danger text-center\">\n      <div class=\"card-header\">\n         <div class=\"display-4\">BUSINESS LINKS</div>\n\n         <hr>\n<div class=\"row\">\n  \n  <div class=\"text-left col-3\">\n    <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Events</label>\n      </div><br>\n       <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Education</label>\n      </div><br>\n  </div>\n\n\n  <div class=\"text-left col-3\">\n          <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n        <label class=\"form-check-label\" for=\"inlineRadio3\">Item Review</label>\n      </div><br>\n\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio4\" value=\"option4\">\n        <label class=\"form-check-label\" for=\"inlineRadio4\">Small Bizz</label>\n      </div><br>\n    \n  </div>\n\n\n    <div class=\"text-left col-3\">\n\n      <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio5\" value=\"option5\">\n      <label class=\"form-check-label\" for=\"inlineRadio5\">Outdoors</label><br>\n\n  <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio6\" value=\"option6\">\n  <label class=\"form-check-label\" for=\"inlineRadio6\">Family</label><br>\n    \n  </div>\n\n\n    <div class=\"text-left col-3\">\n        <input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option7\">\n  <label class=\"form-check-label\" for=\"inlineRadio7\">Fitness</label><br>\n\n<input class=\"form-check form-check-inline\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option8\">\n  <label class=\"form-check-label\" for=\"inlineRadio8\">Dining</label>\n    \n  </div>\n\n\n</div><br>\n\n      </div><br>\n          <div class=\"row\">\n             <div class=\"col-4\">\n                <div class=\"display-4\">BIZZ</div>\n             </div>\n                  <div class=\"col-4\">\n                    <p>short description of site, mission, etc. Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>\n                   </div>\n\n\n                      <div class=\"col-4\">\n                          <div class=\"container-fluid\"><img id=\"LSE\" width=\"235\" height=\"75\" src=\"../../../images/LSE2.jpg\"></div><br>\n                     </div>\n  \n\n          </div>\n\n\n\n\n\n\n   \n\n </div>\n\n  \n\n\n      <div class=\"btn-dark card-body\">\n        <h5 class=\"card-title\">\"ShoutOut\" AN EXPERIENCE!</h5>\n        <p class=\"card-text\">Share the buried treasures youve found in Boston, post an experience!.</p>\n        <a routerLink=\"/user/:uid/:bid/community/bulletin/post\" class=\"btn btn-primary\">ShoutOut!</a>\n<br><hr>\n      <div class=\"text-muted\">~African Proverb </div>      \n  </div>\n  "

/***/ }),

/***/ "./src/app/components/resource/services/services.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/resource/services/services.component.ts ***!
  \********************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/resource/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/resource/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!--     Container     -->\n\n\t<div class=\"container\">\n\t\t\t\n<div class=\"collapse\" id=\"login\">\t\t\t\n\t\t\t<form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\t\t\t\t<!-- Form Field (Username) -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input required style=\"text-align: center\" type=\"text\" name=\"userName\" placeholder=\"username\" class=\"form-control\" ngModel #userName=\"ngModel\">\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<!-- Form Field (Password) -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input  required style=\"text-align: center\"  type=\"text\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel #password=\"ngModel\">\n\t\t\t\t</div>\t\t\n\n\t\t\t\t<!-- Sumbit Button -->\n\t\t\t\t<button (ngSubmit)=\"login()\" class=\"form btn btn-dark btn-block\">Submit Login</button>\n</form></div>\n\n\n\t\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user.service.client */ "./src/app/Services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    // userService: UserService;
    // router: Router;
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userName = this.loginForm.value.userName;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.userName, this.password).subscribe(function (user) {
            _this.errorFlag = false;
            _this.router.navigate(['user', user._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\n\t<!-- PERSONAL SECTION -->\n\t<div class=\"row\">\n\n\t\t<!-- FORM FIELDS -->\n\t\t<div class=\"btn btn-danger col-4\">\n\t\t\t<h5  align=\"left\" >*PERSONAL</h5>\n\t\t\t\t<!-- Form field bday -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" name=\"birthday\" placeholder=\"birthday\" required ngModel=\"{{user.birthday}}\" #birthday=\"ngModel\" class=\"form-control\">\n\t\t\t\t</div>\t\t\n\t\t\t\t<!-- Form field email -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" required ngModel=\"{{user.email}}\" name=\"email\" placeholder=\"email\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<!-- Form field Username -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" required ngModel=\"{{user.userName}}\" name=\"userName\" placeholder=\"username\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<!-- Form field Password -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"password\" required ngModel=\"{{user.password}}\" name=\"password\" placeholder=\"password\" class=\"form-control\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"verify password\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t<!-- Form field VerifyPassword -->\n\t\t\t\t<div class=\"collapse\" id=\"savePass\">\n\n\t<button class=\"btn btn-light\">show old password</button>\n\n\t\t\t\t\t<a style=\"color: white\" class=\"btn btn-dark\">save new password</a><br>\n\t\t\t\t\t\t\n\t\t\t\n\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\n\t\t\t\t\t<button class=\"btn-block btn-danger\" data-toggle=\"collapse\" data-target=\"#savePass\" aria-expanded=\"false\" aria-controls=\"savePass\">edit password</button>\n\t\t\t\t\n\t\t\t\n\t\t</div>\n\n\t\t\t<!-- PROF PIC & EDIT BUTTON -->\n\t\t\t<div align=\"center\" class=\"col-4\">\n\t\t\t\t<img src=\"../../../images/Prof.png\" alt=\"Prof pic\" width=\"auto\" ><br><p></p><hr><p></p>\n\t\t\t\t\t<a style=\"color: white\" class=\"btn-block btn-danger\" data-toggle=\"collapse\" data-target=\"#Edit\" aria-expanded=\"false\" aria-controls=\"Edit\">Edit Profile</a><br>\n\n\n\t\t\t\t\t<div class=\"collapse\" id=\"Edit\">\n\t\t\t\t\t<a style=\"color: white\" class=\"btn-block btn-dark\">Save Profile</a><br>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<a style=\"color: white\" class=\"btn-block btn-secondary\" data-toggle=\"collapse\" data-target=\"#collapseExample3\" aria-expanded=\"false\" aria-controls=\"collapseExample3\">Show/Hide \"Bizz\"</a><br>\n\n\t\t\t\t\t<a style=\"color: white\" class=\"btn-block btn-success\" data-toggle=\"collapse\" data-target=\"#collapseExample4\" aria-expanded=\"false\" aria-controls=\"collapseExample4\">Show/Hide \"Artz\"</a><p></p><hr><p></p>\n\t\t\t</div>\t\t\t\n\t\t\t\t\n\t\t\t\t<!-- CATEGORIES -->\n\t\t\t\t<div class=\"btn btn-outline-danger col-4\">\n\n\t\t\t\t\t\t<TABLE BORDER=\"0\" WIDTH=\"30%\" ALIGN=\"CENTER\"\n\t\t\t\t\t\t  CELLPADDING=\"0\" CELLSPACING=\"0\"\n\t\t\t\t\t\t  >\n\t\t\t\t\t\t <TR>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Bike<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Car<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Bus<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Rocket<br></TD>\n\t\t\t\t\t\t </TR>\n\t\t\t\t\t\t <TR>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Plane<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Wing<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Cartwheel<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Glider<br></TD>\n\t\t\t\t\t\t </TR> \n\t\t\t\t\t\t    <TR> \n\t\t\t\t\t\t \t<TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Plane<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Wing<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Cartwheel<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Glider<br></TD>\n\t\t\t\t\t\t </TR>\n\t\t\t\t\t\t <TR> \n\t\t\t\t\t\t \t<TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Plane<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Wing<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Cartwheel<br></TD>\n\t\t\t\t\t\t   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Glider<br></TD>\n\t\t\t\t\t\t </TR>\n\t\t\t\t\t\t</TABLE>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t</div>\n\n\n\n\n<div class=\"collapse\" id=\"collapseExample3\">\n \n<div class=\"container\">\n\t<div class=\"row\">\n\t\t\t<div class=\"btn btn-secondary col-4\">\n\t\t\t<h5  align=\"center\" >BUSINESS</h5>\n\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"business contact\" ngModel=\"{{user.businessContact}}\" placeholder=\"business contact\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!--  -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\t\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" ngModel=\"{{user.businessTitle}}\" name=\"title\" placeholder=\"business title\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!--  -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessName\" ngModel=\"{{user.businessName}}\" placeholder=\"business name\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!--  -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessAddress\" ngModel=\"{{user.businessAddress}}\" placeholder=\"business address\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!--  -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\n\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessIndustry\" ngModel=\"{{user.businessIndustry}}\" placeholder=\"business Industry\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!--  -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessWebsite\" ngModel=\"{{user.businessWebsite}}\" placeholder=\"businessWebsite\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!--  -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessPhone\" ngModel=\"{{user.businessPhone}}\" placeholder=\"business phone\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!--  -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\n\n\t\t\t</div>\n\t\t\t\t<div align=\"center\" class=\"col-4\">\n\t\t\t\t\t<br>\n\t\t\t\t<img src=\"../../../images/Agency.jpg\" alt=\"Agency pic\" width=\"auto\" ><p></p><hr><p></p>\n\t\t\t\t<img src=\"../../../images/Agency.jpg\" alt=\"Agency pic\" width=\"auto\" >\n\t\t\t</div>\t\t\t\t\n\t\t\t<div class=\"btn btn-outline-secondary col-4\">\n\t\t\t\t<TABLE BORDER=\"0\" WIDTH=\"30%\" ALIGN=\"CENTER\"\n  CELLPADDING=\"0\" CELLSPACING=\"0\"\n  >\n <TR>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Bike<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Car<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Bus<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Rocket<br></TD>\n </TR>\n <TR>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Plane<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Wing<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Cartwheel<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Glider<br></TD>\n </TR> \n    <TR> \n \t<TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Plane<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Wing<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Cartwheel<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Glider<br></TD>\n </TR>\n <TR> \n \t<TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Plane<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Wing<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Cartwheel<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Glider<br></TD>\n </TR>\n</TABLE>\n\t\t\t</div>\n\t</div>\n<hr>\n</div>\n</div>\n\n\n\n<div class=\"collapse\" id=\"collapseExample4\">\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t\t<div class=\"btn btn-success col-4\">\n\t\t\t<h5  align=\"right\" >ARTIST</h5>\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!-- Form field Username -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"email\" placeholder=\"email\" class=\"form-control\">\n\t\t\t\t\t</div>\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!-- Form field Username -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"social media url 1\" placeholder=\"social media url 1\" class=\"form-control\">\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!-- Form field Username -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"social media url 2\" placeholder=\"social media url 2\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!-- Form field Username -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"social media url 3\" placeholder=\"social media url 3\" class=\"form-control\">\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!-- Form field Username -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"website\" placeholder=\"website\" class=\"form-control\">\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<!-- Form field Username -->\n\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"phone\" placeholder=\"phone\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t</div>\n\t\t\t<div align=\"center\" class=\"col-4\"><br>\n\t\t\t\t<img src=\"../../../images/artist.jpg\" alt=\"Artist pic\" width=\"auto\" >\n\t\t\t\t<p></p><hr><p></p>\n\t\t\t\t<img src=\"../../../images/artist.jpg\" alt=\"Artist pic\" width=\"auto\" >\n\t\t\t</div>\t\t\t\t\n\t\t\t<div class=\"btn btn-outline-success col-4\">\n\t\t\t\t<TABLE BORDER=\"0\" WIDTH=\"30%\" ALIGN=\"CENTER\"\n  CELLPADDING=\"0\" CELLSPACING=\"0\"\n  >\n <TR>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Bike<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Car<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Bus<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Rocket<br></TD>\n </TR>\n <TR>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Plane<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Wing<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Cartwheel<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Glider<br></TD>\n </TR> \n    <TR> \n \t<TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Plane<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Wing<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Cartwheel<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Glider<br></TD>\n </TR>\n <TR> \n \t<TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Plane<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Wing<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Cartwheel<br></TD>\n   <TD><input type=\"checkbox\" name=\"bike\" value=\"bike\">Glider<br></TD>\n </TR>\n</TABLE>\n\t\t\t</div>\n\t</div></div>\n<hr>\n</div>\n\n\n \n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user.service.client */ "./src/app/Services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usernameTaken = false;
        this.submitSuccess = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            // console.log(this.uid);
            _this.userService.findUserById(_this.uid).subscribe(function (user) {
                console.log(user);
                _this.user = user;
                // personal
                _this.birthday = _this.user.birthday;
                _this.email = _this.user.email;
                _this.userName = _this.user.userName;
                _this.firstName = _this.user.firstName;
                _this.lastName = _this.user.lastName;
                _this.password = _this.user.password;
                // business
                _this.businessContact = _this.user.businessContact;
                _this.businessTitle = _this.user.businessTitle;
                _this.businessName = _this.user.businessName;
                _this.businessAddress = _this.user.businessAddress;
                _this.businessIndustry = _this.user.businessIndustry;
                _this.businessWebsite = _this.user.businessWebsite;
                _this.businessEmail = _this.user.businessEmail;
                _this.businessPhone = _this.user.businessPhone;
                // artist
                _this.artistName = _this.user.artistName;
                _this.artistEmail = _this.user.artistEmail;
                _this.socialMedia1 = _this.user.socialMedia1;
                _this.socialMedia2 = _this.user.socialMedia2;
                _this.socialMedia3 = _this.user.socialMedia3;
                _this.artistWebsite = _this.user.artistWebsite;
                _this.artistPhone = _this.user.artistPhone;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Container -->\n<div class=\"container\">\n\t<div class=\"row container-fluid\">\n\t\t<!-- Register label -->\n\t\t<div class=\"col-3\"><h2  align=\"center\">Register</h2></div>\n\t\t<div class=\"col-3\"><button class=\"container-fluid btn btn-danger\" data-toggle=\"popover\" title=\"show/hide personal panel\" data-toggle=\"collapse\" data-target=\"#register\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n\t\tPERSONAL</button></div>\n\t\t<div class=\"col-3\">\t<button class=\"container-fluid btn btn-secondary\" data-toggle=\"popover\" title=\"show/hide personal panel\" data-toggle=\"collapse\" data-target=\"#collapseExample1\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n\t\tBUSINESS</button></div>\n\t\t<div class=\"col-3\">\t<button class=\"container-fluid btn btn-success\" data-toggle=\"popover\" title=\"show/hide personal panel\" data-toggle=\"collapse\" data-target=\"#collapseExample2\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n\t\tARTIST</button></div>\n\t</div>\n\t<br>\n\t<div *ngIf=\"usernameError\" class='alert alert-danger'>The username is taken, please try another one</div>\n\t<div *ngIf=\"passwordError\" class='alert alert-danger'>The passwords you entered are matched</div>\n\t<form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\t\t<div class=\"collapse\" id=\"register\">\n\t\t\t<div class=\"card card-body\">\n\t\t\t\t<!-- PERSONAL SECTION -->\n\t\t\t\t<div class=\"btn btn-danger container container-fluid\"> \n\t\t\t\t\t<h5  class=\"display-4\" align=\"left\" >*PERSONAL</h5>\n\t\t\t\t\t<!-- Form field birthday -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"date\" name=\"birthday\" placeholder=\"birthday\" required ngModel #birthday=\"ngModel\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Form field email -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"email\" name=\"email\" placeholder=\"email\" required ngModel #email=\"ngModel\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Form field username -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" name=\"userName\" required ngModel #userName=\"ngModel\" placeholder=\"username\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Form field firstname -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" name=\"firstName\" required ngModel #firstName=\"ngModel\" placeholder=\"firstName\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Form field lastname -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" name=\"lastName\" required ngModel #lastName=\"ngModel\" placeholder=\"lastName\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Form field password -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"password\" required ngModel #password=\"ngModel\"  class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--  Form field verify password  -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" name=\"verifyPassword\" required ngModel #verifyPassword=\"ngModel\"  placeholder=\"verify password\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br><br>\n\t\t</div>\n\t\t<div class=\"collapse\" id=\"collapseExample1\">\n\t\t\t<div class=\"card card-body\">\n\t\t\t\t<!-- BUSINESS SECTION -->\n\t\t\t\t<div class=\"btn btn-secondary container container-fluid\"> \n\t\t\t\t\t<h5  class=\"display-4\" align=\"center\" >BUSINESS</h5>\n\t\t\t\t\t<!-- form field business contact -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessContact\" ngModel #businessContact=\"ngModel\"  placeholder=\"business contact\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- form field title -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessTitle\" ngModel #businessTitle=\"ngModel\" placeholder=\"business title\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- form field organization -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessName\" ngModel #businessName=\"ngModel\"  placeholder=\"busines name\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- form field address -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessAddress\" ngModel #businessAddress=\"ngModel\" placeholder=\"business address\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- form field industry -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" name=\"businessIndustry\" ngModel #businessIndustry=\"ngModel\" placeholder=\"business industry\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- form field website -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" ngModel #businessWebsite=\"ngModel\" name=\"businessWebsite\" placeholder=\"business website\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- form field bizz email -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" ngModel #businessEmail=\"ngModel\" name=\"businessEmail\" placeholder=\"business email\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- form field phone -->\n\t\t\t\t\t<div  class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: center\"type=\"text\" ngModel #businessPhone=\"ngModel\" name=\"businessPhone\" placeholder=\"business phone\" class=\"form-control\">\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br><br>\n\t\t</div>\n\t<!-- ARTIST SECTION -->\n\t\t<div class=\"collapse\" id=\"collapseExample2\">\n\t\t\t<div class=\"card card-body\">\n\t\t\t\t<div class=\"btn btn-success container container-fluid\"> \n\t\t\t\t\t<h5  class=\"display-4\" align=\"right\" >ARTIST</h5>\n\t\t\t\t\t<!-- form field email -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"artistName\" ngModel #artistName=\"ngModel\" placeholder=\"artist name\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"artistEmail\" ngModel #artistEmail=\"ngModel\" placeholder=\"artist email\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Form field social media url 1 -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"socialMedia1\" ngModel #socialMedia1=\"ngModel\" placeholder=\"social media url 1\" class=\"form-control\">\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<!-- Form field social media url 2 -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"socialMedia2\" ngModel #socialMedia2=\"ngModel\" placeholder=\"social media url 2\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Form field social media url 3 -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"socialMedia3\" ngModel #socialMedia3=\"ngModel\" placeholder=\"social media url 3\" class=\"form-control\">\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<!-- Form field website -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"artistWebsite\" ngModel #artistWebsite=\"ngModel\" placeholder=\"artist website\" class=\"form-control\">\n\t\t\t\t\t</div>\t\t\t\n\n\t\t\t\t\t<!-- Form field phone -->\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input style=\"text-align: right\" type=\"text\" name=\"artistPhone\" ngModel #artistPhone=\"ngModel\" placeholder=\"artist phone\" class=\"form-control\">\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br><br>\n\t\t</div>\n\t\t<!-- SUBMIT SECTION -->\n\t\t<!--   Register Button   -->\n\t\t<button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-dark\">Register</button>\n\t\t<!--    Cancel  Button   -->\n\t\t<a class= \"btn btn-secondary\" routerLink=\"/login\">Cancel</a>\n\t</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user.service.client */ "./src/app/Services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.passwordError = false;
        this.usernameError = false;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        // personal
        this.birthday = this.registerForm.value.birthday;
        this.email = this.registerForm.value.email;
        this.userName = this.registerForm.value.userName;
        this.firstName = this.registerForm.value.firstName;
        this.lastName = this.registerForm.value.lastName;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        // business
        this.businessContact = this.registerForm.value.businessContact;
        this.businessTitle = this.registerForm.value.businessTitle;
        this.businessName = this.registerForm.value.businessName;
        this.businessAddress = this.registerForm.value.BusinessAddress;
        this.businessIndustry = this.registerForm.value.businessIndustry;
        this.businessWebsite = this.registerForm.value.businessWebsite;
        this.businessEmail = this.registerForm.value.businessEmail;
        this.businessPhone = this.registerForm.value.businessPhone;
        // artist
        this.artistName = this.registerForm.value.artistName;
        this.artistEmail = this.registerForm.value.artistEmail;
        this.socialMedia1 = this.registerForm.value.socialMedia1;
        this.socialMedia2 = this.registerForm.value.socialMedia2;
        this.socialMedia3 = this.registerForm.value.socialMedia3;
        this.artistWebsite = this.registerForm.value.artistWebsite;
        this.artistPhone = this.registerForm.value.artistPhone;
        if (this.password !== this.verifyPassword) {
            this.passwordError = true;
        }
        else {
            this.passwordError = false;
            this.userService.findUserByUsername(this.userName).subscribe(function (user) {
                _this.usernameError = true;
            }, function (error) {
                var newUser = {
                    _id: "",
                    birthday: _this.birthday,
                    email: _this.email,
                    userName: _this.userName,
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    password: _this.password,
                    businessContact: _this.businessContact,
                    businessTitle: _this.businessTitle,
                    businessName: _this.businessName,
                    businessAddress: _this.businessAddress,
                    businessIndustry: _this.businessIndustry,
                    businessWebsite: _this.businessWebsite,
                    businessEmail: _this.businessEmail,
                    businessPhone: _this.businessPhone,
                    // artist
                    artistName: _this.artistName,
                    artistEmail: _this.artistEmail,
                    socialMedia1: _this.socialMedia1,
                    socialMedia2: _this.socialMedia2,
                    socialMedia3: _this.socialMedia3,
                    artistWebsite: _this.artistWebsite,
                    artistPhone: _this.artistPhone
                };
                _this.userService.createUser(newUser).subscribe(function (user) {
                    var id = user._id;
                    _this.router.navigate(['user', id]);
                });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: "http://localhost:3100"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\student\Desktop\Assignments\ONELSE\ONELSE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map