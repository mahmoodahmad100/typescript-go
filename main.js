function loop(num) {
    for (var i = 0; i < num; i++) {
        console.log(i);
    }
    console.log('the last value is: ' + i);
}
loop(6);
// rewrite loop function (arrow function)
var altLoop = function (num) {
    for (var i = 0; i < num; i++) {
        console.log(i);
    }
    console.log('the last value is: ' + i);
};
altLoop(6);
// arrow function
var hi = function () { return console.log('hi'); };
hi();
/*******************************************/
var Colors;
(function (Colors) {
    Colors["yellow"] = "y";
    Colors[Colors["blue"] = 5456] = "blue";
})(Colors || (Colors = {}));
;
var font = Colors.yellow;
console.log(font);
/*******************************************/
var msg;
function print(string) {
    console.log(string);
}
msg = 'welcome';
print(msg);
print(msg);
var login = function (user) {
    // the logic is here
};
// rewrite the User interface by using class
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
var user = new User();
user.name;
user.name = "fsda";
user.updateInfo();
/*******************************************/ 
