(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./example/$$_lazy_route_resource lazy recursive":
/*!**************************************************************!*\
  !*** ./example/$$_lazy_route_resource lazy namespace object ***!
  \**************************************************************/
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
webpackEmptyAsyncContext.id = "./example/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./example/app/app.component.html":
/*!****************************************!*\
  !*** ./example/app/app.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n  <a [routerLink]=\"['/welcome']\">Welcome</a>\n  <a [routerLink]=\"['/catalog']\">Catalog</a>\n</div>\n\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./example/app/app.component.sass":
/*!****************************************!*\
  !*** ./example/app/app.component.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host .navigation {\n    display: flex;\n    justify-content: center; }\n  :host .navigation a:not(:last-child) {\n      margin-right: 15px; }\n"

/***/ }),

/***/ "./example/app/app.component.ts":
/*!**************************************!*\
  !*** ./example/app/app.component.ts ***!
  \**************************************/
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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./example/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./example/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./example/app/app.module.ts":
/*!***********************************!*\
  !*** ./example/app/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _lib_src_lib_responsive_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/src/lib/responsive.module */ "./lib/src/lib/responsive.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./example/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./example/app/app.routes.ts");
/* harmony import */ var _components_route_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/route/catalog/catalog.component */ "./example/app/components/route/catalog/catalog.component.ts");
/* harmony import */ var _components_ui_card_preview_card_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ui/card-preview/card-preview.component */ "./example/app/components/ui/card-preview/card-preview.component.ts");
/* harmony import */ var _components_ui_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ui/grid/grid.component */ "./example/app/components/ui/grid/grid.component.ts");
/* harmony import */ var _resolvers_previews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/previews */ "./example/app/resolvers/previews.ts");
/* harmony import */ var _components_route_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/route/welcome/welcome.component */ "./example/app/components/route/welcome/welcome.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_ui_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"],
                _components_route_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_5__["CatalogComponent"],
                _components_ui_card_preview_card_preview_component__WEBPACK_IMPORTED_MODULE_6__["CardPreviewComponent"],
                _components_route_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _lib_src_lib_responsive_module__WEBPACK_IMPORTED_MODULE_2__["ResponsiveModule"].forFoot(),
                _app_routes__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"]
            ],
            providers: [
                _resolvers_previews__WEBPACK_IMPORTED_MODULE_8__["CardsResolver"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./example/app/app.routes.ts":
/*!***********************************!*\
  !*** ./example/app/app.routes.ts ***!
  \***********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_route_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/route/catalog/catalog.component */ "./example/app/components/route/catalog/catalog.component.ts");
/* harmony import */ var _components_route_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/route/welcome/welcome.component */ "./example/app/components/route/welcome/welcome.component.ts");
/* harmony import */ var _resolvers_previews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/previews */ "./example/app/resolvers/previews.ts");




var routes = [
    {
        path: 'catalog',
        component: _components_route_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_1__["CatalogComponent"],
        resolve: {
            cards: _resolvers_previews__WEBPACK_IMPORTED_MODULE_3__["CardsResolver"]
        }
    },
    {
        path: 'welcome',
        component: _components_route_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    }
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./example/app/components/route/catalog/catalog.component.html":
/*!*********************************************************************!*\
  !*** ./example/app/components/route/catalog/catalog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid [size]=\"gridSize\" [cards]=\"cards\"></app-grid>\n"

/***/ }),

/***/ "./example/app/components/route/catalog/catalog.component.sass":
/*!*********************************************************************!*\
  !*** ./example/app/components/route/catalog/catalog.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host app-grid {\n    margin: auto; }\n"

/***/ }),

/***/ "./example/app/components/route/catalog/catalog.component.ts":
/*!*******************************************************************!*\
  !*** ./example/app/components/route/catalog/catalog.component.ts ***!
  \*******************************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../lib/src/lib/component-sizes */ "./lib/src/lib/component-sizes.ts");
/* harmony import */ var _lib_src_lib_responsive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../lib/src/lib/responsive.component */ "./lib/src/lib/responsive.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(injector, route) {
        var _this = this;
        this.injector = injector;
        this.route = route;
        this.forPhoneUp = function () {
            _this.gridSize = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_2__["ComponentSize"].xs;
        };
        this.forTabletPortraitUp = function () {
            _this.gridSize = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_2__["ComponentSize"].s;
        };
        this.forTabletLandscapeUp = function () {
            _this.gridSize = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_2__["ComponentSize"].m;
        };
        this.forDesktopUp = function () {
            _this.gridSize = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_2__["ComponentSize"].l;
        };
        this.cards = this.route.snapshot.data['cards'];
    }
    CatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./example/app/components/route/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.sass */ "./example/app/components/route/catalog/catalog.component.sass")]
        }),
        _lib_src_lib_responsive_component__WEBPACK_IMPORTED_MODULE_3__["ResponsiveComponent"],
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./example/app/components/route/welcome/welcome.component.html":
/*!*********************************************************************!*\
  !*** ./example/app/components/route/welcome/welcome.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</div>\n\n<div class=\"sidebar\">\n  <app-card-preview [card]=\"card\" [size]=\"previewSize\"></app-card-preview>\n  <app-card-preview [card]=\"card\" [size]=\"previewSize\"></app-card-preview>\n</div>\n\n\n"

/***/ }),

/***/ "./example/app/components/route/welcome/welcome.component.sass":
/*!*********************************************************************!*\
  !*** ./example/app/components/route/welcome/welcome.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 10px;\n      grid-template-areas: \"main main sidebar\" \"main main sidebar\"; }\n  :host header {\n    grid-area: header;\n    border: 1px black solid;\n    height: 50px; }\n  :host .main {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 3;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-area: main; }\n  :host .sidebar {\n    max-width: 300px;\n    width: 100%;\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 3;\n    -ms-grid-column: 3;\n    grid-area: sidebar; }\n  :host .sidebar app-card-preview:first-child {\n      margin-bottom: 10px; }\n"

/***/ }),

/***/ "./example/app/components/route/welcome/welcome.component.ts":
/*!*******************************************************************!*\
  !*** ./example/app/components/route/welcome/welcome.component.ts ***!
  \*******************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../lib/src/lib/component-sizes */ "./lib/src/lib/component-sizes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(injector) {
        this.injector = injector;
        this.card = 'https://picsum.photos/864/1228/?random';
        this.previewSize = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].xs;
    }
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./example/app/components/route/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.sass */ "./example/app/components/route/welcome/welcome.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./example/app/components/ui/card-preview/card-preview.component.html":
/*!****************************************************************************!*\
  !*** ./example/app/components/ui/card-preview/card-preview.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"card\">\n\n<div class=\"color-options\">\n\n  <ng-template ngFor let-task [ngForOf]=\"colorOptions\" let-i=\"index\">\n    <div class=\"color-option\" *ngIf=\"i < colorOptionCount\"></div>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "./example/app/components/ui/card-preview/card-preview.component.sass":
/*!****************************************************************************!*\
  !*** ./example/app/components/ui/card-preview/card-preview.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative;\n  box-shadow: -2px 2px 10px 0px rgba(68, 68, 68, 0.4); }\n  :host img {\n    width: 100%;\n    height: calc(100% - 50px); }\n  :host .color-options {\n    height: 50px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  :host .color-option {\n    display: inline-block;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: 1px black solid; }\n  :host .color-option:not(:last-child) {\n      margin-right: 5px; }\n  :host.xs {\n    height: 450px; }\n  :host.s {\n    height: 525px; }\n  :host.m {\n    height: 620px; }\n"

/***/ }),

/***/ "./example/app/components/ui/card-preview/card-preview.component.ts":
/*!**************************************************************************!*\
  !*** ./example/app/components/ui/card-preview/card-preview.component.ts ***!
  \**************************************************************************/
/*! exports provided: CardPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPreviewComponent", function() { return CardPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../lib/src/lib/component-sizes */ "./lib/src/lib/component-sizes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardPreviewComponent = /** @class */ (function () {
    function CardPreviewComponent() {
        this.size = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].xs;
        this.colorOptionCount = 4;
        this.colorOptions = Array(10).fill(0);
    }
    CardPreviewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.size) {
            this.onSizeChange();
        }
    };
    CardPreviewComponent.prototype.onSizeChange = function () {
        switch (this.size) {
            case _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].xs:
                this.colorOptionCount = 4;
                break;
            case _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].s:
                this.colorOptionCount = 6;
                break;
            default:
                this.colorOptionCount = 8;
        }
    };
    Object.defineProperty(CardPreviewComponent.prototype, "getCssClasses", {
        get: function () {
            return this.size;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CardPreviewComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardPreviewComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CardPreviewComponent.prototype, "getCssClasses", null);
    CardPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-preview',
            template: __webpack_require__(/*! ./card-preview.component.html */ "./example/app/components/ui/card-preview/card-preview.component.html"),
            styles: [__webpack_require__(/*! ./card-preview.component.sass */ "./example/app/components/ui/card-preview/card-preview.component.sass")]
        })
    ], CardPreviewComponent);
    return CardPreviewComponent;
}());



/***/ }),

/***/ "./example/app/components/ui/grid/grid.component.html":
/*!************************************************************!*\
  !*** ./example/app/components/ui/grid/grid.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card-preview *ngFor=\"let card of cards\" [size]=\"previewSize\" [card]=\"card\"></app-card-preview>\n"

/***/ }),

/***/ "./example/app/components/ui/grid/grid.component.sass":
/*!************************************************************!*\
  !*** ./example/app/components/ui/grid/grid.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -ms-grid;\n  display: grid;\n  grid-auto-flow: dense;\n  padding: 10px;\n  justify-content: center;\n  grid-gap: 15px; }\n  :host.xs {\n    width: 300px;\n    -ms-grid-columns: 280px;\n        grid-template-columns: 280px; }\n  :host.s {\n    width: 590px;\n    -ms-grid-columns: (280px)[2];\n        grid-template-columns: repeat(2, 280px); }\n  :host.m {\n    -ms-grid-columns: (400px)[2];\n        grid-template-columns: repeat(2, 400px);\n    width: 800px; }\n  :host.l {\n    -ms-grid-columns: (335px)[3];\n        grid-template-columns: repeat(3, 335px);\n    width: 1005px; }\n  :host.l app-card-preview {\n      height: 526px; }\n"

/***/ }),

/***/ "./example/app/components/ui/grid/grid.component.ts":
/*!**********************************************************!*\
  !*** ./example/app/components/ui/grid/grid.component.ts ***!
  \**********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../lib/src/lib/component-sizes */ "./lib/src/lib/component-sizes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnChanges = function (changes) {
        if (changes.size) {
            this.onSizeChange();
        }
    };
    GridComponent.prototype.onSizeChange = function () {
        switch (this.size) {
            case _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].xs:
                this.previewSize = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].xs;
                break;
            case _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].s:
                this.previewSize = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].xs;
                break;
            case _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].m:
                this.previewSize = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].s;
                break;
            default:
                this.previewSize = _lib_src_lib_component_sizes__WEBPACK_IMPORTED_MODULE_1__["ComponentSize"].m;
        }
    };
    Object.defineProperty(GridComponent.prototype, "getCssClasses", {
        get: function () {
            return this.size;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GridComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GridComponent.prototype, "cards", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GridComponent.prototype, "getCssClasses", null);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./example/app/components/ui/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.sass */ "./example/app/components/ui/grid/grid.component.sass")]
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./example/app/resolvers/previews.ts":
/*!*******************************************!*\
  !*** ./example/app/resolvers/previews.ts ***!
  \*******************************************/
/*! exports provided: CardsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsResolver", function() { return CardsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_src_lib_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/src/lib/breakpoints */ "./lib/src/lib/breakpoints.ts");
/* harmony import */ var _lib_src_lib_responsive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/src/lib/responsive.service */ "./lib/src/lib/responsive.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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



var CardsResolver = /** @class */ (function () {
    function CardsResolver(responsiveService) {
        this.responsiveService = responsiveService;
        switch (responsiveService.currentBreakpoint) {
            case _lib_src_lib_breakpoints__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].forPhoneUp:
                this.count = 4;
                break;
            case _lib_src_lib_breakpoints__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].forTabletPortraitUp:
                this.count = 6;
                break;
            case _lib_src_lib_breakpoints__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].forTabletLandscapeUp:
                this.count = 8;
                break;
            default:
                this.count = 9;
        }
    }
    CardsResolver.prototype.resolve = function (route) {
        return __awaiter(this, void 0, void 0, function () {
            var result, i;
            return __generator(this, function (_a) {
                result = [];
                for (i = 0; i < this.count; i++) {
                    result.push('https://picsum.photos/864/1228/?random');
                }
                return [2 /*return*/, Promise.resolve(result)];
            });
        });
    };
    CardsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_lib_src_lib_responsive_service__WEBPACK_IMPORTED_MODULE_2__["ResponsiveService"]])
    ], CardsResolver);
    return CardsResolver;
}());



/***/ }),

/***/ "./example/environments/environment.ts":
/*!*********************************************!*\
  !*** ./example/environments/environment.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./example/main.ts":
/*!*************************!*\
  !*** ./example/main.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./example/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./example/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./lib/src/lib/breakpoints-map.ts":
/*!****************************************!*\
  !*** ./lib/src/lib/breakpoints-map.ts ***!
  \****************************************/
/*! exports provided: breakpointsMapToken, breakpointsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsMapToken", function() { return breakpointsMapToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsMap", function() { return breakpointsMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "./lib/src/lib/breakpoints.ts");


var breakpointsMapToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('breakpointsMapToken');
var breakpointsMap = new Map([
    [_breakpoints__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].forPhoneUp, [0, 599]],
    [_breakpoints__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].forTabletPortraitUp, [600, 899]],
    [_breakpoints__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].forTabletLandscapeUp, [900, 1199]],
    [_breakpoints__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].forDesktopUp, [1200, 1799]],
    [_breakpoints__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].forBigDesktop, [1800, 100000]]
]);


/***/ }),

/***/ "./lib/src/lib/breakpoints.ts":
/*!************************************!*\
  !*** ./lib/src/lib/breakpoints.ts ***!
  \************************************/
/*! exports provided: Breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
var Breakpoints;
(function (Breakpoints) {
    Breakpoints[Breakpoints["forPhoneUp"] = 'forPhoneUp'] = "forPhoneUp";
    Breakpoints[Breakpoints["forTabletPortraitUp"] = 'forTabletPortraitUp'] = "forTabletPortraitUp";
    Breakpoints[Breakpoints["forTabletLandscapeUp"] = 'forTabletLandscapeUp'] = "forTabletLandscapeUp";
    Breakpoints[Breakpoints["forDesktopUp"] = 'forDesktopUp'] = "forDesktopUp";
    Breakpoints[Breakpoints["forBigDesktop"] = 'forBigDesktop'] = "forBigDesktop";
})(Breakpoints || (Breakpoints = {}));


/***/ }),

/***/ "./lib/src/lib/component-sizes.ts":
/*!****************************************!*\
  !*** ./lib/src/lib/component-sizes.ts ***!
  \****************************************/
/*! exports provided: ComponentSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentSize", function() { return ComponentSize; });
var ComponentSize;
(function (ComponentSize) {
    ComponentSize[ComponentSize["xs"] = 'xs'] = "xs";
    ComponentSize[ComponentSize["s"] = 's'] = "s";
    ComponentSize[ComponentSize["m"] = 'm'] = "m";
    ComponentSize[ComponentSize["l"] = 'l'] = "l";
    ComponentSize[ComponentSize["xl"] = 'xl'] = "xl";
})(ComponentSize || (ComponentSize = {}));


/***/ }),

/***/ "./lib/src/lib/injectable.ts":
/*!***********************************!*\
  !*** ./lib/src/lib/injectable.ts ***!
  \***********************************/
/*! exports provided: CustomInjectable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInjectable", function() { return CustomInjectable; });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);

function CustomInjectable() {
    return function (target) {
        var parentTarget = Object.getPrototypeOf(target.prototype).constructor;
        var parentAnnotations = Reflect.getMetadata('design:paramtypes', parentTarget);
        Reflect.defineMetadata('design:paramtypes', parentAnnotations, target);
    };
}


/***/ }),

/***/ "./lib/src/lib/responsive.component.ts":
/*!*********************************************!*\
  !*** ./lib/src/lib/responsive.component.ts ***!
  \*********************************************/
/*! exports provided: ResponsiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveComponent", function() { return ResponsiveComponent; });
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpoints */ "./lib/src/lib/breakpoints.ts");
/* harmony import */ var _injectable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injectable */ "./lib/src/lib/injectable.ts");
/* harmony import */ var _responsive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive.service */ "./lib/src/lib/responsive.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function ResponsiveComponent(Base) {
    var ResponsiveComponentMixin = /** @class */ (function (_super) {
        __extends(ResponsiveComponentMixin, _super);
        function ResponsiveComponentMixin() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, args) || this;
        }
        ResponsiveComponentMixin.prototype.ngOnInit = function () {
            this.responsiveService = this.injector.get(_responsive_service__WEBPACK_IMPORTED_MODULE_2__["ResponsiveService"]);
            this.responsiveService.subscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forPhoneUp, this.forPhoneUp);
            this.responsiveService.subscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forTabletPortraitUp, this.forTabletPortraitUp);
            this.responsiveService.subscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forTabletLandscapeUp, this.forTabletLandscapeUp);
            this.responsiveService.subscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forDesktopUp, this.forDesktopUp);
            this.responsiveService.subscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forBigDesktop, this.forBigDesktop);
            this.responsiveService.callCallbacks();
            if (_super.prototype.ngOnInit) {
                _super.prototype.ngOnInit.call(this);
            }
        };
        ResponsiveComponentMixin.prototype.ngOnDestroy = function () {
            this.responsiveService.unsubscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forPhoneUp, this.forPhoneUp);
            this.responsiveService.unsubscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forTabletPortraitUp, this.forTabletPortraitUp);
            this.responsiveService.unsubscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forTabletLandscapeUp, this.forTabletLandscapeUp);
            this.responsiveService.unsubscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forDesktopUp, this.forDesktopUp);
            this.responsiveService.unsubscribe(_breakpoints__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].forBigDesktop, this.forBigDesktop);
            if (_super.prototype.ngOnDestroy) {
                _super.prototype.ngOnDestroy.call(this);
            }
        };
        ResponsiveComponentMixin.prototype.forPhoneUp = function () {
            if (_super.prototype.forPhoneUp) {
                _super.prototype.forPhoneUp.call(this);
            }
        };
        ResponsiveComponentMixin.prototype.forTabletPortraitUp = function () {
            if (_super.prototype.forTabletPortraitUp) {
                _super.prototype.forTabletPortraitUp.call(this);
            }
        };
        ResponsiveComponentMixin.prototype.forTabletLandscapeUp = function () {
            if (_super.prototype.forTabletLandscapeUp) {
                _super.prototype.forTabletLandscapeUp.call(this);
            }
        };
        ResponsiveComponentMixin.prototype.forDesktopUp = function () {
            if (_super.prototype.forDesktopUp) {
                _super.prototype.forDesktopUp.call(this);
            }
        };
        ResponsiveComponentMixin.prototype.forBigDesktop = function () {
            if (_super.prototype.forBigDesktop) {
                _super.prototype.forBigDesktop.call(this);
            }
        };
        ResponsiveComponentMixin = __decorate([
            Object(_injectable__WEBPACK_IMPORTED_MODULE_1__["CustomInjectable"])(),
            __metadata("design:paramtypes", [Object])
        ], ResponsiveComponentMixin);
        return ResponsiveComponentMixin;
    }(Base));
    return ResponsiveComponentMixin;
}


/***/ }),

/***/ "./lib/src/lib/responsive.module.ts":
/*!******************************************!*\
  !*** ./lib/src/lib/responsive.module.ts ***!
  \******************************************/
/*! exports provided: ResponsiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveModule", function() { return ResponsiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breakpoints_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints-map */ "./lib/src/lib/breakpoints-map.ts");
/* harmony import */ var _responsive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive.service */ "./lib/src/lib/responsive.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResponsiveModule = /** @class */ (function () {
    function ResponsiveModule() {
    }
    ResponsiveModule_1 = ResponsiveModule;
    ResponsiveModule.forFoot = function (customBreakpointsMap) {
        return {
            ngModule: ResponsiveModule_1,
            providers: [
                {
                    provide: _breakpoints_map__WEBPACK_IMPORTED_MODULE_1__["breakpointsMapToken"],
                    useValue: customBreakpointsMap || _breakpoints_map__WEBPACK_IMPORTED_MODULE_1__["breakpointsMap"],
                },
                _responsive_service__WEBPACK_IMPORTED_MODULE_2__["ResponsiveService"]
            ]
        };
    };
    ResponsiveModule = ResponsiveModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])()
    ], ResponsiveModule);
    return ResponsiveModule;
    var ResponsiveModule_1;
}());



/***/ }),

/***/ "./lib/src/lib/responsive.service.ts":
/*!*******************************************!*\
  !*** ./lib/src/lib/responsive.service.ts ***!
  \*******************************************/
/*! exports provided: ResponsiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return ResponsiveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breakpoints_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakpoints-map */ "./lib/src/lib/breakpoints-map.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ResponsiveService = /** @class */ (function () {
    function ResponsiveService(breakpointsMap) {
        var _this = this;
        this.breakpointsMap = breakpointsMap;
        this.cbs = {};
        this.currentBreakpoint = null;
        this.callCallbacks = function () {
            _this.breakpointsMap.forEach(function (value, key) {
                if (_this.width >= value[0]) {
                    _this.callCallbackFor(key);
                }
            });
        };
        this.getCurrentBreakpoint = function () {
            var breakpoint;
            _this.breakpointsMap.forEach(function (value, key) {
                if (value[0] <= _this.width && _this.width <= value[1]) {
                    breakpoint = key;
                }
            });
            return breakpoint;
        };
        this.onResize = function () {
            _this.width = window.innerWidth || 0;
            _this.currentBreakpoint = _this.getCurrentBreakpoint();
            _this.callCallbacks();
        };
        this.onResize();
        this.onResize = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(this.onResize, 20);
        window.addEventListener ? window.addEventListener('resize', this.onResize) : this.noop();
    }
    ResponsiveService.prototype.subscribe = function (type, cb) {
        if (this.cbs[type]) {
            this.cbs[type].push(cb);
        }
        else {
            this.cbs[type] = [cb];
        }
    };
    ResponsiveService.prototype.unsubscribe = function (breakpoint, cb) {
        if (!this.cbs[breakpoint]) {
            return;
        }
        var index = this.cbs[breakpoint].indexOf(cb);
        this.cbs[breakpoint].splice(index, 1);
    };
    ResponsiveService.prototype.callCallbackFor = function (breakpoint) {
        if (!this.cbs[breakpoint]) {
            return;
        }
        this.cbs[breakpoint].forEach(function (cb) { return cb(); });
    };
    ResponsiveService.prototype.noop = function () {
    };
    ResponsiveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_breakpoints_map__WEBPACK_IMPORTED_MODULE_2__["breakpointsMapToken"])),
        __metadata("design:paramtypes", [Map])
    ], ResponsiveService);
    return ResponsiveService;
}());



/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./example/main.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sp/work/ngx-responsive-helper/example/main.ts */"./example/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map