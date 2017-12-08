"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(_name, _phone) {
        this._name = _name;
        this._phone = _phone;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            if (val == 'hi')
                throw new Error('hi should\'nt be a name');
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.updateInfo = function () {
        console.log('name: ' + this._name + ' phone: ' + this._phone);
    };
    return User;
}());
exports.User = User;
