class Pointer {
    x : number;
    y : number;
    private s : string;

    constructor(x: number, y?: number, z?:number) {
        this.x = x;
        this.y = y;
    }
    // We canot have multiple constructors in Typescript
    // Instead we use optionnal parameters
    // Once a parameter is optional we need to make the parameters after that too as optional
    draw() {        
        console.log(this.x)
    }
}

class PointerWithAccessModifier {
    
    constructor(private x: number, private y?: number, private z?:number) {        
        // If we prefix a constructor parameter with access modifiers like public or private, 
        // then typescript will automatically generate a field with the exact same name and initialize it
        // Similar to :
        /**
         *  constructor(x: number, y?: number, z?:number) {
                this.x = x;
                this.y = y;
            }   
         */
    }
    // We canot have multiple constructors in Typescript
    // Instead we use optionnal parameters
    // Once a parameter is optional we need to make the parameters after that too as optional
    draw() {        
        console.log(this.x)
    }
}

let pointer = new Pointer(10 , 20)
pointer.x = 10
pointer.y = 20
pointer.draw()