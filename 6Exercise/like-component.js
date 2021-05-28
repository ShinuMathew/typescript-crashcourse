"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_noOfLkes, _isLiked) {
        this._noOfLkes = _noOfLkes;
        this._isLiked = _isLiked;
    }
    Object.defineProperty(LikeComponent.prototype, "noOfLikes", {
        get: function () {
            return this._noOfLkes;
        },
        set: function (likes) {
            this._noOfLkes = this._noOfLkes + likes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isLiked", {
        get: function () {
            return this._isLiked;
        },
        set: function (isLiked) {
            this._isLiked = isLiked;
        },
        enumerable: false,
        configurable: true
    });
    LikeComponent.prototype.like = function () {
        this._isLiked = (this._isLiked === true ? false : true);
        this._isLiked === true ? this._noOfLkes++ : this._noOfLkes--;
    };
    LikeComponent.prototype.onLike = function () {
        this._isLiked = !this._isLiked;
        this._noOfLkes += (this._isLiked === true ? +1 : -1);
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
