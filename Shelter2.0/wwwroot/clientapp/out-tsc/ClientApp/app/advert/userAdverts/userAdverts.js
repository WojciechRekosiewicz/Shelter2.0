import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from 'ClientApp/app/shared/dataService';
var UserAdverts = /** @class */ (function () {
    function UserAdverts(data) {
        this.data = data;
    }
    UserAdverts = tslib_1.__decorate([
        Component({
            selector: "user-adverts",
            templateUrl: "userAdverts.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], UserAdverts);
    return UserAdverts;
}());
export { UserAdverts };
//# sourceMappingURL=userAdverts.js.map