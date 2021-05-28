export class GetterSetter {
    x : number;
    y : number;

    getX() {
        return this.x;
    }

    setX(x) {
        if(x <= 0) 
            throw Error("Not a number...")
        else
            this.x = x
    }

    // The above can be simply modified using the typescript feature

    get X() {
        return this.x
    }

    set X(x) {
        if(x <= 0) 
            throw Error("Not a number...")
        else
            this.x = x
    }
}

let getterSetter = new GetterSetter();
let x = getterSetter.x

getterSetter.setX(30)
console.log(getterSetter.getX())
// The above can be simply modified using the typescript feature
getterSetter.X = 40
console.log(getterSetter.X)