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
    function User(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (val) {
        if (val == 'hi')
            throw new Error('hi should\'nt be a name');
        this.name = val;
    };
    User.prototype.updateInfo = function () {
        console.log('name: ' + this.name + ' phone: ' + this.phone);
    };
    return User;
}());
var user = new User();
user.getName();
user.setName('ddd');
user.updateInfo();
/*******************************************/ 
