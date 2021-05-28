let message;
message = "Shinu"

let endsWithU = message.endsWith("u");
// By default message is of type "any" 
// if we want to use String method in intellisense over it we need to tell the compiler that it is a string =>

let endsWithUMethod1 = (<string>message).endsWith("u")
let endsWithUMethod2 = (message as string).endsWith("u")