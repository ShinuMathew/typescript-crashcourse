interface Point {
    x :number,
    y: number
    draw: () => void
}

let drawPointInterface = (point: Point) => console.log(point)

// Interfaces are ways to declare a type
/**
 * Interfaces are purely for declaration and not implement a type i.e only signatures
 */