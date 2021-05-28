export class LikeComponent {

    constructor(private _noOfLkes : number, private _isLiked : boolean) {
        
    }

    get noOfLikes() {
        return this._noOfLkes;
    }

    set noOfLikes(likes) {
        this._noOfLkes = this._noOfLkes+likes;
    }

    get isLiked() {
        return this._isLiked;
    }

    set isLiked(isLiked) {
        this._isLiked = isLiked;
    }

    like() {
        this._isLiked = (this._isLiked === true ? false : true);
        this._isLiked === true ? this._noOfLkes++ : this._noOfLkes--;
    }

    onLike() {
        this._isLiked = !this._isLiked;
        this._noOfLkes += (this._isLiked === true ? +1 : -1)
    }
}