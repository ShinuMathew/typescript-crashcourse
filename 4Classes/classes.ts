import { GetterSetter } from '../5GetterSetter/classes'

class Points {
    x : number;
    y : number;
    draw() {        
        console.log(this.x)
    }
}

let point = new Points()
point.x = 10
point.y = 20
point.draw()