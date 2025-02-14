(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vasundhara\Desktop\Assignment\cineQuest\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HeaderComponent_div_10_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_10_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const genre_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.filterByGenre(genre_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r2.name, " ");
} }
function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_10_a_2_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.genres);
} }
class HeaderComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.errorMessage = '';
        this.movieName = '';
        this.genres = [];
        this.page = 1;
        this.filterByGenreClicked = false;
        this.getTrendingMovies = () => {
            this.dataService.getTrendingMovies(this.page).subscribe((response) => {
                if (response && response.results) {
                    this.trendingMovies = response.results;
                    console.log("Trending Movies:", this.trendingMovies);
                }
                else {
                    this.errorMessage = 'No trending movies found.';
                }
            }, (error) => {
                console.error("Error fetching trending movies:", error);
                this.errorMessage = 'Failed to fetch trending movies. Please try again later.';
            });
        };
        this.searchByMovieName = () => {
            this.dataService.changeMovie(this.movieName);
            this.dataService.searchMovies(this.movieName).subscribe((response) => {
                console.log("API Response:", response.results);
                this.dataService.updateMoviesList(response.results);
            }, (error) => {
                console.error("API Error:", error);
            });
        };
    }
    ngOnInit() {
        this.getGenres();
        this.filterByGenre(28);
    }
    getGenres() {
        this.dataService.genres$.subscribe((genres) => {
            this.genres = genres;
        });
    }
    filterByGenre(genreId) {
        this.dataService.getMoviesByGenre(genreId).subscribe((response) => {
            this.dataService.updateMoviesList(response.results);
        }, (error) => {
            console.error('Error fetching movies by genre:', error);
        });
    }
    filterClicked() {
        this.filterByGenreClicked = !this.filterByGenreClicked;
    }
    onChangeText() {
        if (this.movieName == '') {
            this.getTrendingMovies();
        }
        else {
            this.searchByMovieName();
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 2, consts: [[1, "header"], [1, "app-title"], [1, "search-box"], [1, "btn-search"], ["type", "text", "placeholder", "Type to Search...", 1, "input-search", 3, "ngModel", "ngModelChange", "input"], ["mat-raised-button", "", 1, "filter-button", 3, "click"], [4, "ngIf"], [1, "genres"], ["mat-button", "", "class", "genre-link", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "genre-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cine Quest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_7_listener($event) { return ctx.movieName = $event; })("input", function HeaderComponent_Template_input_input_7_listener() { return ctx.onChangeText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_8_listener() { return ctx.filterClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Browse By Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 3, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movieName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterByGenreClicked);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]], styles: [".header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 5rem;\r\n    background-image: linear-gradient(to left, #434343 0%, black 100%);\r\n}\r\n\r\n.app-title[_ngcontent-%COMP%]{\r\n    padding: 2rem;\r\n    font-weight: 600;\r\n    font-size: 3rem;\r\n    color: white;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.filter-button[_ngcontent-%COMP%]{\r\n  height: 2.5rem;\r\n  margin-top: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]{\r\n    margin-top: 1.5rem;\r\n}\r\n\r\n.input-search[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    width: 200px;\r\n    border-style: none;\r\n    padding: 10px;\r\n    font-size: 18px;\r\n    letter-spacing: 2px;\r\n    outline: none;\r\n    border-radius: 25px;\r\n    transition: all .5s ease-in-out;\r\n    background-color: black;\r\n    padding-right: 40px;\r\n    color:#fff;\r\n  }\r\n\r\n.input-search[_ngcontent-%COMP%]::placeholder{\r\n    color:rgba(255,255,255,.5);\r\n    font-size: 18px;\r\n    letter-spacing: 2px;\r\n    font-weight: 100;\r\n  }\r\n\r\n.btn-search[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-style: none;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    outline: none;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: 0px;\r\n    color:#ffffff ;\r\n    background-color:transparent;\r\n    pointer-events: painted;  \r\n  }\r\n\r\n.btn-search[_ngcontent-%COMP%]:focus    ~ .input-search[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    border-radius: 0px;\r\n    background-color: transparent;\r\n    border-bottom:1px solid rgba(255,255,255,.5);\r\n    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);\r\n  }\r\n\r\n.input-search[_ngcontent-%COMP%]:focus{\r\n    width: 300px;\r\n    border-radius: 0px;\r\n    background-color: transparent;\r\n    border-bottom:1px solid rgba(255,255,255,.5);\r\n    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);\r\n  }\r\n\r\n.genres[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    background-image: linear-gradient(to left, #434343 0%, black 100%);\r\n    color: white;\r\n    font-size: 1.2rem;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDJEQUEyRDtBQUMvRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0FBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsdUJBQXVCO0VBQ3pCOztBQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsNENBQTRDO0lBQzVDLHFEQUFxRDtFQUN2RDs7QUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDRDQUE0QztJQUM1QyxxREFBcUQ7RUFDdkQ7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrRUFBa0U7SUFDbEUsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM0MzQzNDMgMCUsIGJsYWNrIDEwMCUpO1xyXG59XHJcblxyXG4uYXBwLXRpdGxle1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZpbHRlci1idXR0b257XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWJveHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG4uaW5wdXQtc2VhcmNoe1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICAuaW5wdXQtc2VhcmNoOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgfVxyXG4gIC5idG4tc2VhcmNoe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgY29sb3I6I2ZmZmZmZiA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IHBhaW50ZWQ7ICBcclxuICB9XHJcbiAgLmJ0bi1zZWFyY2g6Zm9jdXMgfiAuaW5wdXQtc2VhcmNoe1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMCwgMC4xMTAsIDAuMzUsIDIpO1xyXG4gIH1cclxuICAuaW5wdXQtc2VhcmNoOmZvY3Vze1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMCwgMC4xMTAsIDAuMzUsIDIpO1xyXG4gIH1cclxuICBcclxuICAuZ2VucmVze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM0MzQzNDMgMCUsIGJsYWNrIDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _carousel_card_carousel_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel-card/carousel-card.component */ "lZac");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card/card.component */ "lXt9");








const _c0 = function (a0) { return { "active": a0 }; };
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r4 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r3);
} }
function HomeComponent_div_18_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_18_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const genre_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.filterByGenre(genre_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r6.name, " ");
} }
function HomeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_18_a_2_Template, 2, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.genres);
} }
function HomeComponent_app_card_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 16);
} if (rf & 2) {
    const movie_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r9);
} }
class HomeComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.filterByGenreClicked = false;
        this.genres = [];
        this.totalPages = 100;
        this.allMovies = [];
        this.trendingMovies = [];
        this.errorMessage = '';
        this.page = 1;
        this.isLoading = false;
        this.searchMode = false;
    }
    ngOnInit() {
        this.dataService.genres$.subscribe((genres) => {
            this.genres = genres;
        });
        this.getAllMovies();
        this.getTrendingMovies();
        this.listenForSearchUpdates();
    }
    getAllMovies() {
        this.dataService.getAllMoviesByPage(this.page).subscribe((response) => {
            if (response && response.results) {
                this.allMovies = [...this.allMovies, ...response.results];
                console.log("allMovies:", this.allMovies);
            }
            else {
                this.errorMessage = 'No trending movies found.';
            }
            this.isLoading = false;
        }, (error) => {
            console.error("Error fetching trending movies:", error);
            this.errorMessage = 'Failed to fetch trending movies. Please try again later.';
            this.isLoading = false;
        });
    }
    getTrendingMovies() {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.dataService.getTrendingMovies(this.page).subscribe((response) => {
            if (response && response.results) {
                this.trendingMovies = [...this.trendingMovies, ...response.results]; // Append new results
                console.log("Trending Movies:", this.trendingMovies);
            }
            else {
                this.errorMessage = 'No trending movies found.';
            }
            this.isLoading = false;
        }, (error) => {
            console.error("Error fetching trending movies:", error);
            this.errorMessage = 'Failed to fetch trending movies. Please try again later.';
            this.isLoading = false;
        });
    }
    listenForSearchUpdates() {
        this.dataService.currentMoviesList.subscribe((movies) => {
            if (movies.length > 0) {
                this.searchMode = true;
                this.trendingMovies = movies; // Replace with searched movies
            }
            else {
                this.searchMode = false;
                this.page = 1;
                this.trendingMovies = [];
                this.getTrendingMovies(); // Reset to trending movies
            }
        }, (error) => {
            console.error("Error fetching searched movies:", error);
            this.errorMessage = 'Failed to fetch search results.';
        });
    }
    onScroll() {
        this.page++;
        if (!this.searchMode &&
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10 &&
            !this.isLoading &&
            this.page <= this.totalPages) {
            this.getAllMovies();
        }
    }
    filterByGenre(genreId) {
        this.dataService.getMoviesByGenre(genreId).subscribe((response) => {
            this.allMovies = response.results;
        }, (error) => {
            console.error('Error fetching movies by genre:', error);
        });
    }
    filterClicked() {
        console.log("here");
        this.filterByGenreClicked = !this.filterByGenreClicked;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 21, vars: 3, consts: [[1, "carousel-container"], ["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "class", "carousel-item active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "middle-section"], [1, "all-movie-heading"], ["mat-raised-button", "", 1, "filter-button", "bg-primary", 3, "click"], [4, "ngIf"], [1, "movie-container"], [3, "movie", 4, "ngFor", "ngForOf"], [1, "carousel-item", "active", 3, "ngClass"], [3, "movie"], [1, "genres"], ["mat-button", "", "class", "genre-link", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "genre-link", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_16_listener() { return ctx.filterClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_app_card_20_Template, 1, 1, "app-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendingMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterByGenreClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allMovies);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _carousel_card_carousel_card_component__WEBPACK_IMPORTED_MODULE_5__["CarouselCardComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]], styles: [".carousel-container[_ngcontent-%COMP%]{\r\n  height: max-content;\r\n}\r\n\r\n.middle-section[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: 7fr 1fr;\r\n  padding: 1.5rem 0rem 0rem 2rem;\r\n}\r\n\r\n.filter-button[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 1rem;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.all-movie-heading[_ngcontent-%COMP%]{\r\n  font-size: 1.2rem;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\n.movie-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    background: whitesmoke;\r\n}\r\n\r\n.genres[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  background-image: linear-gradient(to left, #434343 0%, black 100%);\r\n  color: white;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n    .movie-container[_ngcontent-%COMP%] {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    .movie-container[_ngcontent-%COMP%] {\r\n      grid-template-columns: repeat(1, 1fr);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUNBQXlDO0VBQ3pDLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQjs7QUFHQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtFQUFrRTtFQUNsRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVFO0lBQ0U7TUFDRSxxQ0FBcUM7SUFDdkM7RUFDRjs7QUFFQTtJQUNFO01BQ0UscUNBQXFDO0lBQ3ZDO0VBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4ubWlkZGxlLXNlY3Rpb257XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAxZnI7XHJcbiAgcGFkZGluZzogMS41cmVtIDByZW0gMHJlbSAycmVtO1xyXG59XHJcblxyXG4uZmlsdGVyLWJ1dHRvbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcclxufVxyXG5cclxuLmFsbC1tb3ZpZS1oZWFkaW5ne1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5tb3ZpZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuXHJcbi5nZW5yZXN7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM0MzQzNDMgMCUsIGJsYWNrIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5tb3ZpZS1jb250YWluZXIge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tb3ZpZS1jb250YWluZXIge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "E/nK":
/*!*************************************!*\
  !*** ./src/app/auth.interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthInterceptor {
    constructor() { }
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            const clonedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(clonedReq);
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DataService {
    constructor(http) {
        this.http = http;
        this.movieSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentMovie = this.movieSource.asObservable();
        this.movieListSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentMoviesList = this.movieListSource.asObservable();
        this.genresSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.genres$ = this.genresSubject.asObservable();
        this.API_KEY = '5fb013f828dc53501234ae8f4379871f';
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.fetchGenres();
    }
    getTrendingMovies(page) {
        const url = `${this.baseUrl}/trending/all/week?api_key=${this.API_KEY}`;
        return this.http.get(url);
    }
    getAllMoviesByPage(page) {
        const url = `${this.baseUrl}/discover/movie?api_key=${this.API_KEY}&page=${page}`;
        return this.http.get(url);
    }
    searchMovies(query) {
        const url = `${this.baseUrl}/search/movie?api_key=${this.API_KEY}&query=${encodeURIComponent(query)}`;
        return this.http.get(url);
    }
    changeMovie(movie) {
        this.movieSource.next(movie);
    }
    updateMoviesList(movies) {
        this.movieListSource.next(movies);
    }
    getGenres() {
        return this.http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.API_KEY}&language=en-US`);
    }
    getMoviesByGenre(genreId) {
        return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.API_KEY}&with_genres=${genreId}`);
    }
    fetchGenres() {
        this.getGenres().subscribe((response) => {
            if (response && response.genres) {
                this.genresSubject.next(response.genres);
            }
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'cineQuest';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W8Xo":
/*!**********************************************!*\
  !*** ./src/app/pipes/year-from-date.pipe.ts ***!
  \**********************************************/
/*! exports provided: YearFromDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearFromDatePipe", function() { return YearFromDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class YearFromDatePipe {
    transform(value) {
        if (!value)
            return '';
        const year = value.split('-')[0];
        return year;
    }
}
YearFromDatePipe.ɵfac = function YearFromDatePipe_Factory(t) { return new (t || YearFromDatePipe)(); };
YearFromDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "yearFromDate", type: YearFromDatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearFromDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'yearFromDate'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.interceptor */ "E/nK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pipes_year_from_date_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/year-from-date.pipe */ "W8Xo");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _components_carousel_card_carousel_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/carousel-card/carousel-card.component */ "lZac");
/* harmony import */ var _components_details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/details-dialog/details-dialog.component */ "aJE/");
/* harmony import */ var _pipes_one_decimal_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/one-decimal.pipe */ "vHS+");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
        _pipes_year_from_date_pipe__WEBPACK_IMPORTED_MODULE_17__["YearFromDatePipe"],
        _components_carousel_card_carousel_card_component__WEBPACK_IMPORTED_MODULE_21__["CarouselCardComponent"],
        _components_details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_22__["DetailsDialogComponent"],
        _pipes_one_decimal_pipe__WEBPACK_IMPORTED_MODULE_23__["OneDecimalPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                    _pipes_year_from_date_pipe__WEBPACK_IMPORTED_MODULE_17__["YearFromDatePipe"],
                    _components_carousel_card_carousel_card_component__WEBPACK_IMPORTED_MODULE_21__["CarouselCardComponent"],
                    _components_details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_22__["DetailsDialogComponent"],
                    _pipes_one_decimal_pipe__WEBPACK_IMPORTED_MODULE_23__["OneDecimalPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aJE/":
/*!***********************************************************************!*\
  !*** ./src/app/components/details-dialog/details-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetailsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsDialogComponent", function() { return DetailsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _pipes_one_decimal_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/one-decimal.pipe */ "vHS+");





class DetailsDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
DetailsDialogComponent.ɵfac = function DetailsDialogComponent_Factory(t) { return new (t || DetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DetailsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsDialogComponent, selectors: [["app-details-dialog"]], decls: 13, vars: 6, template: function DetailsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Orginal Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ratings: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "oneDecimal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.originalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.data == null ? null : ctx.data.voteAverage), "/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.overview);
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"]], pipes: [_pipes_one_decimal_pipe__WEBPACK_IMPORTED_MODULE_3__["OneDecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-dialog',
                templateUrl: './details-dialog.component.html',
                styleUrls: ['./details-dialog.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../details-dialog/details-dialog.component */ "aJE/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _pipes_year_from_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/year-from-date.pipe */ "W8Xo");










function CardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "yearFromDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r0.movie.release_date));
} }
function CardComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.movie.backdrop_path ? "https://image.tmdb.org/t/p/w500" + ctx_r1.movie.backdrop_path : "assets/no-image.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class CardComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    openDetailsModal() {
        var _a, _b, _c;
        this.dialogRef.open(_details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DetailsDialogComponent"], {
            data: {
                title: this.movie.title,
                originalTitle: (_a = this.movie) === null || _a === void 0 ? void 0 : _a.original_title,
                voteAverage: (_b = this.movie) === null || _b === void 0 ? void 0 : _b.vote_average,
                overview: (_c = this.movie) === null || _c === void 0 ? void 0 : _c.overview,
            },
        });
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { movie: "movie" }, decls: 11, vars: 6, consts: [[1, "card-container", 3, "ngStyle"], [1, "overlay"], ["class", "release-date", 4, "ngIf"], [1, "card-content"], ["class", "backdrop-image", "alt", "Movie Poster", 3, "src", 4, "ngIf"], [1, "movie-title"], ["mat-flat-button", "", 3, "click"], [1, "release-date"], ["alt", "Movie Poster", 1, "backdrop-image", 3, "src"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_img_4_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_7_listener() { return ctx.openDetailsModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " View Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.movie.poster_path ? "url(https://image.tmdb.org/t/p/w500" + ctx.movie.poster_path + ")" : "url(../../assets/images/bg.png)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie.release_date != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie.backdrop_path != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"]], pipes: [_pipes_year_from_date_pipe__WEBPACK_IMPORTED_MODULE_8__["YearFromDatePipe"]], styles: [".card-container[_ngcontent-%COMP%] {\r\n    margin: 1rem;\r\n    height: 26rem;\r\n    width: 21rem;\r\n    position: relative;\r\n    overflow: hidden;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 100%;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.movie-title[_ngcontent-%COMP%]{\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 20px;\r\n    color: white;\r\n}\r\n\r\n.backdrop-image[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    border-radius: 0.5rem;\r\n    background: #b7b3b3;\r\n    box-shadow:  18px 18px 51px #868383,\r\n             -18px -18px 51px #e8e3e3;\r\n}\r\n\r\n.release-date[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDBGQUEwRjtBQUM5Rjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscURBQXFEO0lBQ3JELHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkI7cUNBQ2lDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGhlaWdodDogMjZyZW07XHJcbiAgICB3aWR0aDogMjFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAub3ZlcmxheSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLm1vdmllLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhY2tkcm9wLWltYWdle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNiN2IzYjM7XHJcbiAgICBib3gtc2hhZG93OiAgMThweCAxOHB4IDUxcHggIzg2ODM4MyxcclxuICAgICAgICAgICAgIC0xOHB4IC0xOHB4IDUxcHggI2U4ZTNlMztcclxufVxyXG5cclxuLnJlbGVhc2UtZGF0ZXtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lZac":
/*!*********************************************************************!*\
  !*** ./src/app/components/carousel-card/carousel-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: CarouselCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselCardComponent", function() { return CarouselCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");




function CarouselCardComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + ctx_r0.movie.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-image": a0, "background-size": "cover", "background-position": "center", "width": "100%", "height": "80vh" }; };
class CarouselCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarouselCardComponent.ɵfac = function CarouselCardComponent_Factory(t) { return new (t || CarouselCardComponent)(); };
CarouselCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselCardComponent, selectors: [["app-carousel-card"]], inputs: { movie: "movie" }, decls: 13, vars: 9, consts: [[1, "carousel-card-outer"], [1, "image-bg", 3, "ngStyle"], [1, "overlay"], [1, "card-content"], ["class", "backdrop-image", "alt", "Movie Poster", 3, "src", 4, "ngIf"], [1, "release-date"], [1, "movie-title"], ["alt", "Movie Poster", 1, "backdrop-image", 3, "src"]], template: function CarouselCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselCardComponent_img_4_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.movie.poster_path ? "url(https://image.tmdb.org/t/p/w500" + ctx.movie.poster_path + ")" : "url(../../assets/images/bg.png)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie.backdrop_path);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, ctx.movie.release_date, "yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".carousel-card-outer[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-bg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    filter: brightness(0.7);\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    padding: 15px;\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.release-date[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\r\n    margin-right: 53rem;\r\n    margin-top: 1rem;\r\n    background-color: #ffcc00;\r\n    color: black;\r\n    font-weight: bold;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.backdrop-image[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    object-fit:contain;\r\n    border-radius: 10px;\r\n    background: #b7b3b3;\r\n    box-shadow:  18px 18px 51px #868383,\r\n             -18px -18px 51px #e8e3e3;\r\n}\r\n\r\n.movie-title[_ngcontent-%COMP%] {\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkI7cUNBQ2lDO0FBQ3JDOztBQUVBO0lBQ0ksNEVBQTRFO0lBQzVFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkNBQTJDO0FBQy9DIiwiZmlsZSI6ImNhcm91c2VsLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jYXJkLW91dGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1iZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNyk7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5yZWxlYXNlLWRhdGUgbWF0LWNoaXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1M3JlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrZHJvcC1pbWFnZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgb2JqZWN0LWZpdDpjb250YWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNiN2IzYjM7XHJcbiAgICBib3gtc2hhZG93OiAgMThweCAxOHB4IDUxcHggIzg2ODM4MyxcclxuICAgICAgICAgICAgIC0xOHB4IC0xOHB4IDUxcHggI2U4ZTNlMztcclxufVxyXG5cclxuLm1vdmllLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel-card',
                templateUrl: './carousel-card.component.html',
                styleUrls: ['./carousel-card.component.css']
            }]
    }], function () { return []; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vHS+":
/*!*******************************************!*\
  !*** ./src/app/pipes/one-decimal.pipe.ts ***!
  \*******************************************/
/*! exports provided: OneDecimalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneDecimalPipe", function() { return OneDecimalPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OneDecimalPipe {
    transform(value) {
        if (isNaN(value)) {
            return '';
        }
        return value.toFixed(1);
    }
}
OneDecimalPipe.ɵfac = function OneDecimalPipe_Factory(t) { return new (t || OneDecimalPipe)(); };
OneDecimalPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "oneDecimal", type: OneDecimalPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OneDecimalPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'oneDecimal'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");





const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "**", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map