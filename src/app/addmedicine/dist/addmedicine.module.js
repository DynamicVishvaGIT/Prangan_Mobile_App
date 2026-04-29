"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddmedicinePageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var addmedicine_routing_module_1 = require("./addmedicine-routing.module");
var addmedicine_page_1 = require("./addmedicine.page");
var ion_bottom_sheet_1 = require("ion-bottom-sheet");
var AddmedicinePageModule = /** @class */ (function () {
    function AddmedicinePageModule() {
    }
    AddmedicinePageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                addmedicine_routing_module_1.AddmedicinePageRoutingModule,
                ion_bottom_sheet_1.IonBottomSheetModule
            ],
            declarations: [addmedicine_page_1.AddmedicinePage]
        })
    ], AddmedicinePageModule);
    return AddmedicinePageModule;
}());
exports.AddmedicinePageModule = AddmedicinePageModule;
