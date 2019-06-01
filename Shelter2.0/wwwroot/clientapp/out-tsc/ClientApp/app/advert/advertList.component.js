import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
var AdvertList = /** @class */ (function () {
    function AdvertList(data) {
        this.data = data;
        this.adverts = [];
    }
    AdvertList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadAdrverts()
            .subscribe(function (success) {
            if (success) {
                _this.adverts = _this.data.adverts;
            }
        });
    };
    AdvertList = tslib_1.__decorate([
        Component({
            selector: "advert-list",
            templateUrl: "advertList.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], AdvertList);
    return AdvertList;
}());
export { AdvertList };
//# sourceMappingURL=advertList.component.js.map