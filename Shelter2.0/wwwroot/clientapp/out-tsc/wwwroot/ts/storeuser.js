var StoreUser = /** @class */ (function () {
    function StoreUser(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StoreUser.prototype.showName = function () {
        alert(this.firstName + " " + this.lastName);
    };
    return StoreUser;
}());
//# sourceMappingURL=storeuser.js.map