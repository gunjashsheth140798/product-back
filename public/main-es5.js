function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/addcity/addcity.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/addcity/addcity.component.ts ***!
    \**********************************************/

  /*! exports provided: AddcityComponent */

  /***/
  function srcAppAddcityAddcityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcityComponent", function () {
      return AddcityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddcityComponent = /*#__PURE__*/function () {
      function AddcityComponent() {
        _classCallCheck(this, AddcityComponent);
      }

      _createClass(AddcityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddcityComponent;
    }();

    AddcityComponent.ɵfac = function AddcityComponent_Factory(t) {
      return new (t || AddcityComponent)();
    };

    AddcityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddcityComponent,
      selectors: [["app-addcity"]],
      decls: 2,
      vars: 0,
      template: function AddcityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "addcity works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGNpdHkvYWRkY2l0eS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddcityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addcity',
          templateUrl: './addcity.component.html',
          styleUrls: ['./addcity.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./addcity/addcity.component */
    "./src/app/addcity/addcity.component.ts");
    /* harmony import */


    var _fareconfig_fareconfig_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fareconfig/fareconfig.component */
    "./src/app/fareconfig/fareconfig.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routerOptions = {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    };
    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, // {path: '', component:HomeComponent },
    {
      path: 'addcity',
      component: _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_2__["AddcityComponent"]
    }, {
      path: 'fareconfig',
      component: _fareconfig_fareconfig_component__WEBPACK_IMPORTED_MODULE_3__["FareconfigComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'bus';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var _custom_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./custom.pipe */
    "./src/app/custom.pipe.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./addcity/addcity.component */
    "./src/app/addcity/addcity.component.ts");
    /* harmony import */


    var _fareconfig_fareconfig_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./fareconfig/fareconfig.component */
    "./src/app/fareconfig/fareconfig.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
        toastClass: 'toast toast-bootstrap-compatibility-fix'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_12__["AddcityComponent"], _fareconfig_fareconfig_component__WEBPACK_IMPORTED_MODULE_13__["FareconfigComponent"], _custom_pipe__WEBPACK_IMPORTED_MODULE_9__["CustomPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_12__["AddcityComponent"], _fareconfig_fareconfig_component__WEBPACK_IMPORTED_MODULE_13__["FareconfigComponent"], _custom_pipe__WEBPACK_IMPORTED_MODULE_9__["CustomPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
            toastClass: 'toast toast-bootstrap-compatibility-fix'
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/custom.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/custom.pipe.ts ***!
    \********************************/

  /*! exports provided: CustomPipe */

  /***/
  function srcAppCustomPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomPipe", function () {
      return CustomPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CustomPipe = /*#__PURE__*/function () {
      function CustomPipe() {
        _classCallCheck(this, CustomPipe);
      }

      _createClass(CustomPipe, [{
        key: "transform",
        value: function transform(data, searchTerm) {
          return data.filter(function (productlistArray) {
            return productlistArray.cityname != searchTerm;
          });
        }
      }]);

      return CustomPipe;
    }();

    CustomPipe.ɵfac = function CustomPipe_Factory(t) {
      return new (t || CustomPipe)();
    };

    CustomPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "Filter",
      type: CustomPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "Filter",
          pure: true
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(router, http) {
        _classCallCheck(this, DataService);

        this.router = router;
        this.http = http;
        this.basePath = "http://localhost:5000/api/v1/";
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(DataService, [{
        key: "getstate",
        value: function getstate() {
          return this.http.get(this.basePath + 'state', {
            headers: _defineProperty({}, 'Content-Type', 'application/json')
          });
        }
      }, {
        key: "getcity",
        value: function getcity() {
          return this.http.get(this.basePath + 'city', {
            headers: _defineProperty({}, 'Content-Type', 'application/json')
          });
        }
      }, {
        key: "addcity",
        value: function addcity(city, state) {
          return this.http.post(this.basePath + 'city', {
            "cityname": city,
            "statename": state
          }, this.httpOptions);
        }
      }, {
        key: "fareconfig",
        value: function fareconfig(scity, dcity, routename, distance, bustype, rate, fare) {
          return this.http.post(this.basePath + 'fareconfig', {
            "sourcecity": scity,
            "destinationcity": dcity,
            "routename": routename,
            "distance": distance,
            "bustype": bustype,
            "rate": rate,
            "fare": fare
          }, this.httpOptions);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fareconfig/fareconfig.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/fareconfig/fareconfig.component.ts ***!
    \****************************************************/

  /*! exports provided: FareconfigComponent */

  /***/
  function srcAppFareconfigFareconfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FareconfigComponent", function () {
      return FareconfigComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var _custom_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../custom.pipe */
    "./src/app/custom.pipe.ts");

    function FareconfigComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r2.cityname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r2.cityname);
      }
    }

    function FareconfigComponent_div_17_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r4.cityname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r4.cityname);
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    function FareconfigComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Destination City Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FareconfigComponent_div_17_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.destinationcity = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FareconfigComponent_div_17_option_6_Template, 2, 2, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "Filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "orderBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.destinationcity)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, ctx_r1.city$, ctx_r1.order), ctx_r1.data));
      }
    } // import { format } from 'path';


    var FareconfigComponent = /*#__PURE__*/function () {
      function FareconfigComponent(dataService) {
        _classCallCheck(this, FareconfigComponent);

        this.dataService = dataService;
        this.sourcecity = 'select';
        this.destinationcity = 'select';
        this.bustype = 'select';
        this.data = '';
        this.order = 'cityname';
      }

      _createClass(FareconfigComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataService.getcity().subscribe(function (data) {
            _this.city$ = data.data;
            console.log(_this.city$);
          }, function (error) {
            console.log(error);
          }); // });

          var number1 = document.getElementById('exampleFormControlInput2');

          number1.onkeyup = function myFunction() {
            number1.value = number1.value.replace(/[^0-9]/g, '');
          };

          var number2 = document.getElementById('exampleFormControlInput4');

          number2.onkeyup = function myFunction() {
            number2.value = number2.value.replace(/[^0-9]/g, '');
          };

          var number3 = document.getElementById('exampleFormControlInput5');

          number3.onkeyup = function myFunction() {
            number3.value = number3.value.replace(/[^0-9]/g, '');
          };
        }
      }, {
        key: "inputValidator",
        value: function inputValidator(event) {
          //console.log(event.target.value);
          var pattern = /^[a-zA-Z0-9]*$/; //let inputChar = String.fromCharCode(event.charCode)

          if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, ""); // invalid character, prevent input
          }
        }
      }, {
        key: "cities",
        value: function cities(event) {
          this.data = event;
        }
      }, {
        key: "fareconfig",
        value: function fareconfig() {
          var _this2 = this;

          this.dataService.fareconfig(this.sourcecity, this.destinationcity, this.route, this.distance, this.bustype, this.rate, this.fare).subscribe(function (data) {
            _this2.sourcecity = 'select';
            _this2.destinationcity = 'select';
            _this2.route = '';
            _this2.distance = '';
            _this2.bustype = 'select';
            _this2.rate = '';
            _this2.fare = '';
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'FareConfig Added Sucessfully !', 'success');
          }, function (error) {
            console.log(error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', error.error.error, 'error');
          });
        }
      }]);

      return FareconfigComponent;
    }();

    FareconfigComponent.ɵfac = function FareconfigComponent_Factory(t) {
      return new (t || FareconfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    FareconfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FareconfigComponent,
      selectors: [["app-fareconfig"]],
      decls: 46,
      vars: 24,
      consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "form-group"], ["for", "exampleFormControlInput1"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "Route Name", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "exampleFormControlInput2"], ["type", "number", "min", "0", "id", "exampleFormControlInput2", "placeholder", "Distance", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "exampleFormControlInput3"], ["id", "exampleFormControlSelect2", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "VOLVO B11R"], ["value", "AC SLEEPER"], ["for", "exampleFormControlInput4"], ["type", "number", "min", "0", "id", "exampleFormControlInput4", "placeholder", "Rate Per KM", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "exampleFormControlInput5"], ["type", "number", "min", "0", "id", "exampleFormControlInput5", "placeholder", "Fare", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "value"]],
      template: function FareconfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fare Configuration Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Source City Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FareconfigComponent_Template_select_ngModelChange_12_listener($event) {
            return ctx.sourcecity = $event;
          })("ngModelChange", function FareconfigComponent_Template_select_ngModelChange_12_listener($event) {
            return ctx.cities($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FareconfigComponent_option_15_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "orderBy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FareconfigComponent_div_17_Template, 9, 10, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Route Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FareconfigComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.route = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Distance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FareconfigComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.distance = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Bus Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FareconfigComponent_Template_select_ngModelChange_29_listener($event) {
            return ctx.bustype = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Select Bus Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "VOLVO B11R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "AC SLEEPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Rate Per KM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FareconfigComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.rate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Fare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FareconfigComponent_Template_input_ngModelChange_43_listener($event) {
            return ctx.fare = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FareconfigComponent_Template_button_click_44_listener() {
            return ctx.fareconfig();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Add Config");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sourcecity)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 15, ctx.city$, ctx.order));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sourcecity != "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.route)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.distance)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bustype)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rate)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fare)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.destinationcity || !ctx.sourcecity || ctx.sourcecity == "select" || ctx.destinationcity == "select" || ctx.bustype == "select" || !ctx.distance || !ctx.rate || !ctx.fare);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]],
      pipes: [ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_6__["CustomPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcmVjb25maWcvZmFyZWNvbmZpZy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FareconfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fareconfig',
          templateUrl: './fareconfig.component.html',
          styleUrls: ['./fareconfig.component.css']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["closeAddExpenseModal"];

    function HomeComponent_option_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var state_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r2.name);
      }
    }

    var _c1 = function _c1() {
      return {
        standalone: true
      };
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(dataService, toast) {
        _classCallCheck(this, HomeComponent);

        this.dataService = dataService;
        this.toast = toast;
        this.state = "select";
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.dataService.getstate().subscribe(function (data) {
            _this3.state$ = data.data;
            console.log(_this3.state$);
          }, function (error) {
            console.log(error);
          }); // });
        }
      }, {
        key: "addcity",
        value: function addcity(city, state) {
          var _this4 = this;

          console.log(city, state);
          this.dataService.addcity(city, state).subscribe(function (data) {
            // this.state$ = (data.data);
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'City Added Sucessfully !', 'success');
            _this4.city = '';
            _this4.state = 'select';

            _this4.closeAddExpenseModal.nativeElement.click();
          }, function (error) {
            console.log(error.error.error);
            var abc = error.error.error;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', error.error.error, 'error');
          });
        }
      }, {
        key: "states",
        value: function states(state) {
          console.log(state);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      viewQuery: function HomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeAddExpenseModal = _t.first);
        }
      },
      decls: 254,
      vars: 8,
      consts: [[1, "container"], [1, "table-wrapper", 2, "overflow-x", "auto"], [1, "table-title"], [1, "row"], [1, "col-sm-8"], [1, "col-sm-4"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-primary", "add-new", "mr-3"], ["href", "/fareconfig"], ["type", "button", 1, "btn", "btn-primary", "add-new", "mr-3"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "exampleFormControlInput1"], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "city name", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "exampleFormControlSelect1"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["closeAddExpenseModal", ""], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "tblFares", "width", "100%", 1, "table", "table-bordered", "display", "responsive", "nowrap"], ["width", "70px"], ["width", "150px"], ["width", "100px"], ["id", "dropdownr1", "name", "dropdownr1", "onchange", "getdistance(this.id,'distance','kmrate','fare');", 1, "form-control"], ["value", ""], ["value", "HYD-VJA-1", "selected", "selected"], ["value", "HYD-VJA-2"], ["value", "HYD-VJA-3"], ["type", "text", "name", "distance", "id", "distance", "value", "330", "onchange", "farecalc('kmrate',this.id,'fare');", "readonly", "readonly", 1, "form-control"], ["id", "dropdown1", "name", "dropdown1", "onchange", "farecalc('kmrate','distance','fare');", 1, "form-control"], ["value", "VOLVO B11R"], ["value", "AC SLEEPER"], ["type", "text", "name", "kmrate", "id", "kmrate", "readonly", "readonly", 1, "form-control"], ["type", "text", "name", "fare", "id", "fare", "readonly", "readonly", 1, "form-control"], ["title", "Add", "data-toggle", "tooltip", 1, "add"], [1, "material-icons"], ["id", "dropdownr2", "name", "dropdownr2", "onchange", "getdistance(this.id,'distance2','kmrate2','fare2');", 1, "form-control"], ["value", "HYD-BLR-1"], ["value", "HYD-BLR-2", "selected", "selected"], ["value", "HYD-BLR-3"], ["type", "text", "name", "distance2", "id", "distance2", "value", "575", "onchange", "farecalc('kmrate2',this.id,'fare2');", "readonly", "readonly", 1, "form-control"], ["id", "dropdown3", "name", "dropdown3", "onchange", "farecalc('kmrate2','distance2','fare2');", 1, "form-control"], ["type", "text", "name", "kmrate2", "id", "kmrate2", "readonly", "readonly", 1, "form-control"], ["type", "text", "name", "fare2", "id", "fare2", "readonly", "readonly", 1, "form-control"], ["id", "dropdownr3", "name", "dropdownr3", "onchange", "getdistance(this.id,'distance3','kmrate3','fare3');", 1, "form-control"], ["value", "HYD-CHN-1"], ["value", "HYD-CHN-2"], ["value", "HYD-CHN-3", "selected", "selected"], ["type", "text", "name", "distance3", "id", "distance3", "value", "626", "onchange", "farecalc('kmrate3',this.id,'fare3');", "readonly", "readonly", 1, "form-control"], ["id", "dropdown4", "name", "dropdown4", "onchange", "farecalc('kmrate3','distance3','fare3');", 1, "form-control"], ["type", "text", "name", "kmrate3", "id", "kmrate3", "readonly", "readonly", 1, "form-control"], ["type", "text", "name", "fare3", "id", "fare3", "readonly", "readonly", 1, "form-control"], ["id", "tblFares1", "width", "100%", 1, "table", "table-bordered", "display", "responsive", "nowrap"], ["width", "50px"], ["id", "ddroute", "name", "ddroute", "onchange", "", 1, "form-control"], ["id", "ddbustype", "name", "ddbustype", "onchange", "", 1, "form-control"], ["type", "text", "name", "txtfare", "id", "txtfare", "value", "1500", "readonly", "readonly", 1, "form-control"], ["id", "ddlcap", "name", "ddlcap", "onchange", "farecap(this.id);", 1, "form-control"], ["value", "5%"], ["value", "10%"], ["value", "15%"], ["value", "20%"], ["value", "25%"], ["id", "dducap", "name", "dducap", "onchange", "farecap(this.id);", "disabled", "disabled", 1, "form-control"], ["value", "30%"], ["value", "40%"], ["value", "50%"], [1, "radio-inline"], ["type", "radio", "name", "CaptypeRadio", "id", "lcap", "value", "Lower Cap", "onclick", "disablecapField()", "checked", ""], ["type", "radio", "name", "CaptypeRadio", "id", "ucap", "value", "Upper Cap", "onclick", "disablecapField()"], ["type", "text", "name", "txtnetfare", "id", "txtnetfare", "readonly", "readonly", 1, "form-control"], [3, "value"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Configuration Level-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Add City ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Fare Config ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "City Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_select_ngModelChange_33_listener($event) {
            return ctx.state = $event;
          })("ngModelChange", function HomeComponent_Template_select_ngModelChange_33_listener($event) {
            return ctx.states($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Select State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_option_36_Template, 2, 2, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_41_listener() {
            return ctx.addcity(ctx.city, ctx.state);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Add City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "S.No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Destination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Route");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Distance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Bus Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Rate per KM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Fare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Hyderabad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Vijayawada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Please select...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "HYD-VJA-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "HYD-VJA-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "HYD-VJA-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Please select...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "VOLVO B11R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "AC SLEEPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\uE03B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Hyderabad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Bengaluru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "select", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Please select...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "HYD-BLR-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "HYD-BLR-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "HYD-BLR-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "select", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Please select...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "VOLVO B11R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "AC SLEEPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\uE03B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Hyderabad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Chennai");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Please select...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "HYD-CHN-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "HYD-CHN-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "HYD-CHN-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Please select...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "VOLVO B11R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "AC SLEEPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\uE03B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Fare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Configuration Level-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "table", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "th", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "S.No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Route");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Bus Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Fare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Lower Cap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Upper Cap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Net Fare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Please select...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "HYD-VJA-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "HYD-VJA-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "HYD-VJA-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Please select...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "VOLVO B11R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "AC SLEEPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "select", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "5%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "10%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "15%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "20%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "25%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "select", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "10%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "20%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "50%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Lower Cap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Upper Cap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.state)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.state$);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.city || ctx.state == "select");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    color: #404E67;\r\n    background: #F5F7FA;\r\n    font-family: 'Open Sans', sans-serif;\r\n  }\r\n\r\n  .table-wrapper[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    margin: 30px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\r\n  }\r\n\r\n  .table-title[_ngcontent-%COMP%] {\r\n    padding-bottom: 10px;\r\n    margin: 0 0 10px;\r\n  }\r\n\r\n  .table-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 6px 0 0;\r\n    font-size: 22px;\r\n  }\r\n\r\n  .table-title[_ngcontent-%COMP%]   .add-new[_ngcontent-%COMP%] {\r\n    float: right;\r\n    height: 30px;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n    text-shadow: none;\r\n    min-width: 100px;\r\n    border-radius: 50px;\r\n    line-height: 13px;\r\n  }\r\n\r\n  .table-title[_ngcontent-%COMP%]   .add-new[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 4px;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%] {\r\n    table-layout: fixed;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-color: #e9e9e9;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    margin: 0 5px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\r\n    width: 100px;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    margin: 0 5px;\r\n    min-width: 24px;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.add[_ngcontent-%COMP%] {\r\n    color: #27C46B;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%] {\r\n    color: #FFC107;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.delete[_ngcontent-%COMP%] {\r\n    color: #E34724;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    margin-right: -1px;\r\n    position: relative;\r\n    top: 3px;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    height: 32px;\r\n    line-height: 32px;\r\n    box-shadow: none;\r\n    border-radius: 2px;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   .form-control.error[_ngcontent-%COMP%] {\r\n    border-color: #f50000;\r\n  }\r\n\r\n  table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGNvbG9yOiAjNDA0RTY3O1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjdGQTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC50YWJsZS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgfVxyXG5cclxuICAudGFibGUtdGl0bGUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLXRpdGxlIGgyIHtcclxuICAgIG1hcmdpbjogNnB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC50YWJsZS10aXRsZSAuYWRkLW5ldyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcblxyXG4gIC50YWJsZS10aXRsZSAuYWRkLW5ldyBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUudGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICB9XHJcblxyXG4gIHRhYmxlLnRhYmxlIHRyIHRoLFxyXG4gIHRhYmxlLnRhYmxlIHRyIHRkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIHRhYmxlLnRhYmxlIHRoIGkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHRhYmxlLnRhYmxlIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUudGFibGUgdGQgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgbWluLXdpZHRoOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUudGFibGUgdGQgYS5hZGQge1xyXG4gICAgY29sb3I6ICMyN0M0NkI7XHJcbiAgfVxyXG5cclxuICB0YWJsZS50YWJsZSB0ZCBhLmVkaXQge1xyXG4gICAgY29sb3I6ICNGRkMxMDc7XHJcbiAgfVxyXG5cclxuICB0YWJsZS50YWJsZSB0ZCBhLmRlbGV0ZSB7XHJcbiAgICBjb2xvcjogI0UzNDcyNDtcclxuICB9XHJcblxyXG4gIHRhYmxlLnRhYmxlIHRkIGkge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUudGFibGUgdGQgYS5hZGQgaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDNweDtcclxuICB9XHJcblxyXG4gIHRhYmxlLnRhYmxlIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUudGFibGUgLmZvcm0tY29udHJvbC5lcnJvciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNTAwMDA7XHJcbiAgfVxyXG5cclxuICB0YWJsZS50YWJsZSB0ZCAuYWRkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, {
        closeAddExpenseModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['closeAddExpenseModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\git\node-bus\bus\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map