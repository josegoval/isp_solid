import { Animal } from "./animal";

class Bird implements Animal {
    bark() { }
    run() {
        console.log("Bird is running");
    }
    fly() {
        console.log("Bird is flying");
    }
}