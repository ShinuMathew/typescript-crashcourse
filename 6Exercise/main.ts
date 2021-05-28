import { LikeComponent } from './like-component'

let likeComponent = new LikeComponent(20 , false)

likeComponent.onLike()
console.log(`${likeComponent.isLiked}, ${likeComponent.noOfLikes}`)

likeComponent.onLike()
console.log(`${likeComponent.isLiked}, ${likeComponent.noOfLikes}`)

/**
 * @Command => tsc -t es5 *.ts && node main.js
 */