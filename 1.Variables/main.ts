// let count = 5;
// count = "a";

/**
 * The above code will compile to JS though we get compile time error.
 * Any valid Javascript code is also a valid typescript code.
 * TS compiler helps us with type safety here
 */

let n: number; 
let b: boolean;
let s: string;
let d: any;
let x: number[];
x = [1, 2, 3];
let z: any[];
z = ["Shinu", true, 2]
// ENUMS
enum Color {Red, Blue, Green}
let bgColor = Color.Blue
/**
 * Enum values are automatically assigned in incremental way {Red=0, Blue=1, Green=2}.
 * Its better hence to give explicit values when declaring a enum
 */

// BY DEFAULT THE TYPE IS "any"