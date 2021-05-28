"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like-component");
var likeComponent = new like_component_1.LikeComponent(20, false);
likeComponent.onLike();
console.log(likeComponent.isLiked + ", " + likeComponent.noOfLikes);
likeComponent.onLike();
console.log(likeComponent.isLiked + ", " + likeComponent.noOfLikes);
/**
 * @Command => tsc -t es5 *.ts && node main.js
 */ 
