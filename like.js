"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(num) {
        this.num = num;
        this.selected = false;
    }
    Like.prototype.like = function () {
        this.selected = !this.selected;
        this.num += (this.selected) ? +1 : -1;
        console.log("selected: " + this.selected + ", number: " + this.num);
    };
    return Like;
}());
exports.Like = Like;
