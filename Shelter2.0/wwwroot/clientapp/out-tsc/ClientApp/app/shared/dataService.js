import * as tslib_1 from "tslib";
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.adverts = [];
    }
    DataService.prototype.loadAdrverts = function () {
        var _this = this;
        return this.http.get("https://localhost:44340/api/Adverts")
            .pipe(map(function (data) {
            _this.adverts = data;
            return true;
        }));
    };
    DataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map