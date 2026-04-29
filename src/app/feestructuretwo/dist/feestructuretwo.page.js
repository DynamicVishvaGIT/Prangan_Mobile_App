"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeestructuretwoPage = void 0;
var core_1 = require("@angular/core");
var FeestructuretwoPage = /** @class */ (function () {
    function FeestructuretwoPage(route, apiService) {
        this.route = route;
        this.apiService = apiService;
        this.rows = [];
        this.filtered_row = [];
    }
    FeestructuretwoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.branch_id = this.route.snapshot.paramMap.get('branch_id');
        this.pdf = this.route.snapshot.paramMap.get('pdf');
        this.branch_name = this.route.snapshot.paramMap.get('branch_name');
        this.apiService.fetchFeeColumn().then(function (data) {
            console.log(data);
            _this.columns = JSON.parse(data.data);
        })["catch"](function (err) {
            console.log(err, err);
        });
        this.apiService.fetchFeeRow().then(function (data) {
            console.log('row', JSON.parse(data.data));
            var rows = JSON.parse(data.data);
            var _loop_1 = function (index) {
                console.log('r', rows[index]['row']['id']);
                rowId = rows[index]['row']['id'];
                _this.apiService.fetchFeeStructure(rowId, _this.branch_id).then(function (data) {
                    console.log(data);
                    rows[index]['row']['amount_arary'] = JSON.parse(data.data);
                    console.log('rows', rows);
                    // this.rows.push(rows);
                    _this.filtered_row.push(rows[index]['row']);
                })["catch"](function (err) {
                    console.log(err, err);
                });
            };
            var rowId;
            for (var index = 0; index < rows.length; index++) {
                _loop_1(index);
            }
            // for (let i = 0; i < this.rows.length; i++) {
            //   this.filtered_row.push(this.rows[i]['row'])
            // }
            console.log('ssrows', _this.filtered_row);
        })["catch"](function (err) {
            console.log(err, err);
        });
    };
    FeestructuretwoPage.prototype.ngOnInit = function () {
    };
    // checkIfAmount(amountArray,columnId){
    //   if(amountArray.some(column => column.column_id == columnId)) {
    //    return true
    //   }
    //   else{
    //     return false
    //   }
    // }
    FeestructuretwoPage.prototype.openPdf = function () {
        if (this.pdf.indexOf("pdf") !== -1) {
            window.open(encodeURI(this.pdf), "_system", "location=yes");
        }
        else {
            this.apiService.presentToast('File not available', 2000);
        }
    };
    FeestructuretwoPage = __decorate([
        core_1.Component({
            selector: 'app-feestructuretwo',
            templateUrl: './feestructuretwo.page.html',
            styleUrls: ['./feestructuretwo.page.scss']
        })
    ], FeestructuretwoPage);
    return FeestructuretwoPage;
}());
exports.FeestructuretwoPage = FeestructuretwoPage;
