webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".spacer{\n  margin-left: 10px;\n}\n.vert_spacer_home{\n  display: block;\n  margin-top: 200px;\n}\n.ad_text{\n  font-size: 0.8em;\n}\n\n.flashing{\n  color: rgb(255,0,154);\n}\n\n.btn-primary{\n  background: rgb(207,166,40);\n  border-color: rgb(175,142,40);\n}\n\n.btn-primary:hover{\n  background: rgb(162,127,22);\n  border-color: rgb(136,108,21);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "/* Some bootstrap overrides for coloring */\n.navbar-light{\n  background: rgb(207,166,40);\n  margin-bottom: 25px;\n}\n\n.navbar-brand, a.nav-link, .nav.navbar-nav li a {\n   color: rgb(34,34,34) !important;\n }\n\na.active, .navbar-brand:hover, .navbar-brand:focus, a.nav-link:hover, a.nav-link:focus {\n color: white !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".vert_spacer{\n  margin-bottom: 50px;\n}\n.vert_spacer2{\n  margin-bottom: 25px;\n}\n.spacer{\n  margin-left: 5px;\n}\n.up_down_buttons{\n  width: 50px;\n  text-align: center;\n}\n\n.selector_size{\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  text-align: center;\n  width: 100px;\n  height: 25px;\n}\n\n.giant_text{\n  font-size: 20em;\n}\n.tiny_text{\n  font-size: 0px;\n}\n.ad_text{\n  font-size: 0.8em;\n}\n.pop_text{\n  color: rgb(207,166,40);\n  font-size: 1.5em;\n  margin-left: 1px;\n}\n.big_space{\n  margin-top: 351px;\n}\n\n.flashing{\n  /*background-color: rgb(207,39,39);*/\n  background-color: rgb(255,0,154);\n}\n\n.normal{\n  background: rgb(48,48,48);\n}\n\n/* Bootstrap overrides */\n.btn-primary{\n  background: rgb(207,166,40);\n  border-color: rgb(175,142,40);\n}\n\n.btn-primary:hover{\n  background: rgb(162,127,22);\n  border-color: rgb(136,108,21);\n}\n\n.checkbox{\n  margin-bottom: 20px;\n}\n\n/* Standard overrides */\np{\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".vert_spacer{\n  margin-bottom: 50px;\n}\n.vert_spacer2{\n  margin-bottom: 25px;\n}\n.spacer{\n  margin-left: 5px;\n}\n.up_down_buttons{\n  width: 50px;\n  text-align: center;\n}\n.selector_size{\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  text-align: center;\n  width: 100px;\n  height: 25px;\n}\n\n.giant_text{\n  font-size: 20em;\n}\n.tiny_text{\n  font-size: 0px;\n}\n.ad_text{\n  font-size: 0.8em;\n}\n.pop_text{\n  color: rgb(207,166,40);\n  font-size: 1.5em;\n  margin-left: 1px;\n}\n.big_space{\n  margin-top: 351px;\n}\n\n.flashing{\n  /*background-color: rgb(207,39,39);*/\n  background-color: rgb(255,0,154);\n}\n\n.normal{\n  background: rgb(48,48,48);\n}\n\n/* Bootstrap override */\n.btn-primary{\n  background: rgb(207,166,40);\n  border-color: rgb(175,142,40);\n}\n\n.btn-primary:hover{\n  background: rgb(162,127,22);\n  border-color: rgb(136,108,21);\n}\n\n.checkbox{\n  margin-bottom: 20px;\n}\n\n/* Standard overrides */\np{\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>DB Timer</h1>\n  <p class=\"lead\">Pick a gamemode:</p>\n  <div>\n    <a class=\"btn btn-secondary\" [routerLink]=\"['/objective']\">Objective Mode</a> <a class=\"spacer btn btn-primary\" [routerLink]=\"['/stopwatch']\">Stopwatch Mode</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>A simple spawn timer.</h3>\n    <p>A simple yet effective web application for helping you remember your spawn times in Dirty Bomb.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Sounds & visuals included.</h3>\n    <p>Want a countdown? You've got it. Visual queues? Also included. Focus on your game and let DB Timer do the work.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Don't like loud beeps?</h3>\n    <p>Feel free to mute them! The integrated settings let you change sounds and visual queues on the fly.</p>\n  </div>\n  <!-- <div class=\"col-md-3\">\n    <h3>What are you waiting for?</h3>\n    <p>Check it out! See if it helps you improve your game.</p>\n  </div> -->\n</div>\n<div class=\"col-md-12 vert_spacer2\">\n  <h6 class=\"text-center vert_spacer2\">DB Timer — created by <a href=\"https://github.com/petfelt/\">Peter Felton</a>. — v 0.9.4.</h6>\n</div>\n\n<!-- <div class=\"col-md-12 vert_spacer2 text-center\">\n  <br><br><h3>If you have any tips/potential improvements, direct message me on <a href=\"https://www.reddit.com/u/Rauthospoon/\">Reddit!</a></h3>\n  <br><h6><u>Potential Future Updates:</u></h6>\n  <h6>- Fix sounds not playing on mobile (iOS tested, still broken)</h6>\n  <h6>- Fix sounds not playing on occasion (Problem found, just needs fix)</h6>\n  <h6>- Add frequency choices for sounds</h6>\n  <h6>- Save / Load settings feature (Important for when complexity arrives)</h6>\n  <h6>- Keybindings for reset timer / settings changes</h6>\n  <h6>- (Objective Mode) Make sure Objective timer(s) are accurate times (Currently 3.5s per player)</h6>\n  <h6>- (Objective Mode) Enemy spawn timer option with own settings, etc. (May prove more work than worth)</h6>\n  <h6><i>(These are in no particular order.)</i></h6><br><br>\n</div> -->\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<!-- New navbar -->\n<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <a class=\"navbar-brand\" href=\"#\">DB Timer</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbar\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#/objective\">Objective</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#/stopwatch\">Stopwatch</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!-- Old navbar -->\n<!-- <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Go Home.</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/objective']\">Objective</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/stopwatch']\">Stopwatch</a></li>\n          </ul>\n        </div>\n      </div>\n</nav> -->\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div id=\"background\" class=\"jumbotron text-center\">\n  <p>Time Left:</p>\n  <h1 id=\"timer\" class=\"giant_text text-center\">{{tick}}</h1>\n  <div>\n    <a class=\"btn btn-primary vert_spacer\" (click)=\"resetTime()\">Reset Timer</a>\n  </div>\n\n  <p>Objective Settings</p>\n\n  <div class=\"vert_spacer2\">\n    <a class=\"btn btn-primary up_down_buttons\" (click)=\"timeDown()\">-</a>\n    <a class=\"spacer btn btn-secondary\" (click)=\"pausePlayTime()\">{{pauseText}}</a>\n    <a class=\"spacer btn btn-primary up_down_buttons\" (click)=\"timeUp()\">+</a>\n  </div>\n\n  <h5>Players:</h5>\n  <select (change)=\"changePlayerCount($event.target.value)\" class=\"form-control selector_size\" id=\"players\">\n    <option value=\"1\">1</option>\n    <option value=\"2\">2</option>\n    <option value=\"3\">3</option>\n    <option value=\"4\">4</option>\n    <option value=\"5\">5</option>\n    <option value=\"6\">6</option>\n    <option value=\"7\">7</option>\n    <option selected value=\"8\">8</option>\n  </select>\n\n  <div class=\"checkbox\">\n    <label><input selected type=\"checkbox\" id=\"numbers\" name=\"optradio\" (click)=\"changeSettings('numbers')\">Show Numbers</label>\n  </div>\n  <div class=\"checkbox\">\n    <label><input selected type=\"checkbox\" id=\"flashing\" name=\"optradio\" (click)=\"changeSettings('flashing')\">Warning Flashes</label>\n  </div>\n  <div class=\"checkbox vert_spacer\">\n    <label><input selected type=\"checkbox\" id=\"sounds\" name=\"optradio\" (click)=\"changeSettings('sounds')\">Play Sounds</label>\n  </div>\n\n  <h5>Number of Beeps:</h5>\n  <select (change)=\"changeBeepCount($event.target.value)\" class=\"form-control selector_size vert_spacer\" id=\"players\">\n    <option value=\"2\">2</option>\n    <option value=\"3\">3</option>\n    <option value=\"4\">4</option>\n    <option selected value=\"5\">5</option>\n    <option value=\"6\">6</option>\n    <option value=\"7\">7</option>\n    <option value=\"8\">8</option>\n    <option value=\"10\">10</option>\n  </select>\n\n  <p>Volume at <span class=\"pop_text\">{{myVolume}}%</span>.</p>\n  <!-- Freaking sliders + Angular 2. I'll get back to this. -->\n  <!-- <input id=\"vol-control\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"25\"> -->\n  <h5>Change Volume:</h5>\n  <input class=\"selector_size form-control vert_spacer\" type=\"text\" id=\"vol-control\" value=\"25\" (change)=\"changeVolume($event.target.value)\">\n\n  <h5>Change Beep Sound:</h5>\n  <select (change)=\"changeSound($event.target.value)\" class=\"form-control selector_size vert_spacer\" id=\"soundEffect\">\n    <option selected value=\"0\">Default Beeps</option>\n    <option value=\"1\">Sci-Fi Respawn</option>\n    <option value=\"2\">Glitch In The DB</option>\n    <option value=\"3\">8-Bit Throwback</option>\n    <option value=\"4\">Car Horns</option>\n  </select>\n\n</div>\n\n\n<div class=\"col-md-12 vert_spacer2\">\n  <h6 class=\"text-center\">DB Timer — created by <a href=\"https://github.com/petfelt/\">Peter Felton</a>. — v 0.9.4.</h6>\n</div>\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"background\" class=\"jumbotron text-center\">\n  <p>Time Left:</p>\n  <h1 id=\"timer\" class=\"giant_text\">{{tick}}</h1>\n  <div>\n    <a class=\"btn btn-primary vert_spacer\" (click)=\"resetTime()\">Reset Timer</a>\n  </div>\n\n    <p>Stopwatch Settings</p>\n    <div class=\"vert_spacer2\">\n      <a class=\"btn btn-primary up_down_buttons\" (click)=\"timeDown()\">-</a>\n      <a class=\"spacer btn btn-secondary\" (click)=\"pausePlayTime()\">{{pauseText}}</a>\n      <a class=\"spacer btn btn-primary up_down_buttons\" (click)=\"timeUp()\">+</a>\n    </div>\n\n\n\n\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" id=\"numbers\" name=\"optradio\" (click)=\"changeSettings('numbers')\">Show Numbers</label>\n      </div>\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" id=\"flashing\" name=\"optradio\" (click)=\"changeSettings('flashing')\">Warning Flashes</label>\n      </div>\n      <div class=\"checkbox vert_spacer\">\n        <label><input type=\"checkbox\" id=\"sounds\" name=\"optradio\" (click)=\"changeSettings('sounds')\">Play Sounds</label>\n      </div>\n\n      <h5>Number of Beeps:</h5>\n      <select (change)=\"changeBeepCount($event.target.value)\" class=\"form-control selector_size vert_spacer\" id=\"players\">\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option selected value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"10\">10</option>\n      </select>\n\n      <p>Volume at <span class=\"pop_text\">{{myVolume}}%</span>.</p>\n      <!-- Freaking sliders + Angular 2. I'll get back to this. -->\n      <!-- <input id=\"vol-control\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"25\"> -->\n      <h5>Change Volume:</h5>\n      <input class=\"selector_size form-control vert_spacer\" type=\"text\" id=\"vol-control\" value=\"25\" (change)=\"changeVolume($event.target.value)\">\n\n      <h5>Change Beep Sound:</h5>\n      <select (change)=\"changeSound($event.target.value)\" class=\"form-control selector_size vert_spacer\" id=\"soundEffect\">\n        <option selected value=\"0\">Default Beeps</option>\n        <option value=\"1\">Sci-Fi Respawn</option>\n        <option value=\"2\">Glitch In The DB</option>\n        <option value=\"3\">8-Bit Throwback</option>\n        <option value=\"4\">Car Horns</option>\n      </select>\n</div>\n<div class=\"col-md-12 vert_spacer2\">\n  <h6 class=\"text-center\">DB Timer — created by <a href=\"https://github.com/petfelt/\">Peter Felton</a>. — v 0.9.4.</h6>\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (this.authToken != null) {
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(102);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(167),
        styles: [__webpack_require__(161)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_objective_objective_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_stopwatch_stopwatch_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'stopwatch', component: __WEBPACK_IMPORTED_MODULE_9__components_stopwatch_stopwatch_component__["a" /* StopwatchComponent */] },
    { path: 'objective', component: __WEBPACK_IMPORTED_MODULE_8__components_objective_objective_component__["a" /* ObjectiveComponent */] },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_objective_objective_component__["a" /* ObjectiveComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_stopwatch_stopwatch_component__["a" /* StopwatchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */], { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(168),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(169),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObjectiveComponent = (function () {
    function ObjectiveComponent() {
        this.numPlayers = 8;
        this.myTime = 3.5 * this.numPlayers;
        this.beepCount = 5;
        this.tick = this.myTime;
        this.tempNum = this.myTime - Math.floor(this.myTime);
        this.sound1 = new Audio('');
        this.sound2 = new Audio('');
        this.myVolume = 25;
        this.pauseTime = 0;
        this.pauseBool = false;
        this.pauseText = "Pause Timer";
        if (this.sound1.canPlayType('audio/mpeg')) {
            this.sound1 = new Audio('/assets/0_countdown.mp3');
        }
        if (this.sound2.canPlayType('audio/mpeg')) {
            this.sound2 = new Audio('/assets/0_spawn.mp3');
        }
        this.sound1.volume = 0.25;
        this.sound2.volume = 0.25;
        this.myVolume = 25;
    }
    ObjectiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer2 = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(0, (this.tempNum * 1000));
        this.subscription = timer2.subscribe(function (t) {
            _this.decimalWork(t);
        });
        this.resetSettings();
    };
    ObjectiveComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ObjectiveComponent.prototype.checkTime = function (t) {
        var _this = this;
        // Actually changing the time.
        if (this.tick <= 0) {
            document.getElementById('background').classList.remove('flashing');
            this.subscription.unsubscribe();
            this.tick = this.myTime;
            var timer2 = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(0, (this.tempNum * 1000));
            this.subscription = timer2.subscribe(function (t) {
                _this.decimalWork(t);
            });
        }
        else {
            this.tick--;
        }
        this.pauseTime = t % (this.tick + 1);
        // Check for user selections for sounds/flashing & play sounds/flash.
        if ((this.tick <= this.beepCount && this.tick > 0)) {
            if (document.getElementById('flashing').getAttribute("checked") == "false") {
                document.getElementById('background').classList.toggle('flashing');
            }
            if (document.getElementById('sounds').getAttribute("checked") == "false") {
                this.sound1.play();
            }
        }
        else {
            document.getElementById('background').classList.remove('flashing');
        }
        if (this.tick == 0 && (document.getElementById('sounds').getAttribute("checked") == "false")) {
            this.sound2.play();
            if (document.getElementById('flashing').getAttribute("checked") == "false") {
                document.getElementById('background').classList.add('flashing');
            }
        }
    };
    ObjectiveComponent.prototype.decimalWork = function (t) {
        var _this = this;
        if (t > 0) {
            this.tick = 1 + (Math.floor(this.tick));
            this.subscription.unsubscribe();
            var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(0, 1000);
            this.subscription = timer.subscribe(function (t) {
                _this.checkTime(t);
            });
        }
    };
    ObjectiveComponent.prototype.timeUp = function () {
        this.tick++;
    };
    ObjectiveComponent.prototype.timeDown = function () {
        this.tick--;
    };
    ObjectiveComponent.prototype.pausePlayTime = function () {
        var _this = this;
        this.pauseText = "Play Timer!";
        // Unsubscribe every time just in case.
        this.subscription.unsubscribe();
        // If time for unpause...
        if (this.pauseBool == true) {
            // Subscribe again, but make the time start at a later time.
            var temp_1 = this.pauseTime;
            this.tick = Math.floor(this.tick);
            var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(0, 1000);
            this.subscription = timer.subscribe(function (t) {
                _this.checkTime(t - temp_1);
            });
            this.pauseText = "Pause Timer";
        }
        this.pauseBool = !this.pauseBool;
    };
    ObjectiveComponent.prototype.resetTime = function () {
        var _this = this;
        this.pauseText = "Pause Timer";
        this.pauseBool = false;
        this.subscription.unsubscribe();
        this.tick = this.myTime;
        var timer2 = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(0, (this.tempNum * 1000));
        this.subscription = timer2.subscribe(function (t) {
            _this.decimalWork(t);
        });
    };
    ObjectiveComponent.prototype.changePlayerCount = function (sentVal) {
        this.numPlayers = sentVal;
        this.myTime = 3.5 * this.numPlayers;
        this.tempNum = this.myTime - Math.floor(this.myTime);
    };
    ObjectiveComponent.prototype.changeBeepCount = function (sentVal) {
        this.beepCount = sentVal;
    };
    ObjectiveComponent.prototype.changeVolume = function (sentVal) {
        sentVal = parseInt(sentVal.toString());
        // console.log("sent: "+sentVal);
        if (sentVal <= 100 && sentVal >= 0) {
            this.sound1.volume = sentVal / 100;
            this.sound2.volume = sentVal / 100;
        }
        else if (sentVal > 100) {
            this.sound1.volume = 1;
            this.sound1.volume = 1;
        }
        else if (sentVal < 0) {
            this.sound1.volume = 0;
            this.sound1.volume = 0;
        }
        // console.log("volume: "+this.sound1.volume);
        this.myVolume = Math.round(this.sound1.volume * 100);
        // document.getElementById("vol-control").setAttribute("value",(this.sound1.volume*100).toString());
    };
    ObjectiveComponent.prototype.changeSound = function (sentVal) {
        if (this.sound1.canPlayType('audio/mpeg')) {
            this.sound1 = new Audio('/assets/' + sentVal + '_countdown.mp3');
        }
        if (this.sound2.canPlayType('audio/mpeg')) {
            this.sound2 = new Audio('/assets/' + sentVal + '_spawn.mp3');
        }
        this.sound1.volume = (this.myVolume / 100);
        this.sound2.volume = (this.myVolume / 100);
    };
    ObjectiveComponent.prototype.changeSettings = function (sentVal) {
        if (sentVal == "numbers") {
            if (document.getElementById("numbers").getAttribute("checked") == "true") {
                document.getElementById("numbers").setAttribute("checked", "false");
                document.getElementById('timer').className = "giant_text";
            }
            else {
                document.getElementById("numbers").setAttribute("checked", "true");
                document.getElementById('timer').className = "tiny_text big_space";
            }
        }
        else if (sentVal == "sounds") {
            if (document.getElementById("sounds").getAttribute("checked") == "true") {
                document.getElementById("sounds").setAttribute("checked", "false");
            }
            else {
                document.getElementById("sounds").setAttribute("checked", "true");
            }
        }
        else if (sentVal == "flashing") {
            if (document.getElementById("flashing").getAttribute("checked") == "true") {
                document.getElementById("flashing").setAttribute("checked", "false");
            }
            else {
                document.getElementById("flashing").setAttribute("checked", "true");
            }
        }
    };
    ObjectiveComponent.prototype.resetSettings = function () {
        document.getElementById("flashing").setAttribute("checked", "false");
        document.getElementById("sounds").setAttribute("checked", "false");
        document.getElementById("numbers").setAttribute("checked", "false");
    };
    return ObjectiveComponent;
}());
ObjectiveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-objective',
        template: __webpack_require__(170),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [])
], ObjectiveComponent);

//# sourceMappingURL=objective.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopwatchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StopwatchComponent = (function () {
    function StopwatchComponent() {
        this.tick = 24;
        this.myTime = 24;
        this.beepCount = 5;
        this.sound1 = new Audio('');
        this.sound2 = new Audio('');
        this.myVolume = 25;
        this.pauseTime = 0;
        this.pauseBool = false;
        this.pauseText = "Pause Timer";
        if (this.sound1.canPlayType('audio/mpeg')) {
            this.sound1 = new Audio('/assets/0_countdown.mp3');
        }
        if (this.sound2.canPlayType('audio/mpeg')) {
            this.sound2 = new Audio('/assets/0_spawn.mp3');
        }
        this.sound1.volume = 0.25;
        this.sound2.volume = 0.25;
        this.myVolume = 25;
    }
    StopwatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tick = this.myTime + 1;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(0, 1000);
        this.subscription = timer.subscribe(function (t) {
            _this.checkTime(t);
        });
        this.resetSettings();
    };
    StopwatchComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    StopwatchComponent.prototype.checkTime = function (t) {
        // Actually changing the time.
        if (this.tick <= 0) {
            this.tick = this.myTime;
            document.getElementById('background').classList.remove('flashing');
        }
        else {
            this.tick--;
        }
        this.pauseTime = t % (this.tick + 1);
        // Check for user selections for sounds/flashing & play sounds/flash.
        if ((this.tick <= this.beepCount && this.tick > 0)) {
            if (document.getElementById('flashing').getAttribute("checked") == "false") {
                document.getElementById('background').classList.toggle('flashing');
            }
            if (document.getElementById('sounds').getAttribute("checked") == "false") {
                this.sound1.play();
            }
        }
        else {
            document.getElementById('background').classList.remove('flashing');
        }
        if (this.tick == 0 && (document.getElementById('sounds').getAttribute("checked") == "false")) {
            this.sound2.play();
            if (document.getElementById('flashing').getAttribute("checked") == "false") {
                document.getElementById('background').classList.add('flashing');
            }
        }
    };
    StopwatchComponent.prototype.timeUp = function () {
        this.tick++;
    };
    StopwatchComponent.prototype.timeDown = function () {
        this.tick--;
    };
    StopwatchComponent.prototype.pausePlayTime = function () {
        var _this = this;
        this.pauseText = "Play Timer!";
        // Unsubscribe every time just in case.
        this.subscription.unsubscribe();
        // If time for unpause...
        if (this.pauseBool == true) {
            // Subscribe again, but make the time start at a later time.
            var temp_1 = this.pauseTime;
            var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(0, 1000);
            this.subscription = timer.subscribe(function (t) {
                _this.checkTime(t - temp_1);
            });
            this.pauseText = "Pause Timer";
        }
        this.pauseBool = !this.pauseBool;
    };
    StopwatchComponent.prototype.resetTime = function () {
        var _this = this;
        this.pauseText = "Pause Timer";
        this.pauseBool = false;
        this.subscription.unsubscribe();
        this.tick = this.myTime + 1;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(0, 1000);
        this.subscription = timer.subscribe(function (t) {
            _this.checkTime(t);
        });
    };
    StopwatchComponent.prototype.changeBeepCount = function (sentVal) {
        this.beepCount = sentVal;
    };
    StopwatchComponent.prototype.changeVolume = function (sentVal) {
        sentVal = parseInt(sentVal.toString());
        if (sentVal <= 100 && sentVal >= 0) {
            this.sound1.volume = sentVal / 100;
            this.sound2.volume = sentVal / 100;
        }
        else if (sentVal > 100) {
            this.sound1.volume = 1;
            this.sound1.volume = 1;
        }
        else if (sentVal < 0) {
            this.sound1.volume = 0;
            this.sound1.volume = 0;
        }
        this.myVolume = Math.round(this.sound1.volume * 100);
    };
    StopwatchComponent.prototype.changeSound = function (sentVal) {
        if (this.sound1.canPlayType('audio/mpeg')) {
            this.sound1 = new Audio('/assets/' + sentVal + '_countdown.mp3');
        }
        if (this.sound2.canPlayType('audio/mpeg')) {
            this.sound2 = new Audio('/assets/' + sentVal + '_spawn.mp3');
        }
        this.sound1.volume = (this.myVolume / 100);
        this.sound2.volume = (this.myVolume / 100);
    };
    StopwatchComponent.prototype.changeSettings = function (sentVal) {
        if (sentVal == "numbers") {
            if (document.getElementById("numbers").getAttribute("checked") == "true") {
                document.getElementById("numbers").setAttribute("checked", "false");
                document.getElementById('timer').className = "giant_text";
            }
            else {
                document.getElementById("numbers").setAttribute("checked", "true");
                document.getElementById('timer').className = "tiny_text big_space";
            }
        }
        else if (sentVal == "sounds") {
            if (document.getElementById("sounds").getAttribute("checked") == "true") {
                document.getElementById("sounds").setAttribute("checked", "false");
            }
            else {
                document.getElementById("sounds").setAttribute("checked", "true");
            }
        }
        else if (sentVal == "flashing") {
            if (document.getElementById("flashing").getAttribute("checked") == "true") {
                document.getElementById("flashing").setAttribute("checked", "false");
            }
            else {
                document.getElementById("flashing").setAttribute("checked", "true");
            }
        }
    };
    StopwatchComponent.prototype.resetSettings = function () {
        document.getElementById("flashing").setAttribute("checked", "false");
        document.getElementById("sounds").setAttribute("checked", "false");
        document.getElementById("numbers").setAttribute("checked", "false");
    };
    return StopwatchComponent;
}());
StopwatchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stopwatch',
        template: __webpack_require__(171),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], StopwatchComponent);

//# sourceMappingURL=stopwatch.component.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.bundle.js.map