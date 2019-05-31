import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var AdvertList = /** @class */ (function () {
    function AdvertList() {
        this.adverts = [{
                title: "First Animal",
                shortDescription: "doggo"
            }, {
                title: "Second Animal",
                shortDescription: "doggo"
            }];
    }
    AdvertList = tslib_1.__decorate([
        Component({
            selector: "advert-list",
            templateUrl: "advertList.component.html",
            styleUrls: []
        })
    ], AdvertList);
    return AdvertList;
}());
export { AdvertList };
//# sourceMappingURL=advertList.component.js.map